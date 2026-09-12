> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimageasset/register(_:with:)-89c5b](https://developer.apple.com/documentation/uikit/uiimageasset/register(_:with:)-89c5b)

# register(\_:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Registers an image with the specified image configuration details.

## Declaration

```swift
func register(_ image: UIImage, with configuration: UIImage.Configuration)
```

## Parameters

- `image`: The image you want to register with the image asset.
- `configuration`: The image configuration details to associate with `image`.

<a id="Discussion"></a>

## Discussion

Each image in an image asset must have a unique configuration. If the asset already contains a registered image with the equivalent configuration, it replaces that image with the one in the `image` parameter.

> **Important**

>  The trait collection in `configuration` must always contain an explicit value in its [displayScale](../uitraitcollection/displayscale.md) property. You may experience unexpected results from [image(with:)](image%28with_%29-8jdwv.md) if the trait collection doesn’t explicitly define the desired scale.

## See Also

### Registering and unregistering images

- [register(\_:with:)](register%28__with_%29-2plm5.md): Registers an image with the specified trait collection.
- [unregister(imageWith:)](unregister%28imagewith_%29.md): Unregisters the image with the specified trait collection from the image asset.
- [unregisterImage(with:)](unregisterimage%28with_%29.md): Unregisters the image with the specified image configuration details from the image asset.

# registerImage:withConfiguration: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Registers an image with the specified image configuration details.

## Declaration

```objectivec
- (void) registerImage:(UIImage *) image withConfiguration:(UIImageConfiguration *) configuration;
```

## Parameters

- `image`: The image you want to register with the image asset.
- `configuration`: The image configuration details to associate with `image`.

<a id="Discussion"></a>

## Discussion

Each image in an image asset must have a unique configuration. If the asset already contains a registered image with the equivalent configuration, it replaces that image with the one in the `image` parameter.

> **Important**

>  The trait collection in `configuration` must always contain an explicit value in its [displayScale](../uitraitcollection/displayscale.md) property. You may experience unexpected results from [imageWithConfiguration:](image%28with_%29-8jdwv.md) if the trait collection doesn’t explicitly define the desired scale.

## See Also

### Registering and unregistering images

- [registerImage:withTraitCollection:](register%28__with_%29-2plm5.md): Registers an image with the specified trait collection.
- [unregisterImageWithTraitCollection:](unregister%28imagewith_%29.md): Unregisters the image with the specified trait collection from the image asset.
- [unregisterImageWithConfiguration:](unregisterimage%28with_%29.md): Unregisters the image with the specified image configuration details from the image asset.
