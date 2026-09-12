> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcellularplanprovisioning/addplan(with:completionhandler:)](https://developer.apple.com/documentation/coretelephony/ctcellularplanprovisioning/addplan(with:completionhandler:))

# addPlan(with:completionHandler:) (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Starts the provisioning process for a specified eSIM.

## Declaration

```swift
func addPlan(with request: CTCellularPlanProvisioningRequest, completionHandler: @escaping @Sendable (CTCellularPlanProvisioningAddPlanResult) -> Void)
```

```swift
func addPlan(with request: CTCellularPlanProvisioningRequest) async -> CTCellularPlanProvisioningAddPlanResult
```

## Parameters

- `request`: A [CTCellularPlanProvisioningRequest](../ctcellularplanprovisioningrequest.md) that identifies the eSIM to download.
- `completionHandler`: A completion handler that executes after processing the request. The parameter passed to the completion handler indicates whether the request succeeded, failed, or ended in an unknown state.

<a id="Discussion"></a>

## Discussion

Once your app calls this method, an iOS wizard guides the user through the process of installing and configuration an eSIM.

<a id="Installing-an-eSIM-in-the-Background"></a>

### Installing an eSIM in the Background

The user may send your app to the background prior to completing eSIM installation. To ensure your app has an opportunity to execute the completion handler and get the result of the installation, use [beginBackgroundTask(expirationHandler:)](../../uikit/uiapplication/beginbackgroundtask%28expirationhandler_%29.md) to perform the eSIM installation as a background task.

## See Also

### Provisioning an eSIM

- [supportsCellularPlan()](supportscellularplan%28%29.md): Returns whether the device and your app meet eSIM provisioning requirements.
- [supportsEmbeddedSIM](supportsembeddedsim.md): A Boolean value that indicates whether the device has hardware eSIM support.
- [addPlan(request:properties:completionHandler:)](addplan%28request_properties_completionhandler_%29.md): Starts the provisioning process with optional properties for the specified eSIM.
- [CTCellularPlanProvisioningAddPlanResult](../ctcellularplanprovisioningaddplanresult.md): The result from attempting to provision an eSIM.

# addPlanWith:completionHandler: (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Starts the provisioning process for a specified eSIM.

## Declaration

```objectivec
- (void) addPlanWith:(CTCellularPlanProvisioningRequest *) request completionHandler:(void (^)(CTCellularPlanProvisioningAddPlanResult result)) completionHandler;
```

## Parameters

- `request`: A [CTCellularPlanProvisioningRequest](../ctcellularplanprovisioningrequest.md) that identifies the eSIM to download.
- `completionHandler`: A completion handler that executes after processing the request. The parameter passed to the completion handler indicates whether the request succeeded, failed, or ended in an unknown state.

<a id="Discussion"></a>

## Discussion

Once your app calls this method, an iOS wizard guides the user through the process of installing and configuration an eSIM.

<a id="Installing-an-eSIM-in-the-Background"></a>

### Installing an eSIM in the Background

The user may send your app to the background prior to completing eSIM installation. To ensure your app has an opportunity to execute the completion handler and get the result of the installation, use [beginBackgroundTaskWithExpirationHandler:](../../uikit/uiapplication/beginbackgroundtask%28expirationhandler_%29.md) to perform the eSIM installation as a background task.

## See Also

### Provisioning an eSIM

- [supportsCellularPlan](supportscellularplan%28%29.md): Returns whether the device and your app meet eSIM provisioning requirements.
- [supportsEmbeddedSIM](supportsembeddedsim.md): A Boolean value that indicates whether the device has hardware eSIM support.
- [addPlanWithRequest:properties:completionHandler:](addplan%28request_properties_completionhandler_%29.md): Starts the provisioning process with optional properties for the specified eSIM.
- [CTCellularPlanProvisioningAddPlanResult](../ctcellularplanprovisioningaddplanresult.md): The result from attempting to provision an eSIM.
