> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcellularplanprovisioning/update(_:completionhandler:)](https://developer.apple.com/documentation/coretelephony/ctcellularplanprovisioning/update(_:completionhandler:))

# update(\_:completionHandler:) (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Updates the capability and region availability for an eSIM.

## Declaration

```swift
func update(_ properties: CTCellularPlanProperties, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func update(_ properties: CTCellularPlanProperties) async throws
```

## Parameters

- `properties`: A required parameter where you specify the eSIM’s [associatedIccid](../ctcellularplanproperties/associatediccid.md), [simCapability](../ctcellularplanproperties/simcapability.md) and [supportedRegionCodes](../ctcellularplanproperties/supportedregioncodes-yhu5.md). If missing, an error is returned. You are allowed to provide an empty list for `supportedRegionCodes`.
- `completionHandler`: A completion handler that executes after processing the request. The parameter passed to the completion handler indicates whether the request succeeded, failed, or ended in an unknown state.

<a id="Overview"></a>

## Overview

When you can’t call [addPlan(request:properties:completionHandler:)](addplan%28request_properties_completionhandler_%29.md) because a person installs your SIM with a QR Code, a universal link, or a physical SIM, use this method to issue eSIM property information for a particular eSIM before provisioning begins. Use the `associatedIccid` so that the system can match the future install with your provided property information.

You can also use this method to update information on an ICCID that already exists on the device. After matching the `associatedICCID`, the system updates the eSIM with the information you provide.

# updateCellularPlanProperties:completionHandler: (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Updates the capability and region availability for an eSIM.

## Declaration

```objectivec
- (void) updateCellularPlanProperties:(CTCellularPlanProperties *) properties completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `properties`: A required parameter where you specify the eSIM’s [associatedIccid](../ctcellularplanproperties/associatediccid.md), [simCapability](../ctcellularplanproperties/simcapability.md) and [supportedRegionCodes](../ctcellularplanproperties/supportedregioncodes-yhu5.md). If missing, an error is returned. You are allowed to provide an empty list for `supportedRegionCodes`.
- `completionHandler`: A completion handler that executes after processing the request. The parameter passed to the completion handler indicates whether the request succeeded, failed, or ended in an unknown state.

<a id="Overview"></a>

## Overview

When you can’t call [addPlanWithRequest:properties:completionHandler:](addplan%28request_properties_completionhandler_%29.md) because a person installs your SIM with a QR Code, a universal link, or a physical SIM, use this method to issue eSIM property information for a particular eSIM before provisioning begins. Use the `associatedIccid` so that the system can match the future install with your provided property information.

You can also use this method to update information on an ICCID that already exists on the device. After matching the `associatedICCID`, the system updates the eSIM with the information you provide.
