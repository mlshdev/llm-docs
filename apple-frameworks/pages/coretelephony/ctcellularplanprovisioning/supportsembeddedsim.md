> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcellularplanprovisioning/supportsembeddedsim](https://developer.apple.com/documentation/coretelephony/ctcellularplanprovisioning/supportsembeddedsim)

# supportsEmbeddedSIM (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

A Boolean value that indicates whether the device has hardware eSIM support.

## Declaration

```swift
var supportsEmbeddedSIM: Bool { get }
```

## See Also

### Provisioning an eSIM

- [supportsCellularPlan()](supportscellularplan%28%29.md): Returns whether the device and your app meet eSIM provisioning requirements.
- [addPlan(request:properties:completionHandler:)](addplan%28request_properties_completionhandler_%29.md): Starts the provisioning process with optional properties for the specified eSIM.
- [addPlan(with:completionHandler:)](addplan%28with_completionhandler_%29.md): Starts the provisioning process for a specified eSIM.
- [CTCellularPlanProvisioningAddPlanResult](../ctcellularplanprovisioningaddplanresult.md): The result from attempting to provision an eSIM.

# supportsEmbeddedSIM (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

A Boolean value that indicates whether the device has hardware eSIM support.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL supportsEmbeddedSIM;
```

## See Also

### Provisioning an eSIM

- [supportsCellularPlan](supportscellularplan%28%29.md): Returns whether the device and your app meet eSIM provisioning requirements.
- [addPlanWithRequest:properties:completionHandler:](addplan%28request_properties_completionhandler_%29.md): Starts the provisioning process with optional properties for the specified eSIM.
- [addPlanWith:completionHandler:](addplan%28with_completionhandler_%29.md): Starts the provisioning process for a specified eSIM.
- [CTCellularPlanProvisioningAddPlanResult](../ctcellularplanprovisioningaddplanresult.md): The result from attempting to provision an eSIM.
