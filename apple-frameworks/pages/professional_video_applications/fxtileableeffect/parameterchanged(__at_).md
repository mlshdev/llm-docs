> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxtileableeffect/parameterchanged(_:at:)](https://developer.apple.com/documentation/professional_video_applications/fxtileableeffect/parameterchanged(_:at:))

# parameterChanged(\_:at:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Executes when the host detects that a parameter has changed.

## Declaration

```swift
optional func parameterChanged(_ paramID: UInt32, at time: CMTime) throws
```

## Parameters

- `paramID`: The ID of the parameter that changed.
- `time`: The rational time at which the parameter changed.

## Mentioned In

- [Adding parameters to plug-ins](../../professional-video-applications/adding-parameters-to-plug-ins.md)
- [Building an FxPlug plug-in manually](../../professional-video-applications/building-an-fxplug-plug-in-manually.md)
- [Thread safety in plug-ins](../../professional-video-applications/thread-safety-in-plug-ins.md)
- [Versioning and obsoleting old plug-ins](../../professional-video-applications/versioning-and-obsoleting-old-plug-ins.md)

<a id="discussion"></a>

## Discussion

Use this method to change, enable, disable, hide, or show other parameters. This method is called each time the user changes a parameter. You can use this method to update other parameters (such as hiding or showing them). You have full access to the [FxParameterCreationAPI_v5](../fxparametercreationapi_v5.md) or later, [FxParameterRetrievalAPI_v6](../fxparameterretrievalapi_v6.md) or later, and [FxParameterSettingAPI_v5](../fxparametersettingapi_v5.md) or later, within this method.

## See Also

### Adding and setting parameters

- [addParameters()](addparameters%28%29.md): Tells the host application what parameters your plug-in requires.
- [class(forCustomParameterID:)](class%28forcustomparameterid_%29.md): Returns the class of the object contained in the custom parameter with the given ID.
- [classes(forCustomParameterID:)](classes%28forcustomparameterid_%29.md): Returns the classes of the objects contained in the custom parameter with the given ID.

# parameterChanged:atTime:error: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Executes when the host detects that a parameter has changed.

## Declaration

```objectivec
- (BOOL) parameterChanged:(UInt32) paramID atTime:(CMTime) time error:(NSError * *) error;
```

## Parameters

- `paramID`: The ID of the parameter that changed.
- `time`: The rational time at which the parameter changed.
- `error`: Return any errors that occurred in this parameter.

<a id="return-value"></a>

## Return Value

Return `YES` if you successfully handled the parameter change. Return `NO` otherwise. If you return `NO`, also fill out the error parameter by creating an `NSError` with the [FxPlugErrorDomain](../fxplugerrordomain.md).

## Mentioned In

- [Adding parameters to plug-ins](../../professional-video-applications/adding-parameters-to-plug-ins.md)
- [Building an FxPlug plug-in manually](../../professional-video-applications/building-an-fxplug-plug-in-manually.md)
- [Thread safety in plug-ins](../../professional-video-applications/thread-safety-in-plug-ins.md)
- [Versioning and obsoleting old plug-ins](../../professional-video-applications/versioning-and-obsoleting-old-plug-ins.md)

<a id="discussion"></a>

## Discussion

Use this method to change, enable, disable, hide, or show other parameters. This method is called each time the user changes a parameter. You can use this method to update other parameters (such as hiding or showing them). You have full access to the [FxParameterCreationAPI_v5](../fxparametercreationapi_v5.md) or later, [FxParameterRetrievalAPI_v6](../fxparameterretrievalapi_v6.md) or later, and [FxParameterSettingAPI_v5](../fxparametersettingapi_v5.md) or later, within this method.

## See Also

### Adding and setting parameters

- [addParametersWithError:](addparameters%28%29.md): Tells the host application what parameters your plug-in requires.
- [classForCustomParameterID:](class%28forcustomparameterid_%29.md): Returns the class of the object contained in the custom parameter with the given ID.
- [classesForCustomParameterID:](classes%28forcustomparameterid_%29.md): Returns the classes of the objects contained in the custom parameter with the given ID.
