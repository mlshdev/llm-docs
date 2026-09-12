> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcellularplanprovisioning/addplan(request:properties:completionhandler:)](https://developer.apple.com/documentation/coretelephony/ctcellularplanprovisioning/addplan(request:properties:completionhandler:))

# addPlan(request:properties:completionHandler:) (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Starts the provisioning process with optional properties for the specified eSIM.

## Declaration

```swift
func addPlan(request: CTCellularPlanProvisioningRequest, properties: CTCellularPlanProperties?, completionHandler: @escaping @Sendable (CTCellularPlanProvisioningAddPlanResult) -> Void)
```

```swift
func addPlan(request: CTCellularPlanProvisioningRequest, properties: CTCellularPlanProperties?) async -> CTCellularPlanProvisioningAddPlanResult
```

## Parameters

- `request`: A [CTCellularPlanProvisioningRequest](../ctcellularplanprovisioningrequest.md) that identifies the eSIM to download.
- `properties`: An optional parameter for [CTCellularPlanProperties](../ctcellularplanproperties.md). Use to specify the voice capability and region your eSIM supports.
- `completionHandler`: A completion handler that executes after processing the request. The parameter passed to the completion handler indicates whether the request succeeded, failed, or ended in an unknown state.

<a id="Overview"></a>

## Overview

Provide the system the information needed for the existing API to perform an install with a [CTCellularPlanProvisioningRequest](../ctcellularplanprovisioningrequest.md). By providing the request and properties object together, the system can pair the information together.

Once your app calls this method, an iOS wizard guides the person through the process of installing and configuration an eSIM.

The person may send your app to the background prior to completing eSIM installation. To ensure your app has an opportunity to execute the completion handler and get the result of the installation, use [beginBackgroundTask(expirationHandler:)](../../uikit/uiapplication/beginbackgroundtask%28expirationhandler_%29.md) to perform the eSIM installation as a background task.

> **Important**

> When providing [CTCellularPlanProperties](../ctcellularplanproperties.md), the [associatedIccid](../ctcellularplanproperties/associatediccid.md) property is optional. If you don’t have a matching ICCID, leave the `associatedICCID` as `nil`. Providing an incorrect or empty ICCID can cause the provisioning process to fail.

## See Also

### Provisioning an eSIM

- [supportsCellularPlan()](supportscellularplan%28%29.md): Returns whether the device and your app meet eSIM provisioning requirements.
- [supportsEmbeddedSIM](supportsembeddedsim.md): A Boolean value that indicates whether the device has hardware eSIM support.
- [addPlan(with:completionHandler:)](addplan%28with_completionhandler_%29.md): Starts the provisioning process for a specified eSIM.
- [CTCellularPlanProvisioningAddPlanResult](../ctcellularplanprovisioningaddplanresult.md): The result from attempting to provision an eSIM.

# addPlanWithRequest:properties:completionHandler: (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Starts the provisioning process with optional properties for the specified eSIM.

## Declaration

```objectivec
- (void) addPlanWithRequest:(CTCellularPlanProvisioningRequest *) request properties:(CTCellularPlanProperties *) properties completionHandler:(void (^)(CTCellularPlanProvisioningAddPlanResult result)) completionHandler;
```

## Parameters

- `request`: A [CTCellularPlanProvisioningRequest](../ctcellularplanprovisioningrequest.md) that identifies the eSIM to download.
- `properties`: An optional parameter for [CTCellularPlanProperties](../ctcellularplanproperties.md). Use to specify the voice capability and region your eSIM supports.
- `completionHandler`: A completion handler that executes after processing the request. The parameter passed to the completion handler indicates whether the request succeeded, failed, or ended in an unknown state.

<a id="Overview"></a>

## Overview

Provide the system the information needed for the existing API to perform an install with a [CTCellularPlanProvisioningRequest](../ctcellularplanprovisioningrequest.md). By providing the request and properties object together, the system can pair the information together.

Once your app calls this method, an iOS wizard guides the person through the process of installing and configuration an eSIM.

The person may send your app to the background prior to completing eSIM installation. To ensure your app has an opportunity to execute the completion handler and get the result of the installation, use [beginBackgroundTaskWithExpirationHandler:](../../uikit/uiapplication/beginbackgroundtask%28expirationhandler_%29.md) to perform the eSIM installation as a background task.

> **Important**

> When providing [CTCellularPlanProperties](../ctcellularplanproperties.md), the [associatedIccid](../ctcellularplanproperties/associatediccid.md) property is optional. If you don’t have a matching ICCID, leave the `associatedICCID` as `nil`. Providing an incorrect or empty ICCID can cause the provisioning process to fail.

## See Also

### Provisioning an eSIM

- [supportsCellularPlan](supportscellularplan%28%29.md): Returns whether the device and your app meet eSIM provisioning requirements.
- [supportsEmbeddedSIM](supportsembeddedsim.md): A Boolean value that indicates whether the device has hardware eSIM support.
- [addPlanWith:completionHandler:](addplan%28with_completionhandler_%29.md): Starts the provisioning process for a specified eSIM.
- [CTCellularPlanProvisioningAddPlanResult](../ctcellularplanprovisioningaddplanresult.md): The result from attempting to provision an eSIM.
