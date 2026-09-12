> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimageasset](https://developer.apple.com/documentation/uikit/uiimageasset)

# UIImageAsset (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A container for a collection of images that represent multiple ways of describing a single piece of artwork.

## Declaration

```swift
class UIImageAsset
```

<a id="overview"></a>

## Overview

A common use case for [UIImageAsset](uiimageasset.md) is the grouping of multiple images of the same item at different display scales. Image asset objects aren’t assigned to instances of [UIImage](uiimage.md) rather; [UIImage](uiimage.md) provides an asset when multiple representations of an image are available. Images retrieved from image asset catalogs using the [init(named:)](uiimage/init%28named_%29.md) or [init(named:in:compatibleWith:)](uiimage/init%28named_in_compatiblewith_%29.md) methods automatically have an image asset object that allows access to other images from the catalog.

<a id="Register-an-image"></a>

### Register an image

When you register an image with an image asset, you associate a [UITraitCollection](uitraitcollection.md) object with the image. The trait collection must contain the [displayScale](uitraitcollection/displayscale.md) and [userInterfaceIdiom](uitraitcollection/userinterfaceidiom.md) trait properties. If you don’t define these traits in the trait collection, the following defaults are assigned:

- [displayScale](uitraitcollection/displayscale.md) = `1.0`
- [userInterfaceIdiom](uitraitcollection/userinterfaceidiom.md) = [UIUserInterfaceIdiom.unspecified](uiuserinterfaceidiom/unspecified.md)

For example, if you create a trait collection that only contains a horizontal size class, the default display scale and idiom are added when the image is registered.

<a id="Retrieve-an-image"></a>

### Retrieve an image

When you retrieve or unregister an image from an image asset, you do so using the trait collection that was used to register the image. To ensure the correct image is retrieved, the trait collection used must contain the [displayScale](uitraitcollection/displayscale.md) and [userInterfaceIdiom](uitraitcollection/userinterfaceidiom.md) traits. If these traits aren’t defined in the trait collection, the following defaults are assigned:

- [displayScale](uitraitcollection/displayscale.md) = scale of the current device
- [userInterfaceIdiom](uitraitcollection/userinterfaceidiom.md) = the type of interface used on the current device

For example, if you create a trait collection that only contains a horizontal size class, the default display scale and idiom of the current device are added when searching the `UIImageAsset` for an image.

[UIImageView](uiimageview.md) automatically retrieves the correct image when [traitCollectionDidChange(\_:)](uitraitenvironment/traitcollectiondidchange%28__%29.md) is called on it.

## Topics

### Initializing an image asset

- [init()](uiimageasset/init%28%29.md): Creates a new image asset object.
- [init(coder:)](uiimageasset/init%28coder_%29.md): Creates an image asset from data in an unarchiver.

### Registering and unregistering images

- [register(\_:with:)](uiimageasset/register%28__with_%29-2plm5.md): Registers an image with the specified trait collection.
- [register(\_:with:)](uiimageasset/register%28__with_%29-89c5b.md): Registers an image with the specified image configuration details.
- [unregister(imageWith:)](uiimageasset/unregister%28imagewith_%29.md): Unregisters the image with the specified trait collection from the image asset.
- [unregisterImage(with:)](uiimageasset/unregisterimage%28with_%29.md): Unregisters the image with the specified image configuration details from the image asset.

### Retrieving an image from an image asset

- [image(with:)](uiimageasset/image%28with_%29-3dsgf.md): Retrieves the variant of the image that best matches the specified trait collection.
- [image(with:)](uiimageasset/image%28with_%29-8jdwv.md): Retrieves the variant of the image that best matches the specified image configuration details.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Assets

- [NSDataAsset](nsdataasset.md): An object from a data set type stored in an asset catalog.

# UIImageAsset (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A container for a collection of images that represent multiple ways of describing a single piece of artwork.

## Declaration

```objectivec
@interface UIImageAsset : NSObject
```

<a id="overview"></a>

## Overview

A common use case for [UIImageAsset](uiimageasset.md) is the grouping of multiple images of the same item at different display scales. Image asset objects aren’t assigned to instances of [UIImage](uiimage.md) rather; [UIImage](uiimage.md) provides an asset when multiple representations of an image are available. Images retrieved from image asset catalogs using the [imageNamed:](uiimage/init%28named_%29.md) or [imageNamed:inBundle:compatibleWithTraitCollection:](uiimage/init%28named_in_compatiblewith_%29.md) methods automatically have an image asset object that allows access to other images from the catalog.

<a id="Register-an-image"></a>

### Register an image

When you register an image with an image asset, you associate a [UITraitCollection](uitraitcollection.md) object with the image. The trait collection must contain the [displayScale](uitraitcollection/displayscale.md) and [userInterfaceIdiom](uitraitcollection/userinterfaceidiom.md) trait properties. If you don’t define these traits in the trait collection, the following defaults are assigned:

- [displayScale](uitraitcollection/displayscale.md) = `1.0`
- [userInterfaceIdiom](uitraitcollection/userinterfaceidiom.md) = [UIUserInterfaceIdiomUnspecified](uiuserinterfaceidiom/unspecified.md)

For example, if you create a trait collection that only contains a horizontal size class, the default display scale and idiom are added when the image is registered.

<a id="Retrieve-an-image"></a>

### Retrieve an image

When you retrieve or unregister an image from an image asset, you do so using the trait collection that was used to register the image. To ensure the correct image is retrieved, the trait collection used must contain the [displayScale](uitraitcollection/displayscale.md) and [userInterfaceIdiom](uitraitcollection/userinterfaceidiom.md) traits. If these traits aren’t defined in the trait collection, the following defaults are assigned:

- [displayScale](uitraitcollection/displayscale.md) = scale of the current device
- [userInterfaceIdiom](uitraitcollection/userinterfaceidiom.md) = the type of interface used on the current device

For example, if you create a trait collection that only contains a horizontal size class, the default display scale and idiom of the current device are added when searching the `UIImageAsset` for an image.

[UIImageView](uiimageview.md) automatically retrieves the correct image when [traitCollectionDidChange:](uitraitenvironment/traitcollectiondidchange%28__%29.md) is called on it.

## Topics

### Initializing an image asset

- [init](uiimageasset/init%28%29.md): Creates a new image asset object.
- [initWithCoder:](uiimageasset/init%28coder_%29.md): Creates an image asset from data in an unarchiver.

### Registering and unregistering images

- [registerImage:withTraitCollection:](uiimageasset/register%28__with_%29-2plm5.md): Registers an image with the specified trait collection.
- [registerImage:withConfiguration:](uiimageasset/register%28__with_%29-89c5b.md): Registers an image with the specified image configuration details.
- [unregisterImageWithTraitCollection:](uiimageasset/unregister%28imagewith_%29.md): Unregisters the image with the specified trait collection from the image asset.
- [unregisterImageWithConfiguration:](uiimageasset/unregisterimage%28with_%29.md): Unregisters the image with the specified image configuration details from the image asset.

### Retrieving an image from an image asset

- [imageWithTraitCollection:](uiimageasset/image%28with_%29-3dsgf.md): Retrieves the variant of the image that best matches the specified trait collection.
- [imageWithConfiguration:](uiimageasset/image%28with_%29-8jdwv.md): Retrieves the variant of the image that best matches the specified image configuration details.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Assets

- [NSDataAsset](nsdataasset.md): An object from a data set type stored in an asset catalog.
