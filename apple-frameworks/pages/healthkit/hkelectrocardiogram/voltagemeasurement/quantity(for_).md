> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkelectrocardiogram/voltagemeasurement/quantity(for:)](https://developer.apple.com/documentation/healthkit/hkelectrocardiogram/voltagemeasurement/quantity(for:))

# quantity(for:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Returns the voltage for the specified lead.

## Declaration

```swift
func quantity(for lead: HKElectrocardiogram.Lead) -> HKQuantity?
```

## Parameters

- `lead`: The lead whose voltage you want to read.

<a id="return-value"></a>

## Return Value

A quantity object containing a value in volt units. These values are compatible with any units created using [voltUnit(with:)](../../hkunit/voltunit%28with_%29.md).

## See Also

### Accessing Data

- [timeSinceSampleStart](timesincesamplestart.md): The time of the measurement relative to the sample’s start time.

# quantityForLead: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Returns the voltage for the specified lead.

## Declaration

```objectivec
- (HKQuantity *) quantityForLead:(HKElectrocardiogramLead) lead;
```

## Parameters

- `lead`: The lead whose voltage you want to read.

<a id="return-value"></a>

## Return Value

A quantity object containing a value in volt units. These values are compatible with any units created using [voltUnitWithMetricPrefix:](../../hkunit/voltunit%28with_%29.md).

## See Also

### Accessing Data

- [timeSinceSampleStart](timesincesamplestart.md): The time of the measurement relative to the sample’s start time.
