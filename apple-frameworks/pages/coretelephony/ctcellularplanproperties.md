> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcellularplanproperties](https://developer.apple.com/documentation/coretelephony/ctcellularplanproperties)

# CTCellularPlanProperties (Swift)

**Framework:** Core Telephony  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An object you use for an eSIM.

## Declaration

```swift
class CTCellularPlanProperties
```

<a id="Overview"></a>

## Overview

Use `CTCellularPlanProperties` to set the capabilities of your eSIMs.

## Topics

### Getting the eSIM properties

- [associatedIccid](ctcellularplanproperties/associatediccid.md): The integrated circuit card identifier (ICCID) that identifies a SIM.
- [simCapability](ctcellularplanproperties/simcapability.md): The available type of cellular plan that your eSIM supports.
- [supportedRegionCodes](ctcellularplanproperties/supportedregioncodes-yhu5.md): The available regions that your eSIM supports.
- [CTCellularPlanProperties.lifecycle](ctcellularplanproperties/lifecycle.md): A type that contains lifecycle details for a time-limited cellular plan.
- [lifecycleProperties](ctcellularplanproperties/lifecycleproperties.md): The lifecycle details for a time-limited cellular plan.

### Initializers

- [init(coder:)](ctcellularplanproperties/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### eSIM

- [CTCellularPlanProvisioning](ctcellularplanprovisioning.md): An object you use to download and install a carrier eSIM.
- [CTCellularPlanProvisioningRequest](ctcellularplanprovisioningrequest.md): A request specifying an eSIM to download and install.
- [CTCellularPlanCapability](ctcellularplancapability.md): The type of cellular plan available for an eSIM.

# CTCellularPlanProperties (Objective-C)

**Framework:** Core Telephony  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An object you use for an eSIM.

## Declaration

```objectivec
@interface CTCellularPlanProperties : NSObject
```

<a id="Overview"></a>

## Overview

Use `CTCellularPlanProperties` to set the capabilities of your eSIMs.

## Topics

### Getting the eSIM properties

- [associatedIccid](ctcellularplanproperties/associatediccid.md): The integrated circuit card identifier (ICCID) that identifies a SIM.
- [simCapability](ctcellularplanproperties/simcapability.md): The available type of cellular plan that your eSIM supports.
- [supportedRegionCodes](ctcellularplanproperties/supportedregioncodes-5elox.md): The available regions that your eSIM supports.
- [CTCellularPlanLifecycleProperties](ctcellularplanproperties/lifecycle.md): A type that contains lifecycle details for a time-limited cellular plan.
- [lifecycleProperties](ctcellularplanproperties/lifecycleproperties.md): The lifecycle details for a time-limited cellular plan.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### eSIM

- [CTCellularPlanProvisioning](ctcellularplanprovisioning.md): An object you use to download and install a carrier eSIM.
- [CTCellularPlanProvisioningRequest](ctcellularplanprovisioningrequest.md): A request specifying an eSIM to download and install.
- [CTCellularPlanCapability](ctcellularplancapability.md): The type of cellular plan available for an eSIM.
