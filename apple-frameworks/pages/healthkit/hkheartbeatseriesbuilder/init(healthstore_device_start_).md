> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkheartbeatseriesbuilder/init(healthstore:device:start:)](https://developer.apple.com/documentation/healthkit/hkheartbeatseriesbuilder/init(healthstore:device:start:))

# init(healthStore:device:start:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new heartbeat series builder.

## Declaration

```swift
init(healthStore: HKHealthStore, device: HKDevice?, start startDate: Date)
```

## Parameters

- `healthStore`: The HealthKit store.
- `device`: An object representing the device that provided the heartbeat data. Pass `nil` if the app is generating its own data.
- `startDate`: The sample’s start date.

## See Also

### Creating a Heartbeat Series Builder

- [maximumCount](maximumcount.md): The maximum number of heartbeats you can add to the sample.

# initWithHealthStore:device:startDate: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new heartbeat series builder.

## Declaration

```objectivec
- (instancetype) initWithHealthStore:(HKHealthStore *) healthStore device:(HKDevice *) device startDate:(NSDate *) startDate;
```

## Parameters

- `healthStore`: The HealthKit store.
- `device`: An object representing the device that provided the heartbeat data. Pass `nil` if the app is generating its own data.
- `startDate`: The sample’s start date.

## See Also

### Creating a Heartbeat Series Builder

- [maximumCount](maximumcount.md): The maximum number of heartbeats you can add to the sample.
