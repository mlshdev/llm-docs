> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony](https://developer.apple.com/documentation/coretelephony)

# Core Telephony (Swift)

**Framework:** Core Telephony  
**Kind:** Framework  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.10+

Access information about a user’s cellular service provider, such as its unique identifier and whether the carrier allows VoIP.

<a id="overview"></a>

## Overview

Use the Core Telephony framework to obtain information about a user’s home cellular service provider. Carriers can use this information to write apps that provide services only for their own subscribers. You can also use this framework to obtain information about current cellular calls.

A [CTCarrier](coretelephony/ctcarrier.md) object gives you information about the user’s cellular service provider, such as whether it allows use of VoIP (Voice over Internet Protocol) on its network. A [CTCall](coretelephony/ctcall.md) object gives you information about a current call, including a unique identifier and state information such as dialing, incoming, connected, or disconnected.

> **Note**

>  VoIP and cellular services through Core Telephony are unavailable for compatible iPad and iPhone apps running in visionOS. You can still use the APIs of this framework, but services don’t return carrier information.

## Topics

### Service information

- [CTTelephonyNetworkInfo](coretelephony/cttelephonynetworkinfo.md): An object that provides notifications of changes to the user’s cellular service provider.
- [iPhone quick switch](coretelephony/iphone-quick-switch.md): Enable seamless app transition between multiple iPhones.

### eSIM

Carrier apps use the classes in this group to provision cellular plan eSIMs on supported devices.

- [CTCellularPlanProvisioning](coretelephony/ctcellularplanprovisioning.md): An object you use to download and install a carrier eSIM.
- [CTCellularPlanProvisioningRequest](coretelephony/ctcellularplanprovisioningrequest.md): A request specifying an eSIM to download and install.
- [CTCellularPlanProperties](coretelephony/ctcellularplanproperties.md): An object you use for an eSIM.
- [CTCellularPlanCapability](coretelephony/ctcellularplancapability.md): The type of cellular plan available for an eSIM.

### SIM

Check the presence of a SIM based on authentication.

- [CTCellularPlanStatus](coretelephony/ctcellularplanstatus.md): An object that validates tokens for UPI device verification or checks the availability of cellular plans for a phone number.

### Subscriber information

- [CTSubscriber](coretelephony/ctsubscriber.md): A cellular network subscriber.
- [CTSubscriberDelegate](coretelephony/ctsubscriberdelegate.md): A protocol to handle changes to subscriber information.
- [CTSubscriberInfo](coretelephony/ctsubscriberinfo.md): An object that provides an array of cellular network subscribers.

### Cellular data access

- [CTCellularData](coretelephony/ctcellulardata.md): An object indicating whether the app can access cellular data.

### Network slicing

- [CTSlicingManager](coretelephony/ctslicingmanager.md): A manager that provides network-slicing capabilities for controlling and monitoring cellular network traffic routing.

### Errors

- [CTError](coretelephony/cterror.md): A type representing a Core Telephony error.

### Deprecated

Getting call information in Core Telephony is no longer supported. Use [CallKit](callkit.md) instead.

- [CTCarrier](coretelephony/ctcarrier.md): Deprecated. Information about the user’s cellular service provider, such as its unique identifier and whether it allows VoIP calls on its network.
- [CTCall](coretelephony/ctcall.md): Deprecated. An object used to identify a cellular call and determine its state.
- [CTCallCenter](coretelephony/ctcallcenter.md): Deprecated. An object that provides a list of current cellular calls, and provides the ability to respond to state changes for calls.

# Core Telephony (Objective-C)

**Framework:** Core Telephony  
**Kind:** Framework  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.10+

Access information about a user’s cellular service provider, such as its unique identifier and whether the carrier allows VoIP.

<a id="overview"></a>

## Overview

Use the Core Telephony framework to obtain information about a user’s home cellular service provider. Carriers can use this information to write apps that provide services only for their own subscribers. You can also use this framework to obtain information about current cellular calls.

A [CTCarrier](coretelephony/ctcarrier.md) object gives you information about the user’s cellular service provider, such as whether it allows use of VoIP (Voice over Internet Protocol) on its network. A [CTCall](coretelephony/ctcall.md) object gives you information about a current call, including a unique identifier and state information such as dialing, incoming, connected, or disconnected.

> **Note**

>  VoIP and cellular services through Core Telephony are unavailable for compatible iPad and iPhone apps running in visionOS. You can still use the APIs of this framework, but services don’t return carrier information.

## Topics

### Service information

- [CTTelephonyNetworkInfo](coretelephony/cttelephonynetworkinfo.md): An object that provides notifications of changes to the user’s cellular service provider.
- [iPhone quick switch](coretelephony/iphone-quick-switch.md): Enable seamless app transition between multiple iPhones.

### eSIM

Carrier apps use the classes in this group to provision cellular plan eSIMs on supported devices.

- [CTCellularPlanProvisioning](coretelephony/ctcellularplanprovisioning.md): An object you use to download and install a carrier eSIM.
- [CTCellularPlanProvisioningRequest](coretelephony/ctcellularplanprovisioningrequest.md): A request specifying an eSIM to download and install.
- [CTCellularPlanProperties](coretelephony/ctcellularplanproperties.md): An object you use for an eSIM.
- [CTCellularPlanCapability](coretelephony/ctcellularplancapability.md): The type of cellular plan available for an eSIM.

### SIM

Check the presence of a SIM based on authentication.

- [CTCellularPlanStatus](coretelephony/ctcellularplanstatus.md): An object that validates tokens for UPI device verification or checks the availability of cellular plans for a phone number.

### Subscriber information

- [CTSubscriber](coretelephony/ctsubscriber.md): A cellular network subscriber.
- [CTSubscriberDelegate](coretelephony/ctsubscriberdelegate.md): A protocol to handle changes to subscriber information.
- [CTSubscriberInfo](coretelephony/ctsubscriberinfo.md): An object that provides an array of cellular network subscribers.

### Cellular data access

- [CTCellularData](coretelephony/ctcellulardata.md): An object indicating whether the app can access cellular data.

### Errors

- [CTError](coretelephony/cterror.md): A type representing a Core Telephony error.

### Reference

- [Core Telephony Macros](coretelephony/coretelephony-macros.md)

### Deprecated

Getting call information in Core Telephony is no longer supported. Use [CallKit](callkit.md) instead.

- [CTCarrier](coretelephony/ctcarrier.md): Deprecated. Information about the user’s cellular service provider, such as its unique identifier and whether it allows VoIP calls on its network.
- [CTCall](coretelephony/ctcall.md): Deprecated. An object used to identify a cellular call and determine its state.
- [CTCallCenter](coretelephony/ctcallcenter.md): Deprecated. An object that provides a list of current cellular calls, and provides the ability to respond to state changes for calls.
