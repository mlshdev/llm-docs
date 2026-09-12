> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkelectrocardiogram/voltagemeasurement](https://developer.apple.com/documentation/healthkit/hkelectrocardiogram/voltagemeasurement)

# HKElectrocardiogram.VoltageMeasurement (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

The voltage for all leads at a single point in time.

## Declaration

```swift
class VoltageMeasurement
```

## Topics

### Accessing Data

- [quantity(for:)](voltagemeasurement/quantity%28for_%29.md): Returns the voltage for the specified lead.
- [timeSinceSampleStart](voltagemeasurement/timesincesamplestart.md): The time of the measurement relative to the sample’s start time.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../../foundation/nscopying.md)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Electrocardiograms

- [HKElectrocardiogram](../hkelectrocardiogram.md): A sample for electrocardiogram data.

# HKElectrocardiogramVoltageMeasurement (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

The voltage for all leads at a single point in time.

## Declaration

```objectivec
@interface HKElectrocardiogramVoltageMeasurement : NSObject
```

## Topics

### Accessing Data

- [quantityForLead:](voltagemeasurement/quantity%28for_%29.md): Returns the voltage for the specified lead.
- [timeSinceSampleStart](voltagemeasurement/timesincesamplestart.md): The time of the measurement relative to the sample’s start time.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)

## See Also

### Electrocardiograms

- [HKElectrocardiogram](../hkelectrocardiogram.md): A sample for electrocardiogram data.
