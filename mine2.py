def findLargestPattern():
    Num=int(input("숫자입력"))
    arr=[]
    count=1
    Maxlength=1
    for i in range(Num):
        InputNum=int(input("정수입력"))
        arr.append(InputNum)
    
    print(arr)

    for i in range(len(arr)-1):
        if arr[i] * arr[i+1]<0:
            count +=1
        else:
            if count > maxLength:
                maxLength = count
            count=1
      
      
    
    
    if count > Maxlength: 
        Maxlength = count
    print(Maxlength)
  

findLargestPattern()