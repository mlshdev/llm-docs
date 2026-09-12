> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicecontrollerdelegate/controller(_:commissioningcomplete:nodeid:metrics:)](https://developer.apple.com/documentation/matter/mtrdevicecontrollerdelegate/controller(_:commissioningcomplete:nodeid:metrics:))

# controller(\_:commissioningComplete:nodeID:metrics:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ (deprecated in 27.0) · iPadOS 17.6+ (deprecated in 27.0) · Mac Catalyst 17.6+ (deprecated in 27.0) · macOS 14.6+ (deprecated in 27.0) · tvOS 17.6+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 10.6+ (deprecated in 27.0)

## Declaration

```swift
optional func controller(_ controller: MTRDeviceController, commissioningComplete error: (any Error)?, nodeID: NSNumber?, metrics: MTRMetrics)
```

# controller:commissioningComplete:nodeID:metrics: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ (deprecated in 27.0) · iPadOS 17.6+ (deprecated in 27.0) · Mac Catalyst 17.6+ (deprecated in 27.0) · macOS 14.6+ (deprecated in 27.0) · tvOS 17.6+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 10.6+ (deprecated in 27.0)

## Declaration

```objectivec
- (void) controller:(MTRDeviceController *) controller commissioningComplete:(NSError *) error nodeID:(NSNumber *) nodeID metrics:(MTRMetrics *) metrics;
```
