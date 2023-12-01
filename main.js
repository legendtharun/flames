//requred functions
function Count(a, b) {
  let count_no = 0;
  for (let h = 0; h < a.length; h++) {
    if (a[h] === b) {
      count_no = count_no + 1;
    }
  }
  return count_no;
}
function Remove(a, b) {
  for (let h = 0; h < a.length; h++) {
    if (a[h] === b) {
      a.splice(h, 1);
    }
  }
}
function ResetForm() {
  document.querySelector("#form").reset();
  class_list = document.getElementById("result").classList;
  class_list.remove("active_result");
  document.getElementById("result").innerHTML = "";
}
function Result() {
  class_list = document.getElementById("result").classList;
  class_list.add("active_result");
}
function Headclick() {
  window.location.href = ".";
}
function Flames() {
  let fname = document.getElementById("fname").value;
  let sname = document.getElementById("sname").value;
  fname = fname.toLowerCase();
  sname = sname.toLowerCase();
  let flist = [];
  let slist = [];
  let flist1 = [];
  let slist1 = [];
  let final_list = [];
  if (fname.length > sname.length) {
    for (let i = 0; i < fname.length; i++) {
      if (fname[i] !== " ") {
        flist.push(fname[i]);
        flist1.push(fname[i]);
      }
    }
    for (let i = 0; i < sname.length; i++) {
      if (sname[i] !== " ") {
        slist.push(sname[i]);
        slist1.push(sname[i]);
      }
    }
  } else {
    for (let i = 0; i < sname.length; i++) {
      if (sname[i] !== " ") {
        flist.push(sname[i]);
        flist1.push(sname[i]);
      }
    }
    for (let i = 0; i < fname.length; i++) {
      if (fname[i] !== " ") {
        slist.push(fname[i]);
        slist1.push(fname[i]);
      }
    }
  }
  function MainFlames() {
    for (let i = 0; i < flist1.length; i++) {
      if (!final_list.includes(flist1[i])) {
        let count_of_1 = Count(flist, flist1[i]);
        let count_of_2 = Count(slist, flist1[i]);
        if (count_of_1 > count_of_2 || count_of_2 > count_of_1) {
          let count = count_of_1 - count_of_2;
          if (count < 0) {
            count = count * -1;
          }
          for (let x = 0; x < count; x++) {
            final_list.push(flist1[i]);
          }
          Remove(flist, flist1[i]);
          while (slist.includes(flist1[i])) {
            for (let f = 0; f < slist.length; f++) {
              if (slist[f] === flist1[i]) {
                slist.splice(f, 1);
              }
            }
          }
        } else {
          Remove(flist, flist1[i]);
          Remove(slist, flist1[i]);
        }
      }
    }
    for (let x = 0; x < slist.length; x++) {
      final_list.push(slist[x]);
    }
    let flames;
    if (final_list.length === 1) {
      flames = ["s"];
    } else if (final_list.length === 2 || final_list.length === 4) {
      flames = ["e"];
    } else if (final_list.length === 3 || final_list.length === 5) {
      flames = ["f"];
    } else {
      const factor = Math.floor(final_list.length / 6);
      let count_const = final_list.length - factor * 6;
      flames = ["f", "l", "a", "m", "e", "s"];
      for (let i = 0; i < 5; i++) {
        let count = count_const + factor * i;
        for (let x = 0; x < flames.length; x++) {
          if (count - 1 >= flames.length) {
            new_count = count - 1 - flames.length;
            while (new_count >= flames.length) {
              new_count = new_count - flames.length;
            }
          } else {
            new_count = count - 1;
          }
        }
        let sindex = 0;

        flames.splice(new_count, 1);
        for (let x = new_count; x < flames.length; x++) {
          flames.splice(sindex, 0, flames[x]);
          flames.splice(x + 1, 1);
          sindex++;
        }
      }
    }
    let result;
    if (flames[0] === "f") {
      result = "You will be friends";
    } else if (flames[0] === "l") {
      result = "You will remain lovers";
    } else if (flames[0] === "a") {
      result = "You are very affectionate for them";
    } else if (flames[0] === "m") {
      result = "You will marry them";
    } else if (flames[0] === "e") {
      result = "You both remain as enemys";
    } else {
      result = "You both are siblings";
    }
    document.getElementById("result").innerHTML = result;
  }
  if (
    JSON.stringify(flist1) == JSON.stringify(slist1) &&
    (flist1.length !== 0 || slist1.length !== 0)
  ) {
    result = "Both are same names";
    document.getElementById("result").innerHTML = result;
  } else if (flist1.length === 0 || slist1.length === 0) {
    result = "One of the names is empty";
    document.getElementById("result").innerHTML = result;
  } else {
    MainFlames();
  }
  Result();
}
