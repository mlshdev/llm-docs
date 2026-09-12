> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bytecountformatter/string(from:)](https://developer.apple.com/documentation/foundation/bytecountformatter/string(from:))

# string(from:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Formats the value of the given measurement using the receiver’s `countStyle`.

## Declaration

```swift
func string(from measurement: Measurement<UnitInformationStorage>) -> String
```

<a id="discussion"></a>

## Discussion

Converts the measurement to the units allowed by the receiver’s `allowedUnits` before formatting; depending on the value of the measurement, this may result in a string which implies an approximate value (e.g. if the measurement is too large to represent in `allowedUnits`, like `1e20 YB` expressed in `NSByteCountFormatterUseBytes`).

Throws an exception if the given measurement’s unit does not belong to the `NSUnitInformationStorage` dimension.

# stringFromMeasurement: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Formats the value of the given measurement using the receiver’s `countStyle`.

## Declaration

```objectivec
- (NSString *) stringFromMeasurement:(NSMeasurement<NSUnitInformationStorage *> *) measurement;
```

<a id="discussion"></a>

## Discussion

Converts the measurement to the units allowed by the receiver’s `allowedUnits` before formatting; depending on the value of the measurement, this may result in a string which implies an approximate value (e.g. if the measurement is too large to represent in `allowedUnits`, like `1e20 YB` expressed in `NSByteCountFormatterUseBytes`).

Throws an exception if the given measurement’s unit does not belong to the `NSUnitInformationStorage` dimension.
