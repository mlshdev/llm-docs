> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimageasset/unregister(imagewith:)](https://developer.apple.com/documentation/uikit/uiimageasset/unregister(imagewith:))

# unregister(imageWith:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Unregisters the image with the specified trait collection from the image asset.

## Declaration

```swift
func unregister(imageWith traitCollection: UITraitCollection)
```

## Parameters

- `traitCollection`: A trait collection containing the traits for a previously registered image. This method matches only the trait values, so you don’t need to specify the same object you used at registration time.

<a id="Discussion"></a>

## Discussion

This method searches for an image whose trait collection matches the one in the `traitCollection` parameter. The traits in both collections must match exactly, and the matching trait collection must be associated with an image that you registered previously.

## See Also

### Registering and unregistering images

- [register(\_:with:)](register%28__with_%29-2plm5.md): Registers an image with the specified trait collection.
- [register(\_:with:)](register%28__with_%29-89c5b.md): Registers an image with the specified image configuration details.
- [unregisterImage(with:)](unregisterimage%28with_%29.md): Unregisters the image with the specified image configuration details from the image asset.

# unregisterImageWithTraitCollection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Unregisters the image with the specified trait collection from the image asset.

## Declaration

```objectivec
- (void) unregisterImageWithTraitCollection:(UITraitCollection *) traitCollection;
```

## Parameters

- `traitCollection`: A trait collection containing the traits for a previously registered image. This method matches only the trait values, so you don’t need to specify the same object you used at registration time.

<a id="Discussion"></a>

## Discussion

This method searches for an image whose trait collection matches the one in the `traitCollection` parameter. The traits in both collections must match exactly, and the matching trait collection must be associated with an image that you registered previously.

## See Also

### Registering and unregistering images

- [registerImage:withTraitCollection:](register%28__with_%29-2plm5.md): Registers an image with the specified trait collection.
- [registerImage:withConfiguration:](register%28__with_%29-89c5b.md): Registers an image with the specified image configuration details.
- [unregisterImageWithConfiguration:](unregisterimage%28with_%29.md): Unregisters the image with the specified image configuration details from the image asset.
