const msgAlert = (msg, type = 'danger') => {
    return `<p class="alert alert-${type} d-flex align-items-center justify-content-between my-2">${msg}<button data-bs-dismiss="alert" class="ms-2 btn-close"></button></p>`;
}


const area_cal = (type, value1 , value2)=>{
    if (type=='ractangle')
    {
      if(value1==''||value2=='')
      {
        return msgAlert(`All Fields Are Required`)
      }
      else{
        return msgAlert(`the area of ractangle is ${value1 * value2}`, 'success')
      }
    }
    if (type=='triangle')
    {
        if(value1==''||value2=='')
      {
        return msgAlert(`All Fields Are Required`)
      }
      else{
        return msgAlert(`the area of ractangle is ${2/(value1 * value2)}`, 'success')
      }  
    }
    if (type=='circle')
    {
        if(value1=='')
      {
        return msgAlert(`All Fields Are Required`)
      }
      else{
        return msgAlert(`the area of ractangle is ${3.1416*(value1 * value1)}`, 'success')
      } 
    }
    if (type=='square')
    {
        if(value1=='')
      {
        return msgAlert(`All Fields Are Required`)
      }
      else{
        return msgAlert(`the area of ractangle is ${value1*value1}`, 'success')
      } 
    }
}