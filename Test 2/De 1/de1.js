
        function check() {
            var name = document.getElementById("name").value;
            if (name == "") {
                alert("Vui lòng nhập tên")
                return false;
            }

            var name_convert1 = name.trim();
            var name_convert2 = name_convert1.replace(/\s+/g, " ");
            var name_convert3 = name_convert2[0].toUpperCase();
            for (var i = 1; i < name_convert2.length; i++) {
                name_convert3 += name_convert2[i];
                if (name_convert2[i] == " ") { 
                    name_convert3 += name_convert2[i+1].toUpperCase();
                    i++;
                }
            }
            document.getElementById("name").value = name_convert3;
            return true;
        }
