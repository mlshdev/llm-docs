> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/configuration-swift.class](https://developer.apple.com/documentation/uikit/uiimage/configuration-swift.class)

# UIImage.Configuration (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A configuration object that contains the traits that the system uses when selecting the current image variant.

## Declaration

```swift
class Configuration
```

<a id="overview"></a>

## Overview

Images may contain multiple variants to account for environmental factors, such as whether the interface is light or dark. The image configuration object lets you override the current environment and render an image with specific attributes. For example, you might want to render a specific version of your image to your interface.

[UIImage.Configuration](configuration-swift.class.md) objects are immutable and you don’t create them directly. Instead, get an existing image configuration object from a [UITraitCollection](../uitraitcollection.md) or [UIImage](../uiimage.md) object. To add attributes to your configuration object, use the [applying(\_:)](configuration-swift.class/applying%28__%29.md) method to create a new object that merges the existing object’s values with new values you supply. Assign the new object to the [preferredSymbolConfiguration](../uiimageview/preferredsymbolconfiguration.md) property of the [UIImageView](../uiimageview.md) object you use to display the image. If you draw the image directly, use the [withConfiguration(\_:)](withconfiguration%28__%29.md) method to create a new image that contains the new attributes.

## Topics

### Modifying a configuration object

- [applying(\_:)](configuration-swift.class/applying%28__%29.md): Returns a configuration object that applies the specified configuration values on top of the current object’s values.
- [withTraitCollection(\_:)](configuration-swift.class/withtraitcollection%28__%29.md): Returns a new configuration object that merges the current traits with the traits from the specified trait collection.

### Getting the configuration traits

- [traitCollection](configuration-swift.class/traitcollection.md): The traits associated with the image configuration.

### Initializers

- [init(coder:)](configuration-swift.class/init%28coder_%29.md)
- [init(locale:)](configuration-swift.class/init%28locale_%29.md)
- [init(traitCollection:)](configuration-swift.class/init%28traitcollection_%29.md)

### Instance Properties

- [locale](configuration-swift.class/locale.md)

### Instance Methods

- [withLocale(\_:)](configuration-swift.class/withlocale%28__%29.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIImage.SymbolConfiguration](symbolconfiguration-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../../foundation/nscoding.md)
- [NSCopying](../../foundation/nscopying.md)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Representations

- [UIImage](../uiimage.md): An object that manages image data in your app.
- [UIImage.SymbolConfiguration](symbolconfiguration-swift.class.md): An object that contains the specific font, size, style, and weight attributes to apply to a symbol image.

# UIImageConfiguration (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A configuration object that contains the traits that the system uses when selecting the current image variant.

## Declaration

```objectivec
@interface UIImageConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Images may contain multiple variants to account for environmental factors, such as whether the interface is light or dark. The image configuration object lets you override the current environment and render an image with specific attributes. For example, you might want to render a specific version of your image to your interface.

[UIImageConfiguration](configuration-swift.class.md) objects are immutable and you don’t create them directly. Instead, get an existing image configuration object from a [UITraitCollection](../uitraitcollection.md) or [UIImage](../uiimage.md) object. To add attributes to your configuration object, use the [configurationByApplyingConfiguration:](configuration-swift.class/applying%28__%29.md) method to create a new object that merges the existing object’s values with new values you supply. Assign the new object to the [preferredSymbolConfiguration](../uiimageview/preferredsymbolconfiguration.md) property of the [UIImageView](../uiimageview.md) object you use to display the image. If you draw the image directly, use the [imageWithConfiguration:](withconfiguration%28__%29.md) method to create a new image that contains the new attributes.

## Topics

### Modifying a configuration object

- [configurationByApplyingConfiguration:](configuration-swift.class/applying%28__%29.md): Returns a configuration object that applies the specified configuration values on top of the current object’s values.
- [configurationWithTraitCollection:](configuration-swift.class/withtraitcollection%28__%29.md): Returns a new configuration object that merges the current traits with the traits from the specified trait collection.

### Getting the configuration traits

- [traitCollection](configuration-swift.class/traitcollection.md): The traits associated with the image configuration.

### Instance Properties

- [locale](configuration-swift.class/locale.md)

### Instance Methods

- [configurationWithLocale:](configuration-swift.class/withlocale%28__%29.md)

### Type Methods

- [configurationWithLocale:](configuration-swift.class/init%28locale_%29.md)
- [configurationWithTraitCollection:](configuration-swift.class/init%28traitcollection_%29.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIImageSymbolConfiguration](symbolconfiguration-swift.class.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)

## See Also

### Representations

- [UIImage](../uiimage.md): An object that manages image data in your app.
- [UIImageSymbolConfiguration](symbolconfiguration-swift.class.md): An object that contains the specific font, size, style, and weight attributes to apply to a symbol image.
