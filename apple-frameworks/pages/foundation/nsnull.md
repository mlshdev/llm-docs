> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnull](https://developer.apple.com/documentation/foundation/nsnull)

# NSNull (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A singleton object used to represent null values in collection objects that don’t allow `nil` values.

## Declaration

```swift
class NSNull
```

## Mentioned In

- [Implementing Handoff in Your App](implementing-handoff-in-your-app.md)

<a id="overview"></a>

## Overview

[NSNull](nsnull.md) is “toll-free bridged” with its Core Foundation counterpart, [CFNull](../corefoundation/cfnull.md). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information on toll-free bridging.

## Topics

### Initializers

- [init(coder:)](nsnull/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CAAction](../quartzcore/caaction.md)
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

## See Also

### Special Semantic Values

- [NSNotFound](nsnotfound-9t5v2.md)
- [NSNotFound](nsnotfound-4qp9h.md): A value indicating that a requested item couldn’t be found or doesn’t exist.

# NSNull (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A singleton object used to represent null values in collection objects that don’t allow `nil` values.

## Declaration

```objectivec
@interface NSNull : NSObject
```

## Mentioned In

- [Implementing Handoff in Your App](implementing-handoff-in-your-app.md)

<a id="overview"></a>

## Overview

[NSNull](nsnull.md) is “toll-free bridged” with its Core Foundation counterpart, [CFNullRef](../corefoundation/cfnull.md). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information on toll-free bridging.

## Topics

### Obtaining an instance

- [null](nsnull/null.md): Returns the singleton instance of `NSNull`.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CAAction](../quartzcore/caaction.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [NSCopying](nscopying.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Special Semantic Values

- [NSNotFound](nsnotfound-4qp9h.md): A value indicating that a requested item couldn’t be found or doesn’t exist.
