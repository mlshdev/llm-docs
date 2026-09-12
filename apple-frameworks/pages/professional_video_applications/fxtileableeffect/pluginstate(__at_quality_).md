> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxtileableeffect/pluginstate(_:at:quality:)](https://developer.apple.com/documentation/professional_video_applications/fxtileableeffect/pluginstate(_:at:quality:))

# pluginState(\_:at:quality:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Retrieves the plug-in’s parameter values, performs any calculations it needs to from those values, and packages up the result to be used later with rendering.

## Declaration

```swift
func pluginState(_ pluginState: AutoreleasingUnsafeMutablePointer<NSData>?, at renderTime: CMTime, quality qualityLevel: FxQuality) throws
```

## Parameters

- `pluginState`: The state of the plug-in. Your plug-in should return an autoreleased [NSData](../../foundation/nsdata.md) that the host retains. Once created, your plug-in should not hold on to this pointer. The host returns this data (or a copy of it) to your plug-in during other methods, such as the [renderDestinationImage(\_:sourceImages:pluginState:at:)](renderdestinationimage%28__sourceimages_pluginstate_at_%29.md) method and [scheduleInputs(\_:withPluginState:at:)](scheduleinputs%28__withpluginstate_at_%29.md) methods.
- `renderTime`: The rational time at which your plug-in is being asked to gather its rendering state.
- `qualityLevel`: The requested render quality (`kFxQuality_LOW`, `kFxQuality_MEDIUM`, or `kFxQuality_HIGH`).

## Mentioned In

- [Analyzing media](../../professional-video-applications/analyzing-media.md)
- [Thread safety in plug-ins](../../professional-video-applications/thread-safety-in-plug-ins.md)
- [Using FxPlug APIs](../../professional-video-applications/using-fxplug-apis.md)

<a id="discussion"></a>

## Discussion

The host application calls this method before rendering. The `FxParameterRetrievalAPI*` is valid during this call. Use it to get the values of your plug-in’s parameters, then put those values or the results of any calculations you need to do with those parameters to render into an `NSData` that you return to the host application. The host passes it back to you during subsequent calls. Do not re-use the `NSData`; always create a new one, as this method may be called on multiple threads at the same time.

## See Also

### Rendering an output

- [scheduleInputs(\_:withPluginState:at:)](scheduleinputs%28__withpluginstate_at_%29.md): Tells the host application how many frames from the given input sources your plug-in requires in order to render at the given render time.
- [renderDestinationImage(\_:sourceImages:pluginState:at:)](renderdestinationimage%28__sourceimages_pluginstate_at_%29.md): Sends a request that the host wants your plug-in to do its rendering for a given output image tile.

# pluginState:atTime:quality:error: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Retrieves the plug-in’s parameter values, performs any calculations it needs to from those values, and packages up the result to be used later with rendering.

## Declaration

```objectivec
- (BOOL) pluginState:(NSData * *) pluginState atTime:(CMTime) renderTime quality:(FxQuality) qualityLevel error:(NSError * *) error;
```

## Parameters

- `pluginState`: The state of the plug-in. Your plug-in should return an autoreleased [NSData](../../foundation/nsdata.md) that the host retains. Once created, your plug-in should not hold on to this pointer. The host returns this data (or a copy of it) to your plug-in during other methods, such as the [renderDestinationImage:sourceImages:pluginState:atTime:error:](renderdestinationimage%28__sourceimages_pluginstate_at_%29.md) method and [scheduleInputs:withPluginState:atTime:error:](scheduleinputs%28__withpluginstate_at_%29.md) methods.
- `renderTime`: The rational time at which your plug-in is being asked to gather its rendering state.
- `qualityLevel`: The requested render quality (`kFxQuality_LOW`, `kFxQuality_MEDIUM`, or `kFxQuality_HIGH`).
- `error`: Description of the problem if you are unable to add all of your parameters. After describing the problem in this [NSError](../../foundation/nserror.md), return `NO`. Use the [FxPlugErrorDomain](../fxplugerrordomain.md) when creating the error.

<a id="return-value"></a>

## Return Value

An `NSData` that contains whatever data you need to render or calculate input and output tile bounds.

## Mentioned In

- [Analyzing media](../../professional-video-applications/analyzing-media.md)
- [Thread safety in plug-ins](../../professional-video-applications/thread-safety-in-plug-ins.md)
- [Using FxPlug APIs](../../professional-video-applications/using-fxplug-apis.md)

<a id="discussion"></a>

## Discussion

The host application calls this method before rendering. The `FxParameterRetrievalAPI*` is valid during this call. Use it to get the values of your plug-in’s parameters, then put those values or the results of any calculations you need to do with those parameters to render into an `NSData` that you return to the host application. The host passes it back to you during subsequent calls. Do not re-use the `NSData`; always create a new one, as this method may be called on multiple threads at the same time.

## See Also

### Rendering an output

- [scheduleInputs:withPluginState:atTime:error:](scheduleinputs%28__withpluginstate_at_%29.md): Tells the host application how many frames from the given input sources your plug-in requires in order to render at the given render time.
- [renderDestinationImage:sourceImages:pluginState:atTime:error:](renderdestinationimage%28__sourceimages_pluginstate_at_%29.md): Sends a request that the host wants your plug-in to do its rendering for a given output image tile.
