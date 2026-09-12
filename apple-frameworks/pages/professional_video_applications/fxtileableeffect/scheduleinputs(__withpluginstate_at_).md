> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxtileableeffect/scheduleinputs(_:withpluginstate:at:)](https://developer.apple.com/documentation/professional_video_applications/fxtileableeffect/scheduleinputs(_:withpluginstate:at:))

# scheduleInputs(\_:withPluginState:at:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Tells the host application how many frames from the given input sources your plug-in requires in order to render at the given render time.

## Declaration

```swift
optional func scheduleInputs(_ inputImageRequests: AutoreleasingUnsafeMutablePointer<NSArray?>?, withPluginState pluginState: Data?, at renderTime: CMTime) throws
```

## Parameters

- `inputImageRequests`: An NSArray that you fill out with requests for input image sources, input image times, whether to include leading filters, and the parameter IDs you wish to schedule.
- `pluginState`: The plug-in state returned by your plug-in’s [pluginState(\_:at:quality:)](pluginstate%28__at_quality_%29.md) method.
- `renderTime`: The time at which your plug-in will be asked to render with the frames being scheduled.

## Mentioned In

- [Migrating FxPlug 3 plug-ins to FxPlug 4](../../professional-video-applications/migrating-fxplug-3-plug-ins-to-fxplug-4.md)
- [Scheduling media in plug-ins](../../professional-video-applications/scheduling-media-in-plug-ins.md)

<a id="discussion"></a>

## Discussion

The host calls this method before rendering. Fill out the `inputImageRequests` parameter with an array of image requests. Each request represents one frame your plug-in needs to render. These can be frames of the effect source or they can be frames from image well parameters. If you don’t implement this method, the application will assume that a filter needs only the current frame of its effect source.

When instantiating an [FxImageTileRequest](../fximagetilerequest.md) array using [init(source:time:includeFilters:parameterID:)](../fximagetilerequest/init%28source_time_includefilters_parameterid_%29.md), the currently supported keys for [FxImageTileRequestSource](../fximagetilerequestsource.md) are:

| Key | Description |
| --- | --- |
| [kFxImageTileRequestSourceNone](../kfximagetilerequestsourcenone.md) | Not associated with an effect or parameter. |
| [kFxImageTileRequestSourceEffectClip](../kfximagetilerequestsourceeffectclip.md) | Request frame from the source clip. |
| [kFxImageTileRequestSourceParameter](../kfximagetilerequestsourceparameter.md) | Request frame from an image well parameter. |
| [kFxImageTileRequestSourceOutput](../kfximagetilerequestsourceoutput.md) | The output of the plug-in. |

`time` should indicate the requested [CMTime](../../coremedia/cmtime.md) of the input, `includeFilters` will indicate if the plugin requires frames after leading filter effects have already been applied, and `parameterID` will indicate the ID of the effect source (`0`) or image well.

## See Also

### Rendering an output

- [pluginState(\_:at:quality:)](pluginstate%28__at_quality_%29.md): Retrieves the plug-in’s parameter values, performs any calculations it needs to from those values, and packages up the result to be used later with rendering.
- [renderDestinationImage(\_:sourceImages:pluginState:at:)](renderdestinationimage%28__sourceimages_pluginstate_at_%29.md): Sends a request that the host wants your plug-in to do its rendering for a given output image tile.

# scheduleInputs:withPluginState:atTime:error: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Tells the host application how many frames from the given input sources your plug-in requires in order to render at the given render time.

## Declaration

```objectivec
- (BOOL) scheduleInputs:(NSArray<FxImageTileRequest *> * *) inputImageRequests withPluginState:(NSData *) pluginState atTime:(CMTime) renderTime error:(NSError * *) error;
```

## Parameters

- `inputImageRequests`: An NSArray that you fill out with requests for input image sources, input image times, whether to include leading filters, and the parameter IDs you wish to schedule.
- `pluginState`: The plug-in state returned by your plug-in’s [pluginState:atTime:quality:error:](pluginstate%28__at_quality_%29.md) method.
- `renderTime`: The time at which your plug-in will be asked to render with the frames being scheduled.
- `error`: A detailed error describing what went wrong if your plug-in is unable to calculate the needed frame times.

<a id="return-value"></a>

## Return Value

Return `YES` if you were able to successfully create the `inputImageRequests` array. Return `NO` if you were not able to for some reason. When returning `NO,` be sure to also set the error parameter to a descriptive value.

## Mentioned In

- [Migrating FxPlug 3 plug-ins to FxPlug 4](../../professional-video-applications/migrating-fxplug-3-plug-ins-to-fxplug-4.md)
- [Scheduling media in plug-ins](../../professional-video-applications/scheduling-media-in-plug-ins.md)

<a id="discussion"></a>

## Discussion

The host calls this method before rendering. Fill out the `inputImageRequests` parameter with an array of image requests. Each request represents one frame your plug-in needs to render. These can be frames of the effect source or they can be frames from image well parameters. If you don’t implement this method, the application will assume that a filter needs only the current frame of its effect source.

When instantiating an [FxImageTileRequest](../fximagetilerequest.md) array using [initWithSource:time:includeFilters:parameterID:](../fximagetilerequest/init%28source_time_includefilters_parameterid_%29.md), the currently supported keys for [FxImageTileRequestSource](../fximagetilerequestsource.md) are:

| Key | Description |
| --- | --- |
| [kFxImageTileRequestSourceNone](../kfximagetilerequestsourcenone.md) | Not associated with an effect or parameter. |
| [kFxImageTileRequestSourceEffectClip](../kfximagetilerequestsourceeffectclip.md) | Request frame from the source clip. |
| [kFxImageTileRequestSourceParameter](../kfximagetilerequestsourceparameter.md) | Request frame from an image well parameter. |
| [kFxImageTileRequestSourceOutput](../kfximagetilerequestsourceoutput.md) | The output of the plug-in. |

`time` should indicate the requested [CMTime](../../coremedia/cmtime.md) of the input, `includeFilters` will indicate if the plugin requires frames after leading filter effects have already been applied, and `parameterID` will indicate the ID of the effect source (`0`) or image well.

## See Also

### Rendering an output

- [pluginState:atTime:quality:error:](pluginstate%28__at_quality_%29.md): Retrieves the plug-in’s parameter values, performs any calculations it needs to from those values, and packages up the result to be used later with rendering.
- [renderDestinationImage:sourceImages:pluginState:atTime:error:](renderdestinationimage%28__sourceimages_pluginstate_at_%29.md): Sends a request that the host wants your plug-in to do its rendering for a given output image tile.
