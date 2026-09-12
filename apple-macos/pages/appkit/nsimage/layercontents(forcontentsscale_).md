> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/layercontents(forcontentsscale:)](https://developer.apple.com/documentation/appkit/nsimage/layercontents(forcontentsscale:))

# layerContents(forContentsScale:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns an object that may be used as the contents of a layer.

## Declaration

```swift
func layerContents(forContentsScale layerContentsScale: CGFloat) -> Any
```

## Parameters

- `layerContentsScale`: The scale factor for the resulting image. Obtain the value for this parameter by calling the [recommendedLayerContentsScale(\_:)](recommendedlayercontentsscale%28__%29.md) method.

<a id="return-value"></a>

## Return Value

A object that you can assign to the [contents](https://developer.apple.com/documentation/quartzcore/calayer/contents) property of a [CALayer](https://developer.apple.com/documentation/quartzcore/calayer) object. This object contains the image data from the current image optimized for the specified scale factor.

<a id="Discussion"></a>

## Discussion

Use this method in situations where you want to use the image as the contents of a layer. This method provides the image data wrapped in an object that correctly respects all of the possible content gravities supported by the layer. Use of the returned object as the layer’s contents is recommended over the use of the `NSImage` object itself.

## See Also

### Using Images with Core Animation

- [recommendedLayerContentsScale(\_:)](recommendedlayercontentsscale%28__%29.md): Returns the recommended layer contents scale for this image.

# layerContentsForContentsScale: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns an object that may be used as the contents of a layer.

## Declaration

```objectivec
- (id) layerContentsForContentsScale:(CGFloat) layerContentsScale;
```

## Parameters

- `layerContentsScale`: The scale factor for the resulting image. Obtain the value for this parameter by calling the [recommendedLayerContentsScale:](recommendedlayercontentsscale%28__%29.md) method.

<a id="return-value"></a>

## Return Value

A object that you can assign to the [contents](https://developer.apple.com/documentation/quartzcore/calayer/contents) property of a [CALayer](https://developer.apple.com/documentation/quartzcore/calayer) object. This object contains the image data from the current image optimized for the specified scale factor.

<a id="Discussion"></a>

## Discussion

Use this method in situations where you want to use the image as the contents of a layer. This method provides the image data wrapped in an object that correctly respects all of the possible content gravities supported by the layer. Use of the returned object as the layer’s contents is recommended over the use of the `NSImage` object itself.

## See Also

### Using Images with Core Animation

- [recommendedLayerContentsScale:](recommendedlayercontentsscale%28__%29.md): Returns the recommended layer contents scale for this image.
