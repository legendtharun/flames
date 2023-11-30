#This is for integrating with py-script instead of js
from pyscript import document


def Flames(event):
    fname=document.getElementById('fname').value
    sname=document.getElementById('sname').value
    fname=fname.lower().strip()
    sname=sname.lower().strip()
    flist,slist,final_list=[],[],[]
    flist1,slist1=[],[]
    if len(fname)>len(sname):
        for i in fname:
            flist.append(i)
            flist1.append(i)
        for i in sname:
            slist.append(i)
            slist1.append(i)
    else:
        for i in sname:
            flist.append(i)
            flist1.append(i)
        for i in fname:
            slist.append(i)
            slist1.append(i)
    def MainFlames():
        for i in flist1:
            if i not in final_list:
                count_of_1=flist.count(i)
                count_of_2=slist.count(i)
                if count_of_1>count_of_2 or count_of_2>count_of_1:
                    count=count_of_1-count_of_2
                    if count<0:
                        count=-(count)
                    for x in range(0,count):
                        final_list.append(i)
                    flist.remove(i)
                    while i in slist:
                        for item in slist:
                            if item==i:
                                slist.remove(i)
                else:
                    flist.remove(i)
                    slist.remove(i)

        for i in slist:
            final_list.append(i)      
        
        if len(final_list)==1:
            flames=["s"]
        elif len(final_list)==2:
            flames= ["e"]
        elif len(final_list)==3:
            flames=["f"]
        elif len(final_list)==4:
            flames=["e"]
        elif len(final_list)==5:
            flames=["f"]
        else:
            factor=len(final_list)//6
            count_const=len(final_list)-factor*6
            flames=["f","l","a","m","e","s"]
            for i in range(0,5):
                count=count_const+factor*i
                for x in range(-(len(flames)),0):
                    if count-1>=len(flames):
                        new_count=(count-1)-len(flames)
                        while new_count>=len(flames):
                            new_count=new_count-len(flames)    
                    else:
                        new_count=count-1
                    
                    if flames[new_count]==flames[x]:
                        neg_index=x
                sindex=0
                flames.pop(neg_index)

                for x in range(neg_index+1,0):
                    flames.insert(sindex,flames[x])
                    flames.pop(x)
                    sindex+=1
                neg_index=0
        if flames[0]=="f":
            result="You will be friends"
        elif flames[0]=="l":
            result="You will remain lovers"
        elif flames[0]=="a":
            result="You are very affectionate for them"
        elif flames[0]=="m":
            result="You will marry them"
        elif flames[0]=="e":
            result="You both remain as enemys"
        else:
            result="You both are siblings"
        document.getElementById("result").innerHTML=result
        
    if flist1==slist1:
        result="Both are same names"
        document.getElementById("result").innerHTML=result
    elif len(flist1)==0 or len(slist1)==0:
        result="One of the names is empty"
        document.getElementById("result").innerHTML=result
    else:
        MainFlames()
        
    


