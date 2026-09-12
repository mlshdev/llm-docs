> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcellularplanprovisioning/supportscellularplan()](https://developer.apple.com/documentation/coretelephony/ctcellularplanprovisioning/supportscellularplan())

# supportsCellularPlan() (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Returns whether the device and your app meet eSIM provisioning requirements.

## Declaration

```swift
func supportsCellularPlan() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if all requirements are met; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method returns [true](https://developer.apple.com/documentation/swift/true) when all of the following conditions are met:

- The device supports eSIM installation.
- The activation policy allows eSIM installation.
- Your app includes the [com.apple.CommCenter.fine-grained](../../bundleresources/entitlements/com.apple.commcenter.fine-grained.md) entitlement with `public-cellular-plan` in its array of values.

You can use this method to verify that your entitlement is properly configured. If you expect the device to support cellular plans but it returns [false](https://developer.apple.com/documentation/swift/false), check that you’ve added the required entitlement to your app and that its value array includes `public-cellular-plan`.

This method doesn’t check whether you have installed an eSIM. You can call this method at any time.

## See Also

### Provisioning an eSIM

- [supportsEmbeddedSIM](supportsembeddedsim.md): A Boolean value that indicates whether the device has hardware eSIM support.
- [addPlan(request:properties:completionHandler:)](addplan%28request_properties_completionhandler_%29.md): Starts the provisioning process with optional properties for the specified eSIM.
- [addPlan(with:completionHandler:)](addplan%28with_completionhandler_%29.md): Starts the provisioning process for a specified eSIM.
- [CTCellularPlanProvisioningAddPlanResult](../ctcellularplanprovisioningaddplanresult.md): The result from attempting to provision an eSIM.

# supportsCellularPlan (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Returns whether the device and your app meet eSIM provisioning requirements.

## Declaration

```objectivec
- (BOOL) supportsCellularPlan;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if all requirements are met; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method returns [true](https://developer.apple.com/documentation/swift/true) when all of the following conditions are met:

- The device supports eSIM installation.
- The activation policy allows eSIM installation.
- Your app includes the [com.apple.CommCenter.fine-grained](../../bundleresources/entitlements/com.apple.commcenter.fine-grained.md) entitlement with `public-cellular-plan` in its array of values.

You can use this method to verify that your entitlement is properly configured. If you expect the device to support cellular plans but it returns [false](https://developer.apple.com/documentation/swift/false), check that you’ve added the required entitlement to your app and that its value array includes `public-cellular-plan`.

This method doesn’t check whether you have installed an eSIM. You can call this method at any time.

## See Also

### Provisioning an eSIM

- [supportsEmbeddedSIM](supportsembeddedsim.md): A Boolean value that indicates whether the device has hardware eSIM support.
- [addPlanWithRequest:properties:completionHandler:](addplan%28request_properties_completionhandler_%29.md): Starts the provisioning process with optional properties for the specified eSIM.
- [addPlanWith:completionHandler:](addplan%28with_completionhandler_%29.md): Starts the provisioning process for a specified eSIM.
- [CTCellularPlanProvisioningAddPlanResult](../ctcellularplanprovisioningaddplanresult.md): The result from attempting to provision an eSIM.
