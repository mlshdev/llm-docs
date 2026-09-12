> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxtileableeffect/addparameters()](https://developer.apple.com/documentation/professional_video_applications/fxtileableeffect/addparameters())

# addParameters() (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Tells the host application what parameters your plug-in requires.

## Declaration

```swift
func addParameters() throws
```

## Mentioned In

- [Adding parameters to plug-ins](../../professional-video-applications/adding-parameters-to-plug-ins.md)
- [Analyzing media](../../professional-video-applications/analyzing-media.md)
- [Building an FxPlug plug-in manually](../../professional-video-applications/building-an-fxplug-plug-in-manually.md)
- [Using FxPlug APIs](../../professional-video-applications/using-fxplug-apis.md)

<a id="discussion"></a>

## Discussion

Use the `apiManager` object that was passed to your [init(apiManager:)](init%28apimanager_%29-6vvaz.md) method to obtain an `FxParameterCreation*` object. Tell the parameter creation API object which types of parameters your plug-in needs. This method is only called at most once per instance of your plug-in. It will not be called when loading a document which contains your plug-in.

## See Also

### Adding and setting parameters

- [class(forCustomParameterID:)](class%28forcustomparameterid_%29.md): Returns the class of the object contained in the custom parameter with the given ID.
- [classes(forCustomParameterID:)](classes%28forcustomparameterid_%29.md): Returns the classes of the objects contained in the custom parameter with the given ID.
- [parameterChanged(\_:at:)](parameterchanged%28__at_%29.md): Executes when the host detects that a parameter has changed.

# addParametersWithError: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Tells the host application what parameters your plug-in requires.

## Declaration

```objectivec
- (BOOL) addParametersWithError:(NSError * *) error;
```

## Parameters

- `error`: Description of the problem if you are unable to add all of your parameters. After describing the problem in this `NSError,` return `NO`. Use the [FxPlugErrorDomain](../fxplugerrordomain.md) when creating the error.

<a id="return-value"></a>

## Return Value

This method returns `YES` if it successfully creates the parameters the plug-in needs. If not, it returns `NO` and fills out the `error` parameter with the details of what went wrong.

## Mentioned In

- [Adding parameters to plug-ins](../../professional-video-applications/adding-parameters-to-plug-ins.md)
- [Analyzing media](../../professional-video-applications/analyzing-media.md)
- [Building an FxPlug plug-in manually](../../professional-video-applications/building-an-fxplug-plug-in-manually.md)
- [Using FxPlug APIs](../../professional-video-applications/using-fxplug-apis.md)

<a id="discussion"></a>

## Discussion

Use the `apiManager` object that was passed to your [initWithAPIManager:](init%28apimanager_%29-6vvaz.md) method to obtain an `FxParameterCreation*` object. Tell the parameter creation API object which types of parameters your plug-in needs. This method is only called at most once per instance of your plug-in. It will not be called when loading a document which contains your plug-in.

## See Also

### Adding and setting parameters

- [classForCustomParameterID:](class%28forcustomparameterid_%29.md): Returns the class of the object contained in the custom parameter with the given ID.
- [classesForCustomParameterID:](classes%28forcustomparameterid_%29.md): Returns the classes of the objects contained in the custom parameter with the given ID.
- [parameterChanged:atTime:error:](parameterchanged%28__at_%29.md): Executes when the host detects that a parameter has changed.
