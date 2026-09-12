> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcellularplanprovisioning](https://developer.apple.com/documentation/coretelephony/ctcellularplanprovisioning)

# CTCellularPlanProvisioning (Swift)

**Framework:** Core Telephony  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An object you use to download and install a carrier eSIM.

## Declaration

```swift
class CTCellularPlanProvisioning
```

<a id="overview"></a>

## Overview

This class is only available to carrier apps with the [com.apple.CommCenter.fine-grained](../bundleresources/entitlements/com.apple.commcenter.fine-grained.md) entitlement, where the entitlement’s array of values includes `public-cellular-plan`.

## Topics

### Provisioning an eSIM

- [supportsCellularPlan()](ctcellularplanprovisioning/supportscellularplan%28%29.md): Returns whether the device and your app meet eSIM provisioning requirements.
- [supportsEmbeddedSIM](ctcellularplanprovisioning/supportsembeddedsim.md): A Boolean value that indicates whether the device has hardware eSIM support.
- [addPlan(request:properties:completionHandler:)](ctcellularplanprovisioning/addplan%28request_properties_completionhandler_%29.md): Starts the provisioning process with optional properties for the specified eSIM.
- [addPlan(with:completionHandler:)](ctcellularplanprovisioning/addplan%28with_completionhandler_%29.md): Starts the provisioning process for a specified eSIM.
- [CTCellularPlanProvisioningAddPlanResult](ctcellularplanprovisioningaddplanresult.md): The result from attempting to provision an eSIM.

### Updating eSIM information

- [update(\_:completionHandler:)](ctcellularplanprovisioning/update%28__completionhandler_%29.md): Updates the capability and region availability for an eSIM.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### eSIM

- [CTCellularPlanProvisioningRequest](ctcellularplanprovisioningrequest.md): A request specifying an eSIM to download and install.
- [CTCellularPlanProperties](ctcellularplanproperties.md): An object you use for an eSIM.
- [CTCellularPlanCapability](ctcellularplancapability.md): The type of cellular plan available for an eSIM.

# CTCellularPlanProvisioning (Objective-C)

**Framework:** Core Telephony  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An object you use to download and install a carrier eSIM.

## Declaration

```objectivec
@interface CTCellularPlanProvisioning : NSObject
```

<a id="overview"></a>

## Overview

This class is only available to carrier apps with the [com.apple.CommCenter.fine-grained](../bundleresources/entitlements/com.apple.commcenter.fine-grained.md) entitlement, where the entitlement’s array of values includes `public-cellular-plan`.

## Topics

### Provisioning an eSIM

- [supportsCellularPlan](ctcellularplanprovisioning/supportscellularplan%28%29.md): Returns whether the device and your app meet eSIM provisioning requirements.
- [supportsEmbeddedSIM](ctcellularplanprovisioning/supportsembeddedsim.md): A Boolean value that indicates whether the device has hardware eSIM support.
- [addPlanWithRequest:properties:completionHandler:](ctcellularplanprovisioning/addplan%28request_properties_completionhandler_%29.md): Starts the provisioning process with optional properties for the specified eSIM.
- [addPlanWith:completionHandler:](ctcellularplanprovisioning/addplan%28with_completionhandler_%29.md): Starts the provisioning process for a specified eSIM.
- [CTCellularPlanProvisioningAddPlanResult](ctcellularplanprovisioningaddplanresult.md): The result from attempting to provision an eSIM.

### Updating eSIM information

- [updateCellularPlanProperties:completionHandler:](ctcellularplanprovisioning/update%28__completionhandler_%29.md): Updates the capability and region availability for an eSIM.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### eSIM

- [CTCellularPlanProvisioningRequest](ctcellularplanprovisioningrequest.md): A request specifying an eSIM to download and install.
- [CTCellularPlanProperties](ctcellularplanproperties.md): An object you use for an eSIM.
- [CTCellularPlanCapability](ctcellularplancapability.md): The type of cellular plan available for an eSIM.
