> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/1627369-evaluatescripts](https://developer.apple.com/documentation/tvmljs/1627369-evaluatescripts)

# evaluateScripts

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Function  
**Availability:** tvOS 9.0+

Verifies and executes TVMLKit JS files.

## Declaration

```
void evaluateScripts(
    in Array scripts, 
    in Function callback
);
```

## Parameters

- `scripts`: An array of URLs pointing to TVMLKit JS files.
- `callback`: A function that is executed after attempting to open the TVMLKit JS files. A boolean argument is passed into the function that signals whether all scripts loaded successfully.

<a id="discussion"></a>

## Discussion

This method first verifies that the locations contained in the `scripts` parameter contain TVMLKit JS files. The code in the files is then executed. The callback function contains a boolean argument that signals whether the TVMLKit JS files loaded successfully. Use this method to keep the size of your initial TVMLKit JS file small, while being able to incorporate other TVMLKit JS files. [Listing 1](1627369-evaluatescripts.md#1943541) shows an example incorporating this method into your app. The example creates an array containing the location of the ResourceLoader and Presenter TVMLKit JS files. On a successful load, the `success` parameter is set to `TRUE` and the app continues. Otherwise, an alert is presented onscreen stating that an error occurred.

<a id="1943541"></a>

**Listing 1**

evaluateScripts example

```javascript
App.onLaunch = function(options) {
    var javascriptFiles = [
        `${options.BASEURL}js/ResourceLoader.js`,
        `${options.BASEURL}js/Presenter.js`
    ];
 
    evaluateScripts(javascriptFiles, function(success) {
        if (success) {
            resourceLoader = new ResourceLoader(options.BASEURL);
 
            var index = resourceLoader.loadResource(`${options.BASEURL}templates/Index.xml.js`,
                function(resource) {
                    var doc = Presenter.makeDocument(resource);
                    doc.addEventListener("select", Presenter.load.bind(Presenter));
                    navigationDocument.pushDocument(doc);
                });
        } else {
 
            var alert = createAlert("Evaluate Scripts Error", "There was an error attempting to evaluate the external JavaScript files.\n\n Please check your network connection and try again later.");
            navigationDocument.presentModal(alert);
 
            throw ("Playback Example: unable to evaluate scripts.");
        }
    });
}
```
