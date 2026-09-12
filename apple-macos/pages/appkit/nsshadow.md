> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsshadow](https://developer.apple.com/documentation/appkit/nsshadow)

# NSShadow (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.0+

An object you use to specify attributes to create and style a drop shadow during drawing operations.

## Declaration

```swift
class NSShadow
```

<a id="overview"></a>

## Overview

When you create shadows, the system draws them in the default user coordinate space, where coordinates are independent from the pixel values of any particular device. Rotations, translations, and other transformations of the current transformation matrix (CTM) don’t affect the shadow or the apparent position of the shadow’s light source.

A shadow has two positional parameters: an x-offset and a y-offset. Express these values with a single size data type ([CGSize](https://developer.apple.com/documentation/corefoundation/cgsize) in iOS, [NSSize](https://developer.apple.com/documentation/foundation/nssize) in macOS), using the units of the default user coordinate space. Positive values for these offsets extend down and to the right from the user’s perspective.

In addition to its positional parameters, a shadow also contains a blur radius, which specifies how much the system blurs a drawn object’s image mask before compositing the image onto the destination. A value of `0` produces no blur. Larger values produce an increasingly large blurred shadow.

You can use an [NSShadow](nsshadow.md) object in one of two ways. First, you can set it, like a color or a font, where `NSShadow` attributes apply to everything you draw until you apply another shadow or restore a previous graphics state. Second, you can use an `NSShadow` instance as the value for the [shadow](https://developer.apple.com/documentation/foundation/nsattributedstring/key/shadow) text attribute, so the system applies the shadow to the glyphs corresponding to the characters bearing this attribute.

## Topics

### Creating a shadow

- [init()](nsshadow/init%28%29.md): Creates a shadow object with default values.

### Managing a shadow

- [shadowOffset](nsshadow/shadowoffset.md): The shadow’s relative position, which you specify with horizontal and vertical offset values.
- [shadowBlurRadius](nsshadow/shadowblurradius.md): The blur radius of the shadow.
- [shadowColor](nsshadow/shadowcolor.md): The color of the shadow.

### Setting a shadow

- [set()](nsshadow/set%28%29.md): Sets the shadow of subsequent drawing operations to the current shadow.

### Initializers

- [init(coder:)](nsshadow/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSShadow (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.0+

An object you use to specify attributes to create and style a drop shadow during drawing operations.

## Declaration

```objectivec
@interface NSShadow : NSObject
```

<a id="overview"></a>

## Overview

When you create shadows, the system draws them in the default user coordinate space, where coordinates are independent from the pixel values of any particular device. Rotations, translations, and other transformations of the current transformation matrix (CTM) don’t affect the shadow or the apparent position of the shadow’s light source.

A shadow has two positional parameters: an x-offset and a y-offset. Express these values with a single size data type ([CGSize](https://developer.apple.com/documentation/corefoundation/cgsize) in iOS, [NSSize](https://developer.apple.com/documentation/foundation/nssize) in macOS), using the units of the default user coordinate space. Positive values for these offsets extend down and to the right from the user’s perspective.

In addition to its positional parameters, a shadow also contains a blur radius, which specifies how much the system blurs a drawn object’s image mask before compositing the image onto the destination. A value of `0` produces no blur. Larger values produce an increasingly large blurred shadow.

You can use an [NSShadow](nsshadow.md) object in one of two ways. First, you can set it, like a color or a font, where `NSShadow` attributes apply to everything you draw until you apply another shadow or restore a previous graphics state. Second, you can use an `NSShadow` instance as the value for the [shadow](https://developer.apple.com/documentation/foundation/nsattributedstring/key/shadow) text attribute, so the system applies the shadow to the glyphs corresponding to the characters bearing this attribute.

## Topics

### Creating a shadow

- [init](nsshadow/init%28%29.md): Creates a shadow object with default values.

### Managing a shadow

- [shadowOffset](nsshadow/shadowoffset.md): The shadow’s relative position, which you specify with horizontal and vertical offset values.
- [shadowBlurRadius](nsshadow/shadowblurradius.md): The blur radius of the shadow.
- [shadowColor](nsshadow/shadowcolor.md): The color of the shadow.

### Setting a shadow

- [set](nsshadow/set%28%29.md): Sets the shadow of subsequent drawing operations to the current shadow.

### Instance Methods

- [initWithCoder:](nsshadow/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
