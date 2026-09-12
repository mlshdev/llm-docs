> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkaudiogramsensitivitypoint](https://developer.apple.com/documentation/healthkit/hkaudiogramsensitivitypoint)

# HKAudiogramSensitivityPoint (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A hearing sensitivity reading associated with a hearing test.

## Declaration

```swift
class HKAudiogramSensitivityPoint
```

## Topics

### Creating Sensitivity Points

- [init(frequency:leftEarSensitivity:rightEarSensitivity:)](hkaudiogramsensitivitypoint/init%28frequency_leftearsensitivity_rightearsensitivity_%29.md): Deprecated. Creates a new sensitivity point.

### Accessing Data

- [frequency](hkaudiogramsensitivitypoint/frequency.md): The frequency tested in the hearing test.
- [leftEarSensitivity](hkaudiogramsensitivitypoint/leftearsensitivity.md): Deprecated. The sensitivity of the left ear.
- [rightEarSensitivity](hkaudiogramsensitivitypoint/rightearsensitivity.md): Deprecated. The sensitivity of the right ear.

### Initializers

- [init(coder:)](hkaudiogramsensitivitypoint/init%28coder_%29.md)
- [init(frequency:tests:)](hkaudiogramsensitivitypoint/init%28frequency_tests_%29.md)

### Instance Properties

- [tests](hkaudiogramsensitivitypoint/tests.md)

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
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Audiograms

- [HKAudiogramSample](hkaudiogramsample.md): A sample that stores an audiogram.

# HKAudiogramSensitivityPoint (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A hearing sensitivity reading associated with a hearing test.

## Declaration

```objectivec
@interface HKAudiogramSensitivityPoint : NSObject
```

## Topics

### Creating Sensitivity Points

- [sensitivityPointWithFrequency:leftEarSensitivity:rightEarSensitivity:error:](hkaudiogramsensitivitypoint/init%28frequency_leftearsensitivity_rightearsensitivity_%29.md): Deprecated. Creates a new sensitivity point.

### Accessing Data

- [frequency](hkaudiogramsensitivitypoint/frequency.md): The frequency tested in the hearing test.
- [leftEarSensitivity](hkaudiogramsensitivitypoint/leftearsensitivity.md): Deprecated. The sensitivity of the left ear.
- [rightEarSensitivity](hkaudiogramsensitivitypoint/rightearsensitivity.md): Deprecated. The sensitivity of the right ear.

### Instance Properties

- [tests](hkaudiogramsensitivitypoint/tests.md)

### Type Methods

- [sensitivityPointWithFrequency:tests:error:](hkaudiogramsensitivitypoint/init%28frequency_tests_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Audiograms

- [HKAudiogramSample](hkaudiogramsample.md): A sample that stores an audiogram.
