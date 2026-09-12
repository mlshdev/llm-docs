> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asgeneratedpassword](https://developer.apple.com/documentation/authenticationservices/asgeneratedpassword)

# ASGeneratedPassword (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · visionOS 26.2+

## Declaration

```swift
class ASGeneratedPassword
```

## Topics

### Structures

- [ASGeneratedPassword.Kind](asgeneratedpassword/kind-swift.struct.md)

### Initializers

- [init(coder:)](asgeneratedpassword/init%28coder_%29.md)
- [init(kind:value:)](asgeneratedpassword/init%28kind_value_%29.md)

### Instance Properties

- [kind](asgeneratedpassword/kind-swift.property.md): The kind of password that this represents.
- [localizedName](asgeneratedpassword/localizedname.md): The user-visible description of this password, derived from the kind.
- [value](asgeneratedpassword/value.md): The value of the password.

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
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# ASGeneratedPassword (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · visionOS 26.2+

## Declaration

```objectivec
@interface ASGeneratedPassword : NSObject
```

## Topics

### Instance Properties

- [kind](asgeneratedpassword/kind-swift.property.md): The kind of password that this represents.
- [localizedName](asgeneratedpassword/localizedname.md): The user-visible description of this password, derived from the kind.
- [value](asgeneratedpassword/value.md): The value of the password.

### Instance Methods

- [initWithKind:value:](asgeneratedpassword/init%28kind_value_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
