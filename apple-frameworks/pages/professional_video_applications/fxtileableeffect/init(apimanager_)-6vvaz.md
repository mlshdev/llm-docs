> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxtileableeffect/init(apimanager:)-6vvaz](https://developer.apple.com/documentation/professional_video_applications/fxtileableeffect/init(apimanager:)-6vvaz)

# init(apiManager:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Initializer  
**Availability:** FxPlug 4.0+

Initializes the API manager for your plug-in.

## Declaration

```swift
init?(apiManager: any PROAPIAccessing)
```

## Parameters

- `apiManager`: An object that obtains the various API objects your plug-in will need for communicating with the host application.

## Mentioned In

- [Adding onscreen controls to plug-ins](../../professional-video-applications/adding-onscreen-controls-to-plug-ins.md)

<a id="discussion"></a>

## Discussion

Save a weak reference to the `apiManager` object to use in subsequent calls. The plug-in initializes its properties and instance variables and returns a pointer to `self`. If any part of initialization fails in an unrecoverable way, this method returns `nil`.

## See Also

### Setting up your plug-in

- [PROAPIAccessing](../proapiaccessing.md)
- [finishInitialSetup()](finishinitialsetup%28%29.md): Finishes the initial setup and is called exactly once on first application of your plug-in to allow it to do anything else it needs to in order to finish setting itself up.
- [pluginInstanceAddedToDocument()](plugininstanceaddedtodocument%28%29.md): Notifies your plug-in when it becomes part of user’s document.
- [properties(\_:)](properties%28__%29.md): Tells the host application about what the plug-in needs and supports, such as whether it renders in a gamma-corrected color space or a linear one.

# initWithAPIManager: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Initializes the API manager for your plug-in.

## Declaration

```objectivec
- (id) initWithAPIManager:(id<PROAPIAccessing>) apiManager;
```

## Parameters

- `apiManager`: An object that obtains the various API objects your plug-in will need for communicating with the host application.

## Mentioned In

- [Adding onscreen controls to plug-ins](../../professional-video-applications/adding-onscreen-controls-to-plug-ins.md)

<a id="discussion"></a>

## Discussion

Save a weak reference to the `apiManager` object to use in subsequent calls. The plug-in initializes its properties and instance variables and returns a pointer to `self`. If any part of initialization fails in an unrecoverable way, this method returns `nil`.

## See Also

### Setting up your plug-in

- [PROAPIAccessing](../proapiaccessing.md)
- [finishInitialSetup:](finishinitialsetup%28%29.md): Finishes the initial setup and is called exactly once on first application of your plug-in to allow it to do anything else it needs to in order to finish setting itself up.
- [pluginInstanceAddedToDocument](plugininstanceaddedtodocument%28%29.md): Notifies your plug-in when it becomes part of user’s document.
- [properties:error:](properties%28__%29.md): Tells the host application about what the plug-in needs and supports, such as whether it renders in a gamma-corrected color space or a linear one.
