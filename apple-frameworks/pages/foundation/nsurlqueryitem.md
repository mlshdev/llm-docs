> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlqueryitem](https://developer.apple.com/documentation/foundation/nsurlqueryitem)

# NSURLQueryItem (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object representing a single name/value pair for an item in the query portion of a URL.

## Declaration

```swift
class NSURLQueryItem
```

<a id="overview"></a>

## Overview

In Swift, this object bridges to [URLQueryItem](urlqueryitem.md); use [NSURLQueryItem](nsurlqueryitem.md) when you need reference semantics or other Foundation-specific behavior.

You use query items with the [queryItems](nsurlcomponents/queryitems.md) property of an [NSURLComponents](nsurlcomponents.md) object.

> **Important**

>  The Swift overlay to the Foundation framework provides the [URLQueryItem](urlqueryitem.md) structure, which bridges to the [NSURLQueryItem](nsurlqueryitem.md) class. For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

## Topics

### Creating a Query Item

- [init(name:value:)](nsurlqueryitem/init%28name_value_%29.md): Initializes a newly allocated query item with the specified name and value.

### Reading a Query Item’s Name and Value

- [name](nsurlqueryitem/name.md): The name of the query item.
- [value](nsurlqueryitem/value.md): The value for the query item.

### Initializers

- [init(coder:)](nsurlqueryitem/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSURLQueryItem (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object representing a single name/value pair for an item in the query portion of a URL.

## Declaration

```objectivec
@interface NSURLQueryItem : NSObject
```

<a id="overview"></a>

## Overview

In Swift, this object bridges to [URLQueryItem](urlqueryitem.md); use [NSURLQueryItem](nsurlqueryitem.md) when you need reference semantics or other Foundation-specific behavior.

You use query items with the [queryItems](nsurlcomponents/queryitems.md) property of an [NSURLComponents](nsurlcomponents.md) object.

> **Important**

>  The Swift overlay to the Foundation framework provides the [URLQueryItem](urlqueryitem.md) structure, which bridges to the [NSURLQueryItem](nsurlqueryitem.md) class. For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

## Topics

### Creating a Query Item

- [queryItemWithName:value:](nsurlqueryitem/queryitemwithname_value_.md): Creates a new query item with the specified name and value.
- [initWithName:value:](nsurlqueryitem/init%28name_value_%29.md): Initializes a newly allocated query item with the specified name and value.

### Reading a Query Item’s Name and Value

- [name](nsurlqueryitem/name.md): The name of the query item.
- [value](nsurlqueryitem/value.md): The value for the query item.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](nscopying.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### URLs

- [NSURL](nsurl.md): An object that represents the location of a resource, such as an item on a remote server or the path to a local file.
- [NSURLComponents](nsurlcomponents.md): An object that parses URLs into and constructs URLs from their constituent parts.
