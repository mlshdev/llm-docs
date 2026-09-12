> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxtileableeffect/renderdestinationimage(_:sourceimages:pluginstate:at:)](https://developer.apple.com/documentation/professional_video_applications/fxtileableeffect/renderdestinationimage(_:sourceimages:pluginstate:at:))

# renderDestinationImage(\_:sourceImages:pluginState:at:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Sends a request that the host wants your plug-in to do its rendering for a given output image tile.

## Declaration

```swift
func renderDestinationImage(_ destinationImage: FxImageTile, sourceImages: [FxImageTile], pluginState: Data?, at renderTime: CMTime) throws
```

## Parameters

- `destinationImage`: The output image tile that your plug-in should render to.
- `sourceImages`: An array of image tiles. Each one will have the size calculated in your plug-in’s [sourceTileRect(\_:sourceImageIndex:sourceImages:destinationTileRect:destinationImage:pluginState:at:)](sourcetilerect%28__sourceimageindex_sourceimages_destinationtilerect_destinationimage_pluginstate_at_%29.md) method.
- `pluginState`: The `NSData` returned from your plug-in’s [pluginState(\_:at:quality:)](pluginstate%28__at_quality_%29.md) method.
- `renderTime`: The rational time at which to render your output.

## Mentioned In

- [Migrating FxPlug 3 plug-ins to FxPlug 4](../../professional-video-applications/migrating-fxplug-3-plug-ins-to-fxplug-4.md)
- [Rendering in FxPlug](../../professional-video-applications/rendering-in-fxplug.md)
- [Thread safety in plug-ins](../../professional-video-applications/thread-safety-in-plug-ins.md)

<a id="discussion"></a>

## Discussion

The host calls method when it wants your plug-in to render an image tile of the output image. It passes in each of the input tiles needed as well as the plug-in state needed for the calculations. Your plug-in does all its rendering in this method. Do not attempt to use the `FxParameterRetrievalAPI*` object, as it is invalid at this time. Note that this method will be called on multiple threads at the same time.

## See Also

### Rendering an output

- [pluginState(\_:at:quality:)](pluginstate%28__at_quality_%29.md): Retrieves the plug-in’s parameter values, performs any calculations it needs to from those values, and packages up the result to be used later with rendering.
- [scheduleInputs(\_:withPluginState:at:)](scheduleinputs%28__withpluginstate_at_%29.md): Tells the host application how many frames from the given input sources your plug-in requires in order to render at the given render time.

# renderDestinationImage:sourceImages:pluginState:atTime:error: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Sends a request that the host wants your plug-in to do its rendering for a given output image tile.

## Declaration

```objectivec
- (BOOL) renderDestinationImage:(FxImageTile *) destinationImage sourceImages:(NSArray<FxImageTile *> *) sourceImages pluginState:(NSData *) pluginState atTime:(CMTime) renderTime error:(NSError * *) outError;
```

## Parameters

- `destinationImage`: The output image tile that your plug-in should render to.
- `sourceImages`: An array of image tiles. Each one will have the size calculated in your plug-in’s [sourceTileRect:sourceImageIndex:sourceImages:destinationTileRect:destinationImage:pluginState:atTime:error:](sourcetilerect%28__sourceimageindex_sourceimages_destinationtilerect_destinationimage_pluginstate_at_%29.md) method.
- `pluginState`: The `NSData` returned from your plug-in’s [pluginState:atTime:quality:error:](pluginstate%28__at_quality_%29.md) method.
- `renderTime`: The rational time at which to render your output.
- `outError`: Any errors that occurred during rendering.

<a id="return-value"></a>

## Return Value

If rendering succeeded, return `YES`, otherwise return `NO`. If your plug-in returns `NO`, create an `NSError` with the [FxPlugErrorDomain](../fxplugerrordomain.md) for the `outError` parameter.

## Mentioned In

- [Migrating FxPlug 3 plug-ins to FxPlug 4](../../professional-video-applications/migrating-fxplug-3-plug-ins-to-fxplug-4.md)
- [Rendering in FxPlug](../../professional-video-applications/rendering-in-fxplug.md)
- [Thread safety in plug-ins](../../professional-video-applications/thread-safety-in-plug-ins.md)

<a id="discussion"></a>

## Discussion

The host calls method when it wants your plug-in to render an image tile of the output image. It passes in each of the input tiles needed as well as the plug-in state needed for the calculations. Your plug-in does all its rendering in this method. Do not attempt to use the `FxParameterRetrievalAPI*` object, as it is invalid at this time. Note that this method will be called on multiple threads at the same time.

## See Also

### Rendering an output

- [pluginState:atTime:quality:error:](pluginstate%28__at_quality_%29.md): Retrieves the plug-in’s parameter values, performs any calculations it needs to from those values, and packages up the result to be used later with rendering.
- [scheduleInputs:withPluginState:atTime:error:](scheduleinputs%28__withpluginstate_at_%29.md): Tells the host application how many frames from the given input sources your plug-in requires in order to render at the given render time.
