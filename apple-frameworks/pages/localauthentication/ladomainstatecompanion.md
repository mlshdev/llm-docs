> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/ladomainstatecompanion](https://developer.apple.com/documentation/localauthentication/ladomainstatecompanion)

# LADomainStateCompanion (Swift)

**Framework:** Local Authentication  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

## Declaration

```swift
class LADomainStateCompanion
```

## Topics

### Instance Properties

- [availableCompanionTypes](ladomainstatecompanion/availablecompaniontypes-1t7ur.md)
- [stateHash](ladomainstatecompanion/statehash.md): Contains combined state hash data for all available companion types. . Returns `nil` if no companion devices are paired.

### Instance Methods

- [stateHash(for:)](ladomainstatecompanion/statehash%28for_%29.md): Returns state hash data for the given companion type.

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

# LADomainStateCompanion (Objective-C)

**Framework:** Local Authentication  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

## Declaration

```objectivec
@interface LADomainStateCompanion : NSObject
```

## Topics

### Instance Properties

- [availableCompanionTypes](ladomainstatecompanion/availablecompaniontypes-1ggnh.md): Indicates types of companions paired with the device. The elements are NSNumber-wrapped instances of @c `LACompanionType`.
- [stateHash](ladomainstatecompanion/statehash.md): Contains combined state hash data for all available companion types. . Returns `nil` if no companion devices are paired.

### Instance Methods

- [stateHashForCompanionType:](ladomainstatecompanion/statehash%28for_%29.md): Returns state hash data for the given companion type.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
