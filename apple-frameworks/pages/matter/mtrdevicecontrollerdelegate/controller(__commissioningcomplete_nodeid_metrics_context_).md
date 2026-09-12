> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicecontrollerdelegate/controller(_:commissioningcomplete:nodeid:metrics:context:)](https://developer.apple.com/documentation/matter/mtrdevicecontrollerdelegate/controller(_:commissioningcomplete:nodeid:metrics:context:))

# controller(\_:commissioningComplete:nodeID:metrics:context:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Notify the delegate when commissioning is completed.

## Declaration

```swift
optional func controller(_ controller: MTRDeviceController, commissioningComplete error: (any Error)?, nodeID: NSNumber?, metrics: MTRMetrics, context: [String : Any])
```

<a id="discussion"></a>

## Discussion

Exactly one of error and nodeID will be nil.

If nodeID is not nil, then it represents the node id the node was assigned, as encoded in its operational certificate.

The metrics object contains information corresponding to the commissioning session.

The context parameter is a dictionary. See MTRCommissioningDelegate’s commissioning:succeededForNodeID:metrics:context for the supported keys.

If supported, this selector will be used in preference to controller:commissioningComplete:nodeID: and controller:commissioningComplete:nodeID:metrics:.

# controller:commissioningComplete:nodeID:metrics:context: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Notify the delegate when commissioning is completed.

## Declaration

```objectivec
- (void) controller:(MTRDeviceController *) controller commissioningComplete:(NSError *) error nodeID:(NSNumber *) nodeID metrics:(MTRMetrics *) metrics context:(NSDictionary<NSString *,id> *) context;
```

<a id="discussion"></a>

## Discussion

Exactly one of error and nodeID will be nil.

If nodeID is not nil, then it represents the node id the node was assigned, as encoded in its operational certificate.

The metrics object contains information corresponding to the commissioning session.

The context parameter is a dictionary. See MTRCommissioningDelegate’s commissioning:succeededForNodeID:metrics:context for the supported keys.

If supported, this selector will be used in preference to controller:commissioningComplete:nodeID: and controller:commissioningComplete:nodeID:metrics:.
