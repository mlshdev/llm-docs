> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laenvironment/mechanism](https://developer.apple.com/documentation/localauthentication/laenvironment/mechanism)

# LAEnvironment.Mechanism (Swift)

**Framework:** Local Authentication  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
class Mechanism
```

## Topics

### Instance Properties

- [iconSystemName](mechanism/iconsystemname.md): Name of the SF Symbol representing this authentication mechanism.
- [isUsable](mechanism/isusable.md)
- [localizedName](mechanism/localizedname.md): The localized name of the authentication mechanism, e.g. “Touch ID”, “Face ID” etc.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Inherited By

- [LAEnvironment.MechanismBiometry](mechanismbiometry.md)
- [LAEnvironment.MechanismCompanion](mechanismcompanion.md)
- [LAEnvironment.MechanismUserPassword](mechanismuserpassword.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# LAEnvironmentMechanism (Objective-C)

**Framework:** Local Authentication  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
@interface LAEnvironmentMechanism : NSObject
```

## Topics

### Instance Properties

- [iconSystemName](mechanism/iconsystemname.md): Name of the SF Symbol representing this authentication mechanism.
- [isUsable](mechanism/isusable.md)
- [localizedName](mechanism/localizedname.md): The localized name of the authentication mechanism, e.g. “Touch ID”, “Face ID” etc.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Inherited By

- [LAEnvironmentMechanismBiometry](mechanismbiometry.md)
- [LAEnvironmentMechanismCompanion](mechanismcompanion.md)
- [LAEnvironmentMechanismUserPassword](mechanismuserpassword.md)
