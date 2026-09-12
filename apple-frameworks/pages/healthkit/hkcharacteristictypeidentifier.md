> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcharacteristictypeidentifier](https://developer.apple.com/documentation/healthkit/hkcharacteristictypeidentifier)

# HKCharacteristicTypeIdentifier (Swift)

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The identifiers that create characteristic type objects.

## Declaration

```swift
struct HKCharacteristicTypeIdentifier
```

<a id="overview"></a>

## Overview

To create an [HKCharacteristicType](hkcharacteristictype.md) instance, pass an [HKCharacteristicTypeIdentifier](hkcharacteristictypeidentifier.md) value to the [characteristicType(forIdentifier:)](hkobjecttype/characteristictype%28foridentifier_%29.md) method.

## Topics

### Characteristic Types

- [activityMoveMode](hkcharacteristictypeidentifier/activitymovemode.md): A characteristic identifier for the user’s activity mode.
- [biologicalSex](hkcharacteristictypeidentifier/biologicalsex.md): A characteristic type identifier for the user’s sex.
- [bloodType](hkcharacteristictypeidentifier/bloodtype.md): A characteristic type identifier for the user’s blood type.
- [dateOfBirth](hkcharacteristictypeidentifier/dateofbirth.md): A characteristic type identifier for the user’s date of birth.
- [fitzpatrickSkinType](hkcharacteristictypeidentifier/fitzpatrickskintype.md): A characteristic type identifier for the user’s skin type.
- [wheelchairUse](hkcharacteristictypeidentifier/wheelchairuse.md): A characteristic identifier for the user’s use of a wheelchair.

### Initializers

- [init(rawValue:)](hkcharacteristictypeidentifier/init%28rawvalue_%29.md): Returns a newly initialized characteristic type identifier using the provided string.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating characteristic types

- [characteristicType(forIdentifier:)](hkobjecttype/characteristictype%28foridentifier_%29.md): Deprecated. Returns the shared characteristic type for the provided identifier.

# HKCharacteristicTypeIdentifier (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The identifiers that create characteristic type objects.

## Declaration

```objectivec
typedef NSString * HKCharacteristicTypeIdentifier;
```

<a id="overview"></a>

## Overview

To create an [HKCharacteristicType](hkcharacteristictype.md) instance, pass an [HKCharacteristicTypeIdentifier](hkcharacteristictypeidentifier.md) value to the [characteristicTypeForIdentifier:](hkobjecttype/characteristictype%28foridentifier_%29.md) method.

## Topics

### Characteristic Types

- [HKCharacteristicTypeIdentifierActivityMoveMode](hkcharacteristictypeidentifier/activitymovemode.md): A characteristic identifier for the user’s activity mode.
- [HKCharacteristicTypeIdentifierBiologicalSex](hkcharacteristictypeidentifier/biologicalsex.md): A characteristic type identifier for the user’s sex.
- [HKCharacteristicTypeIdentifierBloodType](hkcharacteristictypeidentifier/bloodtype.md): A characteristic type identifier for the user’s blood type.
- [HKCharacteristicTypeIdentifierDateOfBirth](hkcharacteristictypeidentifier/dateofbirth.md): A characteristic type identifier for the user’s date of birth.
- [HKCharacteristicTypeIdentifierFitzpatrickSkinType](hkcharacteristictypeidentifier/fitzpatrickskintype.md): A characteristic type identifier for the user’s skin type.
- [HKCharacteristicTypeIdentifierWheelchairUse](hkcharacteristictypeidentifier/wheelchairuse.md): A characteristic identifier for the user’s use of a wheelchair.

## See Also

### Creating characteristic types

- [characteristicTypeForIdentifier:](hkobjecttype/characteristictype%28foridentifier_%29.md): Deprecated. Returns the shared characteristic type for the provided identifier.
