> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristicvaluevolumecontroltype](https://developer.apple.com/documentation/homekit/hmcharacteristicvaluevolumecontroltype)

# HMCharacteristicValueVolumeControlType (Swift)

**Framework:** HomeKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Values for the type of volume control.

## Declaration

```swift
enum HMCharacteristicValueVolumeControlType
```

## Topics

### Volume types

- [HMCharacteristicValueVolumeControlType.absolute](hmcharacteristicvaluevolumecontroltype/absolute.md): The volume sets to a specific level.
- [HMCharacteristicValueVolumeControlType.none](hmcharacteristicvaluevolumecontroltype/none.md): The device doesn’t have volume control functionality.
- [HMCharacteristicValueVolumeControlType.relative](hmcharacteristicvaluevolumecontroltype/relative.md): The volume adjusts incrementally, without taking the current level into consideration.
- [HMCharacteristicValueVolumeControlType.relativeWithCurrent](hmcharacteristicvaluevolumecontroltype/relativewithcurrent.md): The volume adjusts incrementally, relative to current level.

### Initializers

- [init(rawValue:)](hmcharacteristicvaluevolumecontroltype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# HMCharacteristicValueVolumeControlType (Objective-C)

**Framework:** HomeKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Values for the type of volume control.

## Declaration

```objectivec
enum HMCharacteristicValueVolumeControlType : NSInteger;
```

## Topics

### Volume types

- [HMCharacteristicValueVolumeControlTypeAbsolute](hmcharacteristicvaluevolumecontroltype/absolute.md): The volume sets to a specific level.
- [HMCharacteristicValueVolumeControlTypeNone](hmcharacteristicvaluevolumecontroltype/none.md): The device doesn’t have volume control functionality.
- [HMCharacteristicValueVolumeControlTypeRelative](hmcharacteristicvaluevolumecontroltype/relative.md): The volume adjusts incrementally, without taking the current level into consideration.
- [HMCharacteristicValueVolumeControlTypeRelativeWithCurrent](hmcharacteristicvaluevolumecontroltype/relativewithcurrent.md): The volume adjusts incrementally, relative to current level.
