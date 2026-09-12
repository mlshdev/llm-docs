> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/recommendedlayercontentsscale(_:)](https://developer.apple.com/documentation/appkit/nsimage/recommendedlayercontentsscale(_:))

# recommendedLayerContentsScale(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns the recommended layer contents scale for this image.

## Declaration

```swift
func recommendedLayerContentsScale(_ preferredContentsScale: CGFloat) -> CGFloat
```

## Parameters

- `preferredContentsScale`: The preferred layer contents scale. Don’t use a higher scale factor if the image can’t provide it. If the image is resolution independent the return value will be the same as the input. If you specify `0.0` for this parameter, the method uses the scale factor for the default screen.

<a id="return-value"></a>

## Return Value

The recommended layer contents scale. This scale factor may be different than the one in the `preferredContentsScale` parameter.

<a id="Discussion"></a>

## Discussion

Use this method to obtain the scale factor value that you pass to the [layerContents(forContentsScale:)](layercontents%28forcontentsscale_%29.md) method. This method uses the image data to determine the scale factor that is best suited for creating an image that looks good in the layer.

## See Also

### Using Images with Core Animation

- [layerContents(forContentsScale:)](layercontents%28forcontentsscale_%29.md): Returns an object that may be used as the contents of a layer.

# recommendedLayerContentsScale: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns the recommended layer contents scale for this image.

## Declaration

```objectivec
- (CGFloat) recommendedLayerContentsScale:(CGFloat) preferredContentsScale;
```

## Parameters

- `preferredContentsScale`: The preferred layer contents scale. Don’t use a higher scale factor if the image can’t provide it. If the image is resolution independent the return value will be the same as the input. If you specify `0.0` for this parameter, the method uses the scale factor for the default screen.

<a id="return-value"></a>

## Return Value

The recommended layer contents scale. This scale factor may be different than the one in the `preferredContentsScale` parameter.

<a id="Discussion"></a>

## Discussion

Use this method to obtain the scale factor value that you pass to the [layerContentsForContentsScale:](layercontents%28forcontentsscale_%29.md) method. This method uses the image data to determine the scale factor that is best suited for creating an image that looks good in the layer.

## See Also

### Using Images with Core Animation

- [layerContentsForContentsScale:](layercontents%28forcontentsscale_%29.md): Returns an object that may be used as the contents of a layer.
