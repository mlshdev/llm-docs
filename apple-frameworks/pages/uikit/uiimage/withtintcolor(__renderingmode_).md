> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/withtintcolor(_:renderingmode:)](https://developer.apple.com/documentation/uikit/uiimage/withtintcolor(_:renderingmode:))

# withTintColor(\_:renderingMode:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a new version of the image with a tint color that uses the specified rendering mode.

## Declaration

```swift
func withTintColor(_ color: UIColor, renderingMode: UIImage.RenderingMode) -> UIImage
```

## Parameters

- `color`: The tint color to apply to the image.
- `renderingMode`: The rendering mode to assign to the returned image.

<a id="return-value"></a>

## Return Value

A new version of the image that incorporates the specified tint color.

<a id="Discussion"></a>

## Discussion

For bitmap images, this method draws the background tint color followed by the image contents using the [CGBlendMode.destinationIn](../../coregraphics/cgblendmode/destinationin.md) mode. For symbol images, this method returns an image that always uses the specified tint color.

## See Also

### Tinting the image

- [withTintColor(\_:)](withtintcolor%28__%29.md): Returns a new version of the current image with the specified tint color.

# imageWithTintColor:renderingMode: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a new version of the image with a tint color that uses the specified rendering mode.

## Declaration

```objectivec
- (UIImage *) imageWithTintColor:(UIColor *) color renderingMode:(UIImageRenderingMode) renderingMode;
```

## Parameters

- `color`: The tint color to apply to the image.
- `renderingMode`: The rendering mode to assign to the returned image.

<a id="return-value"></a>

## Return Value

A new version of the image that incorporates the specified tint color.

<a id="Discussion"></a>

## Discussion

For bitmap images, this method draws the background tint color followed by the image contents using the [kCGBlendModeDestinationIn](../../coregraphics/cgblendmode/destinationin.md) mode. For symbol images, this method returns an image that always uses the specified tint color.

## See Also

### Tinting the image

- [imageWithTintColor:](withtintcolor%28__%29.md): Returns a new version of the current image with the specified tint color.
