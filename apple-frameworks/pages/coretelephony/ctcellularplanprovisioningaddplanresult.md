> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcellularplanprovisioningaddplanresult](https://developer.apple.com/documentation/coretelephony/ctcellularplanprovisioningaddplanresult)

# CTCellularPlanProvisioningAddPlanResult (Swift)

**Framework:** Core Telephony  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.10+

The result from attempting to provision an eSIM.

## Declaration

```swift
enum CTCellularPlanProvisioningAddPlanResult
```

## Topics

### Results

- [CTCellularPlanProvisioningAddPlanResult.fail](ctcellularplanprovisioningaddplanresult/fail.md): The requested eSIM provisioning failed.
- [CTCellularPlanProvisioningAddPlanResult.success](ctcellularplanprovisioningaddplanresult/success.md): The requested eSIM provisioning succeeded.
- [CTCellularPlanProvisioningAddPlanResult.unknown](ctcellularplanprovisioningaddplanresult/unknown.md): The result of the requested eSIM provisioning is unknown.
- [CTCellularPlanProvisioningAddPlanResult.cancel](ctcellularplanprovisioningaddplanresult/cancel.md)

### Initializers

- [init(rawValue:)](ctcellularplanprovisioningaddplanresult/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Provisioning an eSIM

- [supportsCellularPlan()](ctcellularplanprovisioning/supportscellularplan%28%29.md): Returns whether the device and your app meet eSIM provisioning requirements.
- [supportsEmbeddedSIM](ctcellularplanprovisioning/supportsembeddedsim.md): A Boolean value that indicates whether the device has hardware eSIM support.
- [addPlan(request:properties:completionHandler:)](ctcellularplanprovisioning/addplan%28request_properties_completionhandler_%29.md): Starts the provisioning process with optional properties for the specified eSIM.
- [addPlan(with:completionHandler:)](ctcellularplanprovisioning/addplan%28with_completionhandler_%29.md): Starts the provisioning process for a specified eSIM.

# CTCellularPlanProvisioningAddPlanResult (Objective-C)

**Framework:** Core Telephony  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.10+

The result from attempting to provision an eSIM.

## Declaration

```objectivec
enum CTCellularPlanProvisioningAddPlanResult : NSUInteger;
```

## Topics

### Results

- [CTCellularPlanProvisioningAddPlanResultFail](ctcellularplanprovisioningaddplanresult/fail.md): The requested eSIM provisioning failed.
- [CTCellularPlanProvisioningAddPlanResultSuccess](ctcellularplanprovisioningaddplanresult/success.md): The requested eSIM provisioning succeeded.
- [CTCellularPlanProvisioningAddPlanResultUnknown](ctcellularplanprovisioningaddplanresult/unknown.md): The result of the requested eSIM provisioning is unknown.
- [CTCellularPlanProvisioningAddPlanResultCancel](ctcellularplanprovisioningaddplanresult/cancel.md)

## See Also

### Provisioning an eSIM

- [supportsCellularPlan](ctcellularplanprovisioning/supportscellularplan%28%29.md): Returns whether the device and your app meet eSIM provisioning requirements.
- [supportsEmbeddedSIM](ctcellularplanprovisioning/supportsembeddedsim.md): A Boolean value that indicates whether the device has hardware eSIM support.
- [addPlanWithRequest:properties:completionHandler:](ctcellularplanprovisioning/addplan%28request_properties_completionhandler_%29.md): Starts the provisioning process with optional properties for the specified eSIM.
- [addPlanWith:completionHandler:](ctcellularplanprovisioning/addplan%28with_completionhandler_%29.md): Starts the provisioning process for a specified eSIM.
