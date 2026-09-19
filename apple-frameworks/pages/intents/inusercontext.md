> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inusercontext

# INUserContext (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

An object that provides user information to Siri.

## Declaration

```swift
class INUserContext
```

## Topics

### Setting the User Context

- [becomeCurrent()](inusercontext/becomecurrent%28%29.md): Replaces the previous context object with the current context object that has the same underlying type.

### Initializers

- [init(coder:)](inusercontext/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [INMediaUserContext](inmediausercontext.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### User Context

- [INMediaUserContext](inmediausercontext.md): An object that provides user information to Siri.

# INUserContext (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

An object that provides user information to Siri.

## Declaration

```objectivec
@interface INUserContext : NSObject
```

## Topics

### Setting the User Context

- [becomeCurrent](inusercontext/becomecurrent%28%29.md): Replaces the previous context object with the current context object that has the same underlying type.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [INMediaUserContext](inmediausercontext.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### User Context

- [INMediaUserContext](inmediausercontext.md): An object that provides user information to Siri.
