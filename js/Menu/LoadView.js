var LoadView = (function () {
    function LoadView() {
    }
    LoadView.prototype.initLoadView = function () {
        var loadContainer = document.createElement("div");
        loadContainer.id = "loadContainer";
        loadContainer.className = "menuContent";
        var loadFileContainer = document.createElement("div");
        loadFileContainer.id = "loadFileContainer";
        loadFileContainer.className = "exportSubmenu";
        var loadLocalContainer = document.createElement("div");
        loadLocalContainer.id = "loadLocalContainer";
        loadLocalContainer.className = "exportSubmenu";
        var loadCloudContainer = document.createElement("div");
        loadCloudContainer.id = "loadCloudContainer";
        loadCloudContainer.className = "exportSubmenu";
        ////////////////////////////////////////load file
        var loadFileBottomButtonContainer = document.createElement("div");
        loadFileBottomButtonContainer.className = "bottomButtonContainer";
        var loadFileDiv = document.createElement("div");
        loadFileDiv.id = "loadFileDiv";
        var loadFileInput = document.createElement("input");
        loadFileInput.type = "file";
        loadFileInput.id = "loadFileInput";
        this.loadFileInput = loadFileInput;
        loadFileDiv.appendChild(loadFileInput);
        var aLightExemple = document.createElement("a");
        aLightExemple.id = "aLightExemple";
        aLightExemple.className = "exempleAnchor";
        aLightExemple.textContent = "Small exemple";
        aLightExemple.href = "json/Small_Exemple.json";
        aLightExemple.draggable = false;
        this.aLightExemple = aLightExemple;
        var aBigExemple = document.createElement("a");
        aBigExemple.id = "aBigExemple";
        aBigExemple.className = "exempleAnchor";
        aBigExemple.textContent = "Big exemple";
        aBigExemple.href = "json/Big_Exemple.json";
        aBigExemple.draggable = false;
        this.aBigExemple = aBigExemple;
        var aLightPreExemple = document.createElement("a");
        aLightPreExemple.id = "aLightPreExemple";
        aLightPreExemple.className = "exempleAnchor";
        aLightPreExemple.textContent = "Small exemple precompile";
        aLightPreExemple.href = "json/Small_Exemple_Precompile.json";
        aLightPreExemple.draggable = false;
        this.aLightPreExemple = aLightPreExemple;
        var aBigPreExemple = document.createElement("a");
        aBigPreExemple.id = "aBigPreExemple";
        aBigPreExemple.className = "exempleAnchor";
        aBigPreExemple.textContent = "Big exemple precompile";
        aBigPreExemple.href = "json/Big_Exemple_Precompile.json";
        aBigPreExemple.draggable = false;
        this.aBigPreExemple = aBigPreExemple;
        var loadFileButton = document.createElement("button");
        loadFileButton.type = "button";
        loadFileButton.id = "loadFileButton";
        loadFileButton.className = "button";
        loadFileButton.textContent = App.messageRessource.buttonLoadFile;
        this.loadFileButton = loadFileButton;
        loadFileContainer.appendChild(loadFileDiv);
        loadFileContainer.appendChild(aLightExemple);
        loadFileContainer.appendChild(aLightPreExemple);
        loadFileContainer.appendChild(aBigExemple);
        loadFileContainer.appendChild(aBigPreExemple);
        loadFileBottomButtonContainer.appendChild(loadFileButton);
        loadFileContainer.appendChild(loadFileBottomButtonContainer);
        ////////////////////////////////////////local load
        var existingSceneSelect = document.createElement("select");
        existingSceneSelect.id = "existingLoadSceneSelect";
        existingSceneSelect.className = "sceneSelect";
        existingSceneSelect.size = 7;
        Ps.initialize(existingSceneSelect, { suppressScrollX: true, theme: 'my-theme-name' });
        this.existingSceneSelect = existingSceneSelect;
        var localButtonSuppr = document.createElement("button");
        localButtonSuppr.type = "button";
        localButtonSuppr.id = "localButtonSuppr";
        localButtonSuppr.className = "button";
        localButtonSuppr.textContent = App.messageRessource.buttonSuppress;
        this.buttonLocalSuppr = localButtonSuppr;
        var localButton = document.createElement("button");
        localButton.type = "button";
        localButton.id = "localLoadButton";
        localButton.className = "button";
        localButton.textContent = App.messageRessource.buttonLoadLocal;
        this.buttonLoadLocal = localButton;
        var localBottomButtonContainer = document.createElement("div");
        localBottomButtonContainer.className = "bottomButtonContainer";
        localBottomButtonContainer.appendChild(localButton);
        loadLocalContainer.appendChild(existingSceneSelect);
        //loadLocalContainer.appendChild(localButtonSuppr);
        loadLocalContainer.appendChild(localBottomButtonContainer);
        //////////////////////////////////////load Cloud
        var driveContainer = document.createElement("div");
        driveContainer.id = "driveContainerLoad";
        this.driveContainer = driveContainer;
        var buttonConnectDrive = document.createElement("button");
        buttonConnectDrive.id = "buttonConnectLoadDrive";
        buttonConnectDrive.textContent = App.messageRessource.buttonConnectCloud;
        buttonConnectDrive.className = "button";
        this.buttonConnectDrive = buttonConnectDrive;
        var selectDrive = document.createElement("select");
        selectDrive.size = 6;
        selectDrive.id = "loadSceneSelectDrive";
        selectDrive.className = "sceneSelect ";
        selectDrive.style.display = "none";
        this.cloudSelectFile = selectDrive;
        var changeAccountButton = document.createElement("button");
        changeAccountButton.type = "button";
        //changeAccountButton.id = "changeAccountButton";
        changeAccountButton.className = "button changeAccountButton";
        changeAccountButton.textContent = App.messageRessource.buttonLogoutCloud;
        changeAccountButton.style.display = "none";
        this.buttonChangeAccount = changeAccountButton;
        var cloudButton = document.createElement("button");
        cloudButton.type = "button";
        cloudButton.id = "cloudLoadButton";
        cloudButton.className = "button";
        cloudButton.textContent = App.messageRessource.buttonLoadCloud;
        this.buttonLoadCloud = cloudButton;
        var cloudBottomButtonContainer = document.createElement("div");
        cloudBottomButtonContainer.className = "bottomButtonContainer";
        cloudBottomButtonContainer.appendChild(cloudButton);
        driveContainer.appendChild(buttonConnectDrive);
        driveContainer.appendChild(changeAccountButton);
        driveContainer.appendChild(selectDrive);
        driveContainer.appendChild(cloudBottomButtonContainer);
        loadCloudContainer.appendChild(driveContainer);
        loadContainer.appendChild(loadFileContainer);
        loadContainer.appendChild(loadLocalContainer);
        loadContainer.appendChild(loadCloudContainer);
        return loadContainer;
    };
    return LoadView;
}());
//# sourceMappingURL=LoadView.js.map