> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/webplugin](https://developer.apple.com/documentation/objectivec/webplugin)

# WebPlugIn (Swift)

**Framework:** Objective-C Runtime  
**Kind:** API Collection

The `WebPlugIn` informal protocol defines methods that enable interaction between an application using the WebKit framework and any WebKit-based plug-ins it may use.

## Topics

### Accessing the Scripting Environment

- [objectForWebScript](nsobject-swift.class/objectforwebscript.md): Returns an object that exposes the plug-in’s scripting interface.

### Using Plug-in State Information

- [webPlugInSetIsSelected(\_:)](nsobject-swift.class/webpluginsetisselected%28__%29.md): Controls plug-in behavior based on its selection.

### Controlling the Plug-in

- [webPlugInDestroy()](nsobject-swift.class/webplugindestroy%28%29.md): Prepares the plug-in for deallocation.
- [webPlugInInitialize()](nsobject-swift.class/webplugininitialize%28%29.md): Initializes the plug-in.
- [webPlugInStart()](nsobject-swift.class/webpluginstart%28%29.md): Tells the plug-in to start normal operation.
- [webPlugInStop()](nsobject-swift.class/webpluginstop%28%29.md): Tells the plug-in to stop normal operation.

### Main resource messages

- [webPlugInMainResourceDidFailWithError(\_:)](nsobject-swift.class/webpluginmainresourcedidfailwitherror%28__%29.md): Invoked when an error occurs loading the main resource.
- [webPlugInMainResourceDidFinishLoading()](nsobject-swift.class/webpluginmainresourcedidfinishloading%28%29.md): Invoked when the connection successfully finishes loading data.
- [webPlugInMainResourceDidReceive(\_:)](nsobject-swift.class/webpluginmainresourcedidreceive%28__%29-5b6f6.md): Invoked when the connection loads data incrementally.
- [webPlugInMainResourceDidReceive(\_:)](nsobject-swift.class/webpluginmainresourcedidreceive%28__%29-6x7b9.md): Invoked when the connection receives sufficient data to construct the URL response for its request.

## See Also

### Interacting with Web Plug-ins

- [WebPlugInContainer](webplugincontainer.md): `WebPlugInContainer` is an informal protocol that enables a plug-in to send messages to the application.

# WebPlugIn (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** API Collection

The `WebPlugIn` informal protocol defines methods that enable interaction between an application using the WebKit framework and any WebKit-based plug-ins it may use.

## Topics

### Accessing the Scripting Environment

- [objectForWebScript](nsobject-swift.class/objectforwebscript.md): Returns an object that exposes the plug-in’s scripting interface.

### Using Plug-in State Information

- [webPlugInSetIsSelected:](nsobject-swift.class/webpluginsetisselected%28__%29.md): Controls plug-in behavior based on its selection.

### Controlling the Plug-in

- [webPlugInDestroy](nsobject-swift.class/webplugindestroy%28%29.md): Prepares the plug-in for deallocation.
- [webPlugInInitialize](nsobject-swift.class/webplugininitialize%28%29.md): Initializes the plug-in.
- [webPlugInStart](nsobject-swift.class/webpluginstart%28%29.md): Tells the plug-in to start normal operation.
- [webPlugInStop](nsobject-swift.class/webpluginstop%28%29.md): Tells the plug-in to stop normal operation.

### Main resource messages

- [webPlugInMainResourceDidFailWithError:](nsobject-swift.class/webpluginmainresourcedidfailwitherror%28__%29.md): Invoked when an error occurs loading the main resource.
- [webPlugInMainResourceDidFinishLoading](nsobject-swift.class/webpluginmainresourcedidfinishloading%28%29.md): Invoked when the connection successfully finishes loading data.
- [webPlugInMainResourceDidReceiveData:](nsobject-swift.class/webpluginmainresourcedidreceive%28__%29-5b6f6.md): Invoked when the connection loads data incrementally.
- [webPlugInMainResourceDidReceiveResponse:](nsobject-swift.class/webpluginmainresourcedidreceive%28__%29-6x7b9.md): Invoked when the connection receives sufficient data to construct the URL response for its request.

## See Also

### Interacting with Web Plug-ins

- [WebPlugInContainer](webplugincontainer.md): `WebPlugInContainer` is an informal protocol that enables a plug-in to send messages to the application.
