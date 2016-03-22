//ExportView
var ExportView = (function () {
    function ExportView() {
    }
    ExportView.prototype.initExportView = function () {
        var exportContainer = document.createElement("div");
        exportContainer.id = "exportContent";
        exportContainer.className = "menuContent";
        var nameAppContainer = document.createElement("div");
        nameAppContainer.id = "nameAppContainer";
        nameAppContainer.className = "exportSubmenu";
        var exportOptionContainer = document.createElement("div");
        exportOptionContainer.id = "exportOptionContainer";
        exportOptionContainer.className = "exportSubmenu";
        var exportResultContainer = document.createElement("div");
        exportResultContainer.id = "exportResultContainer";
        exportResultContainer.className = "exportSubmenu";
        /////////////////////////////////  name App
        var nameAppTitle = document.createElement("span");
        nameAppTitle.id = "nameAppTitle";
        nameAppTitle.textContent = " le nom de l'application est : ";
        nameAppTitle.className = "exportTitle";
        var dynamicName = document.createElement("span");
        dynamicName.id = "dynamicName";
        dynamicName.textContent = Scene.sceneName;
        nameAppTitle.appendChild(dynamicName);
        this.dynamicName = dynamicName;
        var rulesName = document.createElement("span");
        rulesName.id = "rulesName";
        rulesName.textContent = "Seules les lettres de l'alphabet et les nombres sont acceptés. Les espaces, les apostrophes et les accents sont automatiquement remplacés. Le nom ne peut pas commencer par un nombre ; il doit comporter entre 1 et 50 caractères.";
        this.rulesName = rulesName;
        var input = document.createElement("input");
        input.id = "inputNameApp";
        input.className = "inputExport";
        input.value = Scene.sceneName;
        var renameBottomButtonContainer = document.createElement("div");
        renameBottomButtonContainer.className = "bottomButtonContainer";
        var renameButton = document.createElement("button");
        renameButton.type = "button";
        renameButton.id = "buttonNameApp";
        renameButton.className = "button";
        renameButton.textContent = "Modifier le nom de d'application";
        renameBottomButtonContainer.appendChild(renameButton);
        nameAppContainer.appendChild(nameAppTitle);
        nameAppContainer.appendChild(rulesName);
        nameAppContainer.appendChild(input);
        nameAppContainer.appendChild(renameBottomButtonContainer);
        this.inputNameApp = input;
        this.buttonNameApp = renameButton;
        /////////////////////////////////  export Options
        var moreOptionDiv = document.createElement("div");
        moreOptionDiv.textContent = "+ plus d'options";
        moreOptionDiv.id = "moreOptionDiv";
        moreOptionDiv.style.display = "block";
        this.moreOptionDiv = moreOptionDiv;
        var optionContainer = document.createElement("div");
        optionContainer.id = "optionContainer";
        optionContainer.style.display = "none";
        this.optionContainer = optionContainer;
        var lessOptionDiv = document.createElement("div");
        lessOptionDiv.id = "lessOptionDiv";
        lessOptionDiv.textContent = "- moins d'options";
        lessOptionDiv.style.display = "none";
        this.lessOptionDiv = lessOptionDiv;
        var urlDiv = document.createElement("div");
        urlDiv.id = "inputExport";
        var exportOptionTitle = document.createElement("span");
        exportOptionTitle.id = "exportOptionTitle";
        exportOptionTitle.textContent = "Choix de l'export";
        exportOptionTitle.className = "exportTitle";
        var fwurl = document.createElement("input");
        fwurl.id = "faustweburl";
        fwurl.className = "inputExport";
        fwurl.value = "http://faustservice.grame.fr";
        this.inputServerUrl = fwurl;
        urlDiv.appendChild(fwurl);
        var exportChoiceDiv = document.createElement('div');
        exportChoiceDiv.id = "optionExportContainer";
        var refreshButton = document.createElement("button");
        refreshButton.textContent = "Rafraîchir le serveur";
        refreshButton.id = "refreshButton";
        refreshButton.className = "button";
        this.refreshButton = refreshButton;
        urlDiv.appendChild(refreshButton);
        var selectDiv = document.createElement("div");
        selectDiv.id = "selectDiv";
        exportChoiceDiv.appendChild(selectDiv);
        var selectPlatform = document.createElement("select");
        selectPlatform.id = "platforms";
        selectPlatform.className = "selects";
        var self = this;
        this.selectPlatform = selectPlatform;
        selectDiv.appendChild(selectPlatform);
        var selectArch = document.createElement("select");
        selectArch.id = "architectures";
        selectArch.className = "selects";
        selectDiv.appendChild(selectArch);
        var exportButton = document.createElement("input");
        exportButton.id = "exportButton";
        exportButton.type = "submit";
        exportButton.className = "button";
        exportButton.value = "Exporter";
        this.exportButton = exportButton;
        var exportBottomButtonContainer = document.createElement("div");
        exportBottomButtonContainer.className = "bottomButtonContainer";
        exportBottomButtonContainer.appendChild(exportButton);
        optionContainer.appendChild(exportOptionTitle);
        optionContainer.appendChild(urlDiv);
        optionContainer.appendChild(exportChoiceDiv);
        exportOptionContainer.appendChild(moreOptionDiv);
        exportOptionContainer.appendChild(lessOptionDiv);
        exportOptionContainer.appendChild(optionContainer);
        exportOptionContainer.appendChild(exportBottomButtonContainer);
        //////////////////////////// export Result
        var exportResultTitle = document.createElement("span");
        exportResultTitle.id = "exportResultTitle";
        exportResultTitle.textContent = "Téléchargement";
        exportResultTitle.className = "exportTitle";
        exportResultContainer.appendChild(exportResultTitle);
        exportContainer.appendChild(nameAppContainer);
        exportContainer.appendChild(exportOptionContainer);
        exportContainer.appendChild(exportResultContainer);
        return exportContainer;
    };
    return ExportView;
})();
//# sourceMappingURL=ExportView.js.map