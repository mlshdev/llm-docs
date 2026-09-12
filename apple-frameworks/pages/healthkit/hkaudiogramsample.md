> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkaudiogramsample](https://developer.apple.com/documentation/healthkit/hkaudiogramsample)

# HKAudiogramSample (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A sample that stores an audiogram.

## Declaration

```swift
class HKAudiogramSample
```

<a id="overview"></a>

## Overview

This sample stores the results from a hearing test. The sample stores the audiogram data as an array of sensitivity points.

## Topics

### Creating Audiogram Samples

- [init(sensitivityPoints:start:end:metadata:)](hkaudiogramsample/init%28sensitivitypoints_start_end_metadata_%29.md): Deprecated. Creates a new audiogram sample.

### Accessing Sensitivity Point Data

- [sensitivityPoints](hkaudiogramsample/sensitivitypoints.md): An array of sensitivity point objects.

### Initializers

- [init(sensitivityPoints:start:end:device:metadata:)](hkaudiogramsample/init%28sensitivitypoints_start_end_device_metadata_%29.md)
- [init(sensitivityPoints:startDate:endDate:device:metadata:)](hkaudiogramsample/init%28sensitivitypoints_startdate_enddate_device_metadata_%29.md)
- [init(sensitivityPoints:startDate:endDate:metadata:)](hkaudiogramsample/init%28sensitivitypoints_startdate_enddate_metadata_%29.md): Deprecated.

## Relationships

### Inherits From

- [HKSample](hksample.md)

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

- [HKAudiogramSensitivityPoint](hkaudiogramsensitivitypoint.md): A hearing sensitivity reading associated with a hearing test.

# HKAudiogramSample (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A sample that stores an audiogram.

## Declaration

```objectivec
@interface HKAudiogramSample : HKSample
```

<a id="overview"></a>

## Overview

This sample stores the results from a hearing test. The sample stores the audiogram data as an array of sensitivity points.

## Topics

### Creating Audiogram Samples

- [audiogramSampleWithSensitivityPoints:startDate:endDate:metadata:](hkaudiogramsample/init%28sensitivitypoints_start_end_metadata_%29.md): Deprecated. Creates a new audiogram sample.

### Accessing Sensitivity Point Data

- [sensitivityPoints](hkaudiogramsample/sensitivitypoints.md): An array of sensitivity point objects.

### Type Methods

- [audiogramSampleWithSensitivityPoints:startDate:endDate:device:metadata:](hkaudiogramsample/init%28sensitivitypoints_start_end_device_metadata_%29.md)

## Relationships

### Inherits From

- [HKSample](hksample.md)

## See Also

### Audiograms

- [HKAudiogramSensitivityPoint](hkaudiogramsensitivitypoint.md): A hearing sensitivity reading associated with a hearing test.
