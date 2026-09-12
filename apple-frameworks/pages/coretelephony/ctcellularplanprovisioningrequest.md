> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcellularplanprovisioningrequest](https://developer.apple.com/documentation/coretelephony/ctcellularplanprovisioningrequest)

# CTCellularPlanProvisioningRequest (Swift)

**Framework:** Core Telephony  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A request specifying an eSIM to download and install.

## Declaration

```swift
class CTCellularPlanProvisioningRequest
```

<a id="overview"></a>

## Overview

You must set the [address](ctcellularplanprovisioningrequest/address.md) property for the request to be valid. All other properties are optional.

This class is only available to carrier apps with suitable entitlements.

## Topics

### Specifying Request Properties

- [address](ctcellularplanprovisioningrequest/address.md): The address of the carrier network’s eSIM server.
- [confirmationCode](ctcellularplanprovisioningrequest/confirmationcode.md): The provisioning request’s confirmation code, provided by the network operator when initiating an eSIM download.
- [eid](ctcellularplanprovisioningrequest/eid.md): The provisioning request’s eUICC identifier (EID).
- [iccid](ctcellularplanprovisioningrequest/iccid.md): The provisioning request’s Integrated Circuit Card Identifier (ICCID).
- [matchingID](ctcellularplanprovisioningrequest/matchingid.md): The provisioning request’s matching identifier (MatchingID).
- [oid](ctcellularplanprovisioningrequest/oid.md): The provisioning request’s Object Identifier (OID).

### Initializers

- [init(coder:)](ctcellularplanprovisioningrequest/init%28coder_%29.md)

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
- [CTCellularPlanProperties](ctcellularplanproperties.md): An object you use for an eSIM.
- [CTCellularPlanCapability](ctcellularplancapability.md): The type of cellular plan available for an eSIM.

# CTCellularPlanProvisioningRequest (Objective-C)

**Framework:** Core Telephony  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A request specifying an eSIM to download and install.

## Declaration

```objectivec
@interface CTCellularPlanProvisioningRequest : NSObject
```

<a id="overview"></a>

## Overview

You must set the [address](ctcellularplanprovisioningrequest/address.md) property for the request to be valid. All other properties are optional.

This class is only available to carrier apps with suitable entitlements.

## Topics

### Specifying Request Properties

- [address](ctcellularplanprovisioningrequest/address.md): The address of the carrier network’s eSIM server.
- [confirmationCode](ctcellularplanprovisioningrequest/confirmationcode.md): The provisioning request’s confirmation code, provided by the network operator when initiating an eSIM download.
- [EID](ctcellularplanprovisioningrequest/eid.md): The provisioning request’s eUICC identifier (EID).
- [ICCID](ctcellularplanprovisioningrequest/iccid.md): The provisioning request’s Integrated Circuit Card Identifier (ICCID).
- [matchingID](ctcellularplanprovisioningrequest/matchingid.md): The provisioning request’s matching identifier (MatchingID).
- [OID](ctcellularplanprovisioningrequest/oid.md): The provisioning request’s Object Identifier (OID).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### eSIM

- [CTCellularPlanProvisioning](ctcellularplanprovisioning.md): An object you use to download and install a carrier eSIM.
- [CTCellularPlanProperties](ctcellularplanproperties.md): An object you use for an eSIM.
- [CTCellularPlanCapability](ctcellularplancapability.md): The type of cellular plan available for an eSIM.
