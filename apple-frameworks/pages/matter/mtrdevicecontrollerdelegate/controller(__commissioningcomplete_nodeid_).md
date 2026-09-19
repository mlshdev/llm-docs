> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrdevicecontrollerdelegate/controller(_:commissioningcomplete:nodeid:)

# controller(\_:commissioningComplete:nodeID:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
optional func controller(_ controller: MTRDeviceController, commissioningComplete error: (any Error)?, nodeID: NSNumber?)
```

# controller:commissioningComplete:nodeID: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```objectivec
- (void) controller:(MTRDeviceController *) controller commissioningComplete:(NSError *) error nodeID:(NSNumber *) nodeID;
```
