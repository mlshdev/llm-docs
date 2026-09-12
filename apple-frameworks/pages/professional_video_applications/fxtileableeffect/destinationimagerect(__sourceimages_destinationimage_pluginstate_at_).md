> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxtileableeffect/destinationimagerect(_:sourceimages:destinationimage:pluginstate:at:)](https://developer.apple.com/documentation/professional_video_applications/fxtileableeffect/destinationimagerect(_:sourceimages:destinationimage:pluginstate:at:))

# destinationImageRect(\_:sourceImages:destinationImage:pluginState:at:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Calculates the bounds of the output image determined by the various inputs and plug-in state at the given render time.

## Declaration

```swift
func destinationImageRect(_ destinationImageRect: UnsafeMutablePointer<FxRect>, sourceImages: [FxImageTile], destinationImage: FxImageTile, pluginState: Data?, at renderTime: CMTime) throws
```

## Parameters

- `destinationImageRect`: The bounds of the output image. Your plug-in should calculate this value.
- `sourceImages`: An array of images that represent the input images. They will have proper bounding rectangles and pixel transforms, but no pixel data will be given yet.
- `destinationImage`:
- `pluginState`: The `NSData` returned from your plug-in’s [pluginState(\_:at:quality:)](pluginstate%28__at_quality_%29.md) method.
- `renderTime`: The rational time at which the output will be rendered.

## Mentioned In

- [Working with tiled images](../../professional-video-applications/working-with-tiled-images.md)

<a id="discussion"></a>

## Discussion

This method is called when the plug-in wants to calculate the output bounds of your plug-in when rendering at a particular time. It will pass in an array of images, the plug-in state returned from your plug-in’s [pluginState(\_:at:quality:)](pluginstate%28__at_quality_%29.md) method, and the render time. If your plug-in is unable to calculate the output rectangle at the given time, it should return `NO` and fill out the `outError` parameter with an `NSError` that uses the [FxPlugErrorDomain](../fxplugerrordomain.md) and appropriate (possibly custom) error code.

## See Also

### Determining input and output bounds

- [sourceTileRect(\_:sourceImageIndex:sourceImages:destinationTileRect:destinationImage:pluginState:at:)](sourcetilerect%28__sourceimageindex_sourceimages_destinationtilerect_destinationimage_pluginstate_at_%29.md): Calculate the input rectangle needed for the given image input and the output tile to be rendered.
- [FxRectsAreEqual(\_:\_:)](../fxrectsareequal%28____%29.md): Compares two rectangle structures and determines if they are equal.

# destinationImageRect:sourceImages:destinationImage:pluginState:atTime:error: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Calculates the bounds of the output image determined by the various inputs and plug-in state at the given render time.

## Declaration

```objectivec
- (BOOL) destinationImageRect:(FxRect *) destinationImageRect sourceImages:(NSArray<FxImageTile *> *) sourceImages destinationImage:(FxImageTile *) destinationImage pluginState:(NSData *) pluginState atTime:(CMTime) renderTime error:(NSError * *) outError;
```

## Parameters

- `destinationImageRect`: The bounds of the output image. Your plug-in should calculate this value.
- `sourceImages`: An array of images that represent the input images. They will have proper bounding rectangles and pixel transforms, but no pixel data will be given yet.
- `destinationImage`:
- `pluginState`: The `NSData` returned from your plug-in’s [pluginState:atTime:quality:error:](pluginstate%28__at_quality_%29.md) method.
- `renderTime`: The rational time at which the output will be rendered.
- `outError`: An `NSError` your plug-in can fill out with the details of what went wrong when a failure occurs in this method. If there was an error, your plug-in should also return `NO` from this method.

<a id="return-value"></a>

## Return Value

`YES` if the method successfully calculates the output image bounds, `NO` otherwise. When returning `NO`, be sure to fill out the `outError` parameter.

## Mentioned In

- [Working with tiled images](../../professional-video-applications/working-with-tiled-images.md)

<a id="discussion"></a>

## Discussion

This method is called when the plug-in wants to calculate the output bounds of your plug-in when rendering at a particular time. It will pass in an array of images, the plug-in state returned from your plug-in’s [pluginState:atTime:quality:error:](pluginstate%28__at_quality_%29.md) method, and the render time. If your plug-in is unable to calculate the output rectangle at the given time, it should return `NO` and fill out the `outError` parameter with an `NSError` that uses the [FxPlugErrorDomain](../fxplugerrordomain.md) and appropriate (possibly custom) error code.

## See Also

### Determining input and output bounds

- [sourceTileRect:sourceImageIndex:sourceImages:destinationTileRect:destinationImage:pluginState:atTime:error:](sourcetilerect%28__sourceimageindex_sourceimages_destinationtilerect_destinationimage_pluginstate_at_%29.md): Calculate the input rectangle needed for the given image input and the output tile to be rendered.
- [FxRectsAreEqual](../fxrectsareequal%28____%29.md): Compares two rectangle structures and determines if they are equal.
