> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laenvironment](https://developer.apple.com/documentation/localauthentication/laenvironment)

# LAEnvironment (Swift)

**Framework:** Local Authentication  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
class LAEnvironment
```

## Topics

### Classes

- [LAEnvironment.Mechanism](laenvironment/mechanism.md)
- [LAEnvironment.MechanismBiometry](laenvironment/mechanismbiometry.md)
- [LAEnvironment.MechanismCompanion](laenvironment/mechanismcompanion.md)
- [LAEnvironment.MechanismUserPassword](laenvironment/mechanismuserpassword.md)
- [LAEnvironment.State](laenvironment/state-swift.class.md)

### Protocols

- [LAEnvironment.Observer](laenvironment/observer.md)

### Instance Properties

- [state](laenvironment/state-swift.property.md): The environment state information.

### Instance Methods

- [addObserver(\_:)](laenvironment/addobserver%28__%29.md)
- [removeObserver(\_:)](laenvironment/removeobserver%28__%29.md)

### Type Properties

- [currentUser](laenvironment/currentuser.md): Environment of the current user.

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

# LAEnvironment (Objective-C)

**Framework:** Local Authentication  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
@interface LAEnvironment : NSObject
```

## Topics

### Instance Properties

- [state](laenvironment/state-swift.property.md): The environment state information.

### Instance Methods

- [addObserver:](laenvironment/addobserver%28__%29.md)
- [removeObserver:](laenvironment/removeobserver%28__%29.md)

### Type Properties

- [currentUser](laenvironment/currentuser.md): Environment of the current user.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
