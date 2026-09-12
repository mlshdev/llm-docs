> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxtileableeffect/plugininstanceaddedtodocument()](https://developer.apple.com/documentation/professional_video_applications/fxtileableeffect/plugininstanceaddedtodocument())

# pluginInstanceAddedToDocument() (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.2+

Notifies your plug-in when it becomes part of user’s document.

## Declaration

```swift
optional func pluginInstanceAddedToDocument()
```

<a id="discussion"></a>

## Discussion

Called when a new plug-in instance is created or a document is loaded and an existing instance is deserialized. When the host calls this method, the plug-in is a part of the document and the various API objects work as expected.

## See Also

### Setting up your plug-in

- [init(apiManager:)](init%28apimanager_%29-6vvaz.md): Initializes the API manager for your plug-in.
- [PROAPIAccessing](../proapiaccessing.md)
- [finishInitialSetup()](finishinitialsetup%28%29.md): Finishes the initial setup and is called exactly once on first application of your plug-in to allow it to do anything else it needs to in order to finish setting itself up.
- [properties(\_:)](properties%28__%29.md): Tells the host application about what the plug-in needs and supports, such as whether it renders in a gamma-corrected color space or a linear one.

# pluginInstanceAddedToDocument (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Notifies your plug-in when it becomes part of user’s document.

## Declaration

```objectivec
- (void) pluginInstanceAddedToDocument;
```

<a id="discussion"></a>

## Discussion

Called when a new plug-in instance is created or a document is loaded and an existing instance is deserialized. When the host calls this method, the plug-in is a part of the document and the various API objects work as expected.

## See Also

### Setting up your plug-in

- [initWithAPIManager:](init%28apimanager_%29-6vvaz.md): Initializes the API manager for your plug-in.
- [PROAPIAccessing](../proapiaccessing.md)
- [finishInitialSetup:](finishinitialsetup%28%29.md): Finishes the initial setup and is called exactly once on first application of your plug-in to allow it to do anything else it needs to in order to finish setting itself up.
- [properties:error:](properties%28__%29.md): Tells the host application about what the plug-in needs and supports, such as whether it renders in a gamma-corrected color space or a linear one.
