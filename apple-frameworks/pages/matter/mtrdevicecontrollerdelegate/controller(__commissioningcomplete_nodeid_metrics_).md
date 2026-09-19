> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrdevicecontrollerdelegate/controller(_:commissioningcomplete:nodeid:metrics:)

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
