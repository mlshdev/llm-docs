> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantityseriessamplebuilder/device](https://developer.apple.com/documentation/healthkit/hkquantityseriessamplebuilder/device)

# device (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

The device providing the data.

## Declaration

```swift
@NSCopying var device: HKDevice? { get }
```

## See Also

### Creating a Quantity Series Builder

- [init(healthStore:quantityType:startDate:device:)](init%28healthstore_quantitytype_startdate_device_%29.md): Creates a new quantity series builder.
- [quantityType](quantitytype.md): The quantity type for the series.
- [startDate](startdate.md): The starting date and time for the sample.

# device (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

The device providing the data.

## Declaration

```objectivec
@property (copy, readonly, nullable) HKDevice * device;
```

## See Also

### Creating a Quantity Series Builder

- [initWithHealthStore:quantityType:startDate:device:](init%28healthstore_quantitytype_startdate_device_%29.md): Creates a new quantity series builder.
- [quantityType](quantitytype.md): The quantity type for the series.
- [startDate](startdate.md): The starting date and time for the sample.
