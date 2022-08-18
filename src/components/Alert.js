import React from 'react'
// props.alert && ====> If props.alert is NOT null, then execute <div>.....wala logic else nothing 

export default function Alert(props) {

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
    <div style={{height: '50px'}}>
{    props.alert && <div className={`alert alert-${props.alert.Type} alert-dismissible fade show`} role="alert">  
        <strong>{capitalize(props.alert.Type)}</strong>: {props.alert.msg}
    </div>}    
</div>
// <div> tag ni andar aapde logic mukyu chhe so we did {props.alert &&........} in curly bracket as it is jsx
)
}

/*we have created type as object*/