> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantityseriessamplebuilder/init(healthstore:quantitytype:startdate:device:)](https://developer.apple.com/documentation/healthkit/hkquantityseriessamplebuilder/init(healthstore:quantitytype:startdate:device:))

# init(healthStore:quantityType:startDate:device:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a new quantity series builder.

## Declaration

```swift
init(healthStore: HKHealthStore, quantityType: HKQuantityType, startDate: Date, device: HKDevice?)
```

## Parameters

- `healthStore`: The HealthKit store.
- `quantityType`: The sample’s quantity type.
- `startDate`: The sample’s start date.
- `device`: An object representing the device that provided the data. Pass `nil` if the app is generating its own data.

## See Also

### Creating a Quantity Series Builder

- [quantityType](quantitytype.md): The quantity type for the series.
- [startDate](startdate.md): The starting date and time for the sample.
- [device](device.md): The device providing the data.

# initWithHealthStore:quantityType:startDate:device: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a new quantity series builder.

## Declaration

```objectivec
- (instancetype) initWithHealthStore:(HKHealthStore *) healthStore quantityType:(HKQuantityType *) quantityType startDate:(NSDate *) startDate device:(HKDevice *) device;
```

## Parameters

- `healthStore`: The HealthKit store.
- `quantityType`: The sample’s quantity type.
- `startDate`: The sample’s start date.
- `device`: An object representing the device that provided the data. Pass `nil` if the app is generating its own data.

## See Also

### Creating a Quantity Series Builder

- [quantityType](quantitytype.md): The quantity type for the series.
- [startDate](startdate.md): The starting date and time for the sample.
- [device](device.md): The device providing the data.
