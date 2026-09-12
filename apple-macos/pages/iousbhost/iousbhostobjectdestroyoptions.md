> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostobjectdestroyoptions](https://developer.apple.com/documentation/iousbhost/iousbhostobjectdestroyoptions)

# IOUSBHostObjectDestroyOptions (Swift)

**Framework:** IOUSBHost  
**Kind:** Structure  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```swift
struct IOUSBHostObjectDestroyOptions
```

<a id="overview"></a>

## Overview

Options for destroyWithOptions

```
         the device will not be reset and drivers will not be re-registered for matching.  This allows for IOUSBHostDevice
         objects that were initialized with <code>IOUSBHostObjectInitOptionsDeviceCapture</code> to honor the
         <code>kUSBHostMessageDeviceIsRequestingClose</code> message.

         This option is only valid for macOS
```

## Topics

### Initializers

- [init(rawValue:)](iousbhostobjectdestroyoptions/init%28rawvalue_%29.md)

### Type Properties

- [deviceSurrender](iousbhostobjectdestroyoptions/devicesurrender.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Structures

- [IOUSBHostCIControllerState](iousbhostcicontrollerstate.md)
- [IOUSBHostCIDeviceSpeed](iousbhostcidevicespeed.md)
- [IOUSBHostCIDeviceState](iousbhostcidevicestate.md)
- [IOUSBHostCIEndpointState](iousbhostciendpointstate.md)
- [IOUSBHostCIExceptionType](iousbhostciexceptiontype.md)
- [IOUSBHostCILinkState](iousbhostcilinkstate.md)
- [IOUSBHostCIMessage](iousbhostcimessage.md)
- [IOUSBHostCIMessageStatus](iousbhostcimessagestatus.md)
- [IOUSBHostCIMessageType](iousbhostcimessagetype.md)
- [IOUSBHostCIPortState](iousbhostciportstate.md)
- [IOUSBHostCIUserClientVersion](iousbhostciuserclientversion.md)
- [IOUSBHostIsochronousTransaction](iousbhostisochronoustransaction.md)
- [IOUSBHostIsochronousTransactionOptions](iousbhostisochronoustransactionoptions.md)
- [IOUSBHostIsochronousTransferOptions](iousbhostisochronoustransferoptions.md)

# IOUSBHostObjectDestroyOptions (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```objectivec
enum IOUSBHostObjectDestroyOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

Options for destroyWithOptions

```
         the device will not be reset and drivers will not be re-registered for matching.  This allows for IOUSBHostDevice
         objects that were initialized with <code>IOUSBHostObjectInitOptionsDeviceCapture</code> to honor the
         <code>kUSBHostMessageDeviceIsRequestingClose</code> message.

         This option is only valid for macOS
```

## Topics

### Enumeration Cases

- [IOUSBHostObjectDestroyOptionsNone](iousbhostobjectdestroyoptions/iousbhostobjectdestroyoptionsnone.md)
- [IOUSBHostObjectDestroyOptionsDeviceSurrender](iousbhostobjectdestroyoptions/devicesurrender.md)

## See Also

### Structures

- [IOUSBHostCIControllerState](iousbhostcicontrollerstate.md)
- [IOUSBHostCIDeviceSpeed](iousbhostcidevicespeed.md)
- [IOUSBHostCIDeviceState](iousbhostcidevicestate.md)
- [IOUSBHostCIEndpointState](iousbhostciendpointstate.md)
- [IOUSBHostCIExceptionType](iousbhostciexceptiontype.md)
- [IOUSBHostCILinkState](iousbhostcilinkstate.md)
- [IOUSBHostCIMessage](iousbhostcimessage.md)
- [IOUSBHostCIMessageStatus](iousbhostcimessagestatus.md)
- [IOUSBHostCIMessageType](iousbhostcimessagetype.md)
- [IOUSBHostCIPortState](iousbhostciportstate.md)
- [IOUSBHostCIUserClientVersion](iousbhostciuserclientversion.md)
- [IOUSBHostIsochronousTransaction](iousbhostisochronoustransaction.md)
- [IOUSBHostIsochronousTransactionOptions](iousbhostisochronoustransactionoptions.md)
- [IOUSBHostIsochronousTransferOptions](iousbhostisochronoustransferoptions.md)
