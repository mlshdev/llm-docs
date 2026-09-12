> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvelementfactory](https://developer.apple.com/documentation/tvmlkit/tvelementfactory)

# TVElementFactory (Swift)

**Framework:** TVMLKit  
**Kind:** Class  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

An object used to register new elements to extend the Apple TV Markup Language (TVML).

> Please use SwiftUI or UIKit

## Declaration

```swift
class TVElementFactory
```

<a id="overview"></a>

## Overview

You must register new elements before initializing a [TVApplicationController](tvapplicationcontroller.md) object.

## Topics

### Registering New Elements

- [registerViewElementClass(\_:elementName:)](tvelementfactory/registerviewelementclass%28__elementname_%29.md): Deprecated. Registers a view element for the specified element name.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Custom Elements

- [TVImageElement](tvimageelement.md): Deprecated. A representation of a read-only DOM node containing the attributes that describe an image element.
- [TVTextElement](tvtextelement.md): Deprecated. The textual content for the DOM element.
- [Creating TVML Elements](creating-tvml-elements.md): Avoid rewriting complex and often used elements by creating a simplified custom element.

# TVElementFactory (Objective-C)

**Framework:** TVMLKit  
**Kind:** Class  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

An object used to register new elements to extend the Apple TV Markup Language (TVML).

> Please use SwiftUI or UIKit

## Declaration

```objectivec
@interface TVElementFactory : NSObject
```

<a id="overview"></a>

## Overview

You must register new elements before initializing a [TVApplicationController](tvapplicationcontroller.md) object.

## Topics

### Registering New Elements

- [registerViewElementClass:forElementName:](tvelementfactory/registerviewelementclass%28__elementname_%29.md): Deprecated. Registers a view element for the specified element name.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Custom Elements

- [TVImageElement](tvimageelement.md): Deprecated. A representation of a read-only DOM node containing the attributes that describe an image element.
- [TVTextElement](tvtextelement.md): Deprecated. The textual content for the DOM element.
- [Creating TVML Elements](creating-tvml-elements.md): Avoid rewriting complex and often used elements by creating a simplified custom element.
