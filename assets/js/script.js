$("#gform").submit((e)=>{
            e.preventDefault()
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbxnfbmns9KRBS1P8Jy2PGxFhTHqNIMDfL1TKujmkET4ZLtymT57Ihsss-xuKgE5b8M2/exec",
                data:$("#gform").serialize(),
                method:"post",
                success:function (response){
                    alert("Form submitted successfully")
                    window.location.reload()
                },
                error:function (err){
                    alert("Something Error")
    
                }
            })
        })