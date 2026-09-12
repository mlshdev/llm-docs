> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimageasset/register(_:with:)-2plm5](https://developer.apple.com/documentation/uikit/uiimageasset/register(_:with:)-2plm5)

# register(\_:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Registers an image with the specified trait collection.

## Declaration

```swift
func register(_ image: UIImage, with traitCollection: UITraitCollection)
```

## Parameters

- `image`: The image you want to register with the image asset.
- `traitCollection`: The traits to associate with `image`.

<a id="Discussion"></a>

## Discussion

Each image in an image asset must have a unique set of traits. If the asset already contains a registered image with the equivalent traits, it replaces that image with the one in the `image` parameter.

> **Important**

>  The trait collection must always contain an explicit value in its [displayScale](../uitraitcollection/displayscale.md) property. You may experience unexpected results from [image(with:)](image%28with_%29-3dsgf.md) if the trait collection doesn’t explicitly define the desired scale.

## See Also

### Registering and unregistering images

- [register(\_:with:)](register%28__with_%29-89c5b.md): Registers an image with the specified image configuration details.
- [unregister(imageWith:)](unregister%28imagewith_%29.md): Unregisters the image with the specified trait collection from the image asset.
- [unregisterImage(with:)](unregisterimage%28with_%29.md): Unregisters the image with the specified image configuration details from the image asset.

# registerImage:withTraitCollection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Registers an image with the specified trait collection.

## Declaration

```objectivec
- (void) registerImage:(UIImage *) image withTraitCollection:(UITraitCollection *) traitCollection;
```

## Parameters

- `image`: The image you want to register with the image asset.
- `traitCollection`: The traits to associate with `image`.

<a id="Discussion"></a>

## Discussion

Each image in an image asset must have a unique set of traits. If the asset already contains a registered image with the equivalent traits, it replaces that image with the one in the `image` parameter.

> **Important**

>  The trait collection must always contain an explicit value in its [displayScale](../uitraitcollection/displayscale.md) property. You may experience unexpected results from [imageWithTraitCollection:](image%28with_%29-3dsgf.md) if the trait collection doesn’t explicitly define the desired scale.

## See Also

### Registering and unregistering images

- [registerImage:withConfiguration:](register%28__with_%29-89c5b.md): Registers an image with the specified image configuration details.
- [unregisterImageWithTraitCollection:](unregister%28imagewith_%29.md): Unregisters the image with the specified trait collection from the image asset.
- [unregisterImageWithConfiguration:](unregisterimage%28with_%29.md): Unregisters the image with the specified image configuration details from the image asset.
