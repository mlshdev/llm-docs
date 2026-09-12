> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/withtintcolor(_:)](https://developer.apple.com/documentation/uikit/uiimage/withtintcolor(_:))

# withTintColor(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a new version of the current image with the specified tint color.

## Declaration

```swift
func withTintColor(_ color: UIColor) -> UIImage
```

## Parameters

- `color`: The tint color to apply to the image.

<a id="return-value"></a>

## Return Value

A new version of the image that incorporates the specified tint color.

<a id="Discussion"></a>

## Discussion

For bitmap images, this method draws the background tint color followed by the image contents using the [CGBlendMode.destinationIn](../../coregraphics/cgblendmode/destinationin.md) mode. For symbol images, this method returns an image that always uses the specified tint color.

The new image uses the same rendering mode as the original image.

## See Also

### Tinting the image

- [withTintColor(\_:renderingMode:)](withtintcolor%28__renderingmode_%29.md): Returns a new version of the image with a tint color that uses the specified rendering mode.

# imageWithTintColor: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a new version of the current image with the specified tint color.

## Declaration

```objectivec
- (UIImage *) imageWithTintColor:(UIColor *) color;
```

## Parameters

- `color`: The tint color to apply to the image.

<a id="return-value"></a>

## Return Value

A new version of the image that incorporates the specified tint color.

<a id="Discussion"></a>

## Discussion

For bitmap images, this method draws the background tint color followed by the image contents using the [kCGBlendModeDestinationIn](../../coregraphics/cgblendmode/destinationin.md) mode. For symbol images, this method returns an image that always uses the specified tint color.

The new image uses the same rendering mode as the original image.

## See Also

### Tinting the image

- [imageWithTintColor:renderingMode:](withtintcolor%28__renderingmode_%29.md): Returns a new version of the image with a tint color that uses the specified rendering mode.
