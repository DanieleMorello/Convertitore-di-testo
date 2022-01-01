document.getElementById("upper-case").addEventListener("click", function () {
        let str = document.querySelector('textarea').value.toUpperCase().split(' ');
        document.querySelector('textarea').value = str.join(' ');
    })
    document.getElementById("lower-case").addEventListener("click", function () {
        let str = document.querySelector('textarea').value.toLowerCase().split(' ');
        document.querySelector('textarea').value = str.join(' ');
    })
    document.getElementById("proper-case").addEventListener("click", function () {
        let str = document.querySelector('textarea').value.split(' ');
        for (let i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        document.querySelector('textarea').value = str.join(' ');
    })

    document.getElementById("sentence-case").addEventListener("click", function () {
        let str = document.querySelector('textarea').value.toLowerCase().split('. ');
        for (let i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        document.querySelector('textarea').value = str.join('. ');
    })

    function download(filename, text) {
      let element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    }

    // Start file download.
    document.getElementById("save-text-file").addEventListener("click", function() {
      // Generate download of hello.txt file with some content
      let text = document.getElementById("Case Converter").value;
      let filename = "text.txt";

      download(filename, text);
    },
            false);
