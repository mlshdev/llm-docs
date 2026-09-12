> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/measurementformatter/string(from:)-wt9y](https://developer.apple.com/documentation/foundation/measurementformatter/string(from:)-wt9y)

# string(from:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates and returns a localized string representation of the provided measurement.

## Declaration

```swift
func string(from measurement: Measurement<Unit>) -> String
```

## Parameters

- `measurement`: The measurement to be represented.

<a id="return-value"></a>

## Return Value

A user-readable string that represents the measurement.

## See Also

### Converting Measurements

- [string(from:)](string%28from_%29-6rcb1.md): Creates and returns a localized string representation of the provided measurement.
- [string(from:)](string%28from_%29-4hwjz.md): Creates and returns a localized string representation of the provided unit of measure.

# stringFromMeasurement: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates and returns a localized string representation of the provided measurement.

## Declaration

```objectivec
- (NSString *) stringFromMeasurement:(NSMeasurement *) measurement;
```

## Parameters

- `measurement`: The measurement to be represented.

<a id="return-value"></a>

## Return Value

A user-readable string that represents the measurement.

## See Also

### Converting Measurements

- [stringFromUnit:](string%28from_%29-4hwjz.md): Creates and returns a localized string representation of the provided unit of measure.
