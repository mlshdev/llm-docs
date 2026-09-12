> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimageasset/unregisterimage(with:)](https://developer.apple.com/documentation/uikit/uiimageasset/unregisterimage(with:))

# unregisterImage(with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Unregisters the image with the specified image configuration details from the image asset.

## Declaration

```swift
func unregisterImage(with configuration: UIImage.Configuration)
```

## Parameters

- `configuration`: An object containing the image configuration details for a previously registered image. This method matches only the contents of the object, so you don’t need to specify the same object you used at registration time.

<a id="Discussion"></a>

## Discussion

This method searches for an image whose configuration details match the information in the `configuration` parameter. The configuration details must match exactly, and must be associated with an image that you registered previously.

## See Also

### Registering and unregistering images

- [register(\_:with:)](register%28__with_%29-2plm5.md): Registers an image with the specified trait collection.
- [register(\_:with:)](register%28__with_%29-89c5b.md): Registers an image with the specified image configuration details.
- [unregister(imageWith:)](unregister%28imagewith_%29.md): Unregisters the image with the specified trait collection from the image asset.

# unregisterImageWithConfiguration: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Unregisters the image with the specified image configuration details from the image asset.

## Declaration

```objectivec
- (void) unregisterImageWithConfiguration:(UIImageConfiguration *) configuration;
```

## Parameters

- `configuration`: An object containing the image configuration details for a previously registered image. This method matches only the contents of the object, so you don’t need to specify the same object you used at registration time.

<a id="Discussion"></a>

## Discussion

This method searches for an image whose configuration details match the information in the `configuration` parameter. The configuration details must match exactly, and must be associated with an image that you registered previously.

## See Also

### Registering and unregistering images

- [registerImage:withTraitCollection:](register%28__with_%29-2plm5.md): Registers an image with the specified trait collection.
- [registerImage:withConfiguration:](register%28__with_%29-89c5b.md): Registers an image with the specified image configuration details.
- [unregisterImageWithTraitCollection:](unregister%28imagewith_%29.md): Unregisters the image with the specified trait collection from the image asset.
