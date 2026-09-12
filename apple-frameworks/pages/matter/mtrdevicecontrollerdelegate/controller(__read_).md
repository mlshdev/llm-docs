> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicecontrollerdelegate/controller(_:read:)](https://developer.apple.com/documentation/matter/mtrdevicecontrollerdelegate/controller(_:read:))

# controller(\_:read:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Notify the delegate when commissioning infomation has been read from the commissionee.

## Declaration

```swift
optional func controller(_ controller: MTRDeviceController, read info: MTRCommissioneeInfo)
```

<a id="discussion"></a>

## Discussion

Note that this notification happens before device attestation is performed, so the information delivered by this notification should not be trusted.

# controller:readCommissioneeInfo: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Notify the delegate when commissioning infomation has been read from the commissionee.

## Declaration

```objectivec
- (void) controller:(MTRDeviceController *) controller readCommissioneeInfo:(MTRCommissioneeInfo *) info;
```

<a id="discussion"></a>

## Discussion

Note that this notification happens before device attestation is performed, so the information delivered by this notification should not be trusted.
