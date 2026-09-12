> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimageasset/image(with:)-8jdwv](https://developer.apple.com/documentation/uikit/uiimageasset/image(with:)-8jdwv)

# image(with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Retrieves the variant of the image that best matches the specified image configuration details.

## Declaration

```swift
func image(with configuration: UIImage.Configuration) -> UIImage
```

## Parameters

- `configuration`: The configuration details to use when determining which image to return.

<a id="return-value"></a>

## Return Value

The image object for the specified configuration.

<a id="Discussion"></a>

## Discussion

If this method can’t locate an image that matches the specified image configuration precisely, it returns the best match available.

## See Also

### Retrieving an image from an image asset

- [image(with:)](image%28with_%29-3dsgf.md): Retrieves the variant of the image that best matches the specified trait collection.

# imageWithConfiguration: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Retrieves the variant of the image that best matches the specified image configuration details.

## Declaration

```objectivec
- (UIImage *) imageWithConfiguration:(UIImageConfiguration *) configuration;
```

## Parameters

- `configuration`: The configuration details to use when determining which image to return.

<a id="return-value"></a>

## Return Value

The image object for the specified configuration.

<a id="Discussion"></a>

## Discussion

If this method can’t locate an image that matches the specified image configuration precisely, it returns the best match available.

## See Also

### Retrieving an image from an image asset

- [imageWithTraitCollection:](image%28with_%29-3dsgf.md): Retrieves the variant of the image that best matches the specified trait collection.
