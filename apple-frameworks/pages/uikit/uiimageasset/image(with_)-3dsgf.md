> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimageasset/image(with:)-3dsgf](https://developer.apple.com/documentation/uikit/uiimageasset/image(with:)-3dsgf)

# image(with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Retrieves the variant of the image that best matches the specified trait collection.

## Declaration

```swift
func image(with traitCollection: UITraitCollection) -> UIImage
```

## Parameters

- `traitCollection`: The trait collection to use when determining which image to return.

<a id="return-value"></a>

## Return Value

The found image.

<a id="Discussion"></a>

## Discussion

If this method can’t locate an image that matches the specified trait collection precisely, it returns the best match available.

## See Also

### Retrieving an image from an image asset

- [image(with:)](image%28with_%29-8jdwv.md): Retrieves the variant of the image that best matches the specified image configuration details.

# imageWithTraitCollection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Retrieves the variant of the image that best matches the specified trait collection.

## Declaration

```objectivec
- (UIImage *) imageWithTraitCollection:(UITraitCollection *) traitCollection;
```

## Parameters

- `traitCollection`: The trait collection to use when determining which image to return.

<a id="return-value"></a>

## Return Value

The found image.

<a id="Discussion"></a>

## Discussion

If this method can’t locate an image that matches the specified trait collection precisely, it returns the best match available.

## See Also

### Retrieving an image from an image asset

- [imageWithConfiguration:](image%28with_%29-8jdwv.md): Retrieves the variant of the image that best matches the specified image configuration details.
