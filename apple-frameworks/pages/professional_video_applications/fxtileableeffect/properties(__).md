> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxtileableeffect/properties(_:)](https://developer.apple.com/documentation/professional_video_applications/fxtileableeffect/properties(_:))

# properties(\_:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Tells the host application about what the plug-in needs and supports, such as whether it renders in a gamma-corrected color space or a linear one.

## Declaration

```swift
func properties(_ properties: AutoreleasingUnsafeMutablePointer<NSDictionary>?) throws
```

## Parameters

- `properties`: An [NSDictionary](../../foundation/nsdictionary.md) containing the values of any properties you want to tell the host you support or don’t support.

## Mentioned In

- [Optimizing FxPlug plug-ins](../../professional-video-applications/optimizing-fxplug-plug-ins.md)

<a id="discussion"></a>

## Discussion

This method is called once per plug-in instantiation and the result is cached for later use by the host application. The dictionary returned by this method should contain various `kFxPropertyKeys` and their corresponding values.

## Topics

### Property Keys

- [kFxPropertyKey_NeedsFullBuffer](../kfxpropertykey_needsfullbuffer.md): A key that determines whether the plug-in needs the entire image to do its processing, and can’t tile its rendering.
- [kFxPropertyKey_VariesWhenParamsAreStatic](../kfxpropertykey_varieswhenparamsarestatic.md): A key that determines whether your rendering varies even when the parameters remain the same.
- [kFxPropertyKey_ChangesOutputSize](../kfxpropertykey_changesoutputsize.md): A key that determines whether your filter has the ability to change the size of its output to be different than the size of its input.
- [kFxPropertyKey_DesiredProcessingColorInfo](../kfxpropertykey_desiredprocessingcolorinfo.md): A key that determines whether your plug-in renders in linear or gamma-corrected color space.

## See Also

### Setting up your plug-in

- [init(apiManager:)](init%28apimanager_%29-6vvaz.md): Initializes the API manager for your plug-in.
- [PROAPIAccessing](../proapiaccessing.md)
- [finishInitialSetup()](finishinitialsetup%28%29.md): Finishes the initial setup and is called exactly once on first application of your plug-in to allow it to do anything else it needs to in order to finish setting itself up.
- [pluginInstanceAddedToDocument()](plugininstanceaddedtodocument%28%29.md): Notifies your plug-in when it becomes part of user’s document.

# properties:error: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Tells the host application about what the plug-in needs and supports, such as whether it renders in a gamma-corrected color space or a linear one.

## Declaration

```objectivec
- (BOOL) properties:(NSDictionary * *) properties error:(NSError * *) error;
```

## Parameters

- `properties`: An [NSDictionary](../../foundation/nsdictionary.md) containing the values of any properties you want to tell the host you support or don’t support.
- `error`: Description of the problem if you are unable to add all of your parameters. After describing the problem in this [NSError](../../foundation/nserror.md), return NO. Use the [FxPlugErrorDomain](../fxplugerrordomain.md) when creating the error.

<a id="return-value"></a>

## Return Value

This method returns `YES` if it successfully created its properties dictionary and `NO` otherwise. If it returns `NO`, it fills out the error pointed to by the error parameter.

## Mentioned In

- [Optimizing FxPlug plug-ins](../../professional-video-applications/optimizing-fxplug-plug-ins.md)

<a id="discussion"></a>

## Discussion

This method is called once per plug-in instantiation and the result is cached for later use by the host application. The dictionary returned by this method should contain various `kFxPropertyKeys` and their corresponding values.

## Topics

### Property Keys

- [kFxPropertyKey_NeedsFullBuffer](../kfxpropertykey_needsfullbuffer.md): A key that determines whether the plug-in needs the entire image to do its processing, and can’t tile its rendering.
- [kFxPropertyKey_VariesWhenParamsAreStatic](../kfxpropertykey_varieswhenparamsarestatic.md): A key that determines whether your rendering varies even when the parameters remain the same.
- [kFxPropertyKey_ChangesOutputSize](../kfxpropertykey_changesoutputsize.md): A key that determines whether your filter has the ability to change the size of its output to be different than the size of its input.
- [kFxPropertyKey_DesiredProcessingColorInfo](../kfxpropertykey_desiredprocessingcolorinfo.md): A key that determines whether your plug-in renders in linear or gamma-corrected color space.

## See Also

### Setting up your plug-in

- [initWithAPIManager:](init%28apimanager_%29-6vvaz.md): Initializes the API manager for your plug-in.
- [PROAPIAccessing](../proapiaccessing.md)
- [finishInitialSetup:](finishinitialsetup%28%29.md): Finishes the initial setup and is called exactly once on first application of your plug-in to allow it to do anything else it needs to in order to finish setting itself up.
- [pluginInstanceAddedToDocument](plugininstanceaddedtodocument%28%29.md): Notifies your plug-in when it becomes part of user’s document.
