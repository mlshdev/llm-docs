> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxtileableeffect/sourcetilerect(_:sourceimageindex:sourceimages:destinationtilerect:destinationimage:pluginstate:at:)](https://developer.apple.com/documentation/professional_video_applications/fxtileableeffect/sourcetilerect(_:sourceimageindex:sourceimages:destinationtilerect:destinationimage:pluginstate:at:))

# sourceTileRect(\_:sourceImageIndex:sourceImages:destinationTileRect:destinationImage:pluginState:at:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Calculate the input rectangle needed for the given image input and the output tile to be rendered.

## Declaration

```swift
func sourceTileRect(_ sourceTileRect: UnsafeMutablePointer<FxRect>, sourceImageIndex: Int, sourceImages: [FxImageTile], destinationTileRect: FxRect, destinationImage: FxImageTile, pluginState: Data?, at renderTime: CMTime) throws
```

## Parameters

- `sourceTileRect`: The bounds of input tile for this input that will be needed to render the output tile. This method must calculate this value.
- `sourceImageIndex`: The index of the input image for which the tile bounds have been requested. This index matches the order of images in the `inputImages` array below.
- `sourceImages`: An `NSArray` of image tiles representing the input images. This image will not yet contain any pixel data, just the image bounds, pixel transforms, and other data describing the image.
- `destinationTileRect`: The bounds of the output tile, given to you by the host application.
- `destinationImage`: The output image. This image will not yet contain any pixel data, just the image bounds and other data about the output image.
- `pluginState`: The NSData returned from your plug-in’s [pluginState(\_:at:quality:)](pluginstate%28__at_quality_%29.md) method.
- `renderTime`: The rational time at which the output will be rendered.

## Mentioned In

- [Working with tiled images](../../professional-video-applications/working-with-tiled-images.md)

<a id="discussion"></a>

## Discussion

This method is called for each image input your plug-in has requested. Use the passed-in information to calculate the portion of the current input image that you’ll need to render the output tile that will be rendered next.

## See Also

### Determining input and output bounds

- [destinationImageRect(\_:sourceImages:destinationImage:pluginState:at:)](destinationimagerect%28__sourceimages_destinationimage_pluginstate_at_%29.md): Calculates the bounds of the output image determined by the various inputs and plug-in state at the given render time.
- [FxRectsAreEqual(\_:\_:)](../fxrectsareequal%28____%29.md): Compares two rectangle structures and determines if they are equal.

# sourceTileRect:sourceImageIndex:sourceImages:destinationTileRect:destinationImage:pluginState:atTime:error: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Calculate the input rectangle needed for the given image input and the output tile to be rendered.

## Declaration

```objectivec
- (BOOL) sourceTileRect:(FxRect *) sourceTileRect sourceImageIndex:(NSUInteger) sourceImageIndex sourceImages:(NSArray<FxImageTile *> *) sourceImages destinationTileRect:(FxRect) destinationTileRect destinationImage:(FxImageTile *) destinationImage pluginState:(NSData *) pluginState atTime:(CMTime) renderTime error:(NSError * *) outError;
```

## Parameters

- `sourceTileRect`: The bounds of input tile for this input that will be needed to render the output tile. This method must calculate this value.
- `sourceImageIndex`: The index of the input image for which the tile bounds have been requested. This index matches the order of images in the `inputImages` array below.
- `sourceImages`: An `NSArray` of image tiles representing the input images. This image will not yet contain any pixel data, just the image bounds, pixel transforms, and other data describing the image.
- `destinationTileRect`: The bounds of the output tile, given to you by the host application.
- `destinationImage`: The output image. This image will not yet contain any pixel data, just the image bounds and other data about the output image.
- `pluginState`: The NSData returned from your plug-in’s [pluginState:atTime:quality:error:](pluginstate%28__at_quality_%29.md) method.
- `renderTime`: The rational time at which the output will be rendered.
- `outError`: An `NSError` your plug-in can fill out with the details of what went wrong when a failure occurs in this method. If there was an error, your plug-in should also return `NO` from this method.

<a id="return-value"></a>

## Return Value

The input tile bounds are returned in the `inputTileRect` parameter. The method returns `YES` if calculating the input tile bounds succeeded and `NO` otherwise. When returning `NO`, be sure to fill out the `outError` parameter.

## Mentioned In

- [Working with tiled images](../../professional-video-applications/working-with-tiled-images.md)

<a id="discussion"></a>

## Discussion

This method is called for each image input your plug-in has requested. Use the passed-in information to calculate the portion of the current input image that you’ll need to render the output tile that will be rendered next.

## See Also

### Determining input and output bounds

- [destinationImageRect:sourceImages:destinationImage:pluginState:atTime:error:](destinationimagerect%28__sourceimages_destinationimage_pluginstate_at_%29.md): Calculates the bounds of the output image determined by the various inputs and plug-in state at the given render time.
- [FxRectsAreEqual](../fxrectsareequal%28____%29.md): Compares two rectangle structures and determines if they are equal.
