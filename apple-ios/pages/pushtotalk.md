> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk](https://developer.apple.com/documentation/pushtotalk)

# Push to Talk (Swift)

**Framework:** Push to Talk  
**Kind:** Framework  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Display the system user interface for your app’s Push to Talk services.

<a id="overview"></a>

## Overview

The Push to Talk framework is a power-efficient, user-friendly, and privacy-focused API. It gives your apps the ability to provide user interface controls that allow your users to transmit audio from anywhere. It supplies an ephemeral Apple Push Notification service token so the system can wake your app in the background to handle incoming audio while a session is ongoing.

> **Note**

>  Push to Talk services aren’t available to compatible iPad and iPhone apps running in visionOS.

## Topics

### Essentials

- [Creating a Push to Talk app](pushtotalk/creating-a-push-to-talk-app.md): Build a walkie-talkie style app with system user interface controls.
- [PTChannelManager](pushtotalk/ptchannelmanager.md): An object that represents a push-to-talk channel manager.

### Channel management

- [PTChannelManagerDelegate](pushtotalk/ptchannelmanagerdelegate.md): A type that represents your life cycle of a channel manager.
- [PTTransmissionMode](pushtotalk/pttransmissionmode.md): Identifies the type of audio transmission modes.
- [PTServiceStatus](pushtotalk/ptservicestatus.md): Identifies the type that indicates the status of the service.
- [PTChannelJoinReason](pushtotalk/ptchanneljoinreason.md): Identifies the type that indicates the join reason.
- [PTChannelLeaveReason](pushtotalk/ptchannelleavereason.md): Identifies the type that indicates the leave reason.
- [PTChannelTransmitRequestSource](pushtotalk/ptchanneltransmitrequestsource.md): Identifies the type that indicates the transmission request source.

### Channel restoration

- [PTChannelDescriptor](pushtotalk/ptchanneldescriptor.md): An object that describes a channel.
- [PTChannelRestorationDelegate](pushtotalk/ptchannelrestorationdelegate.md): A type that represents the channel restoration behavior.

### Channel participants

- [PTParticipant](pushtotalk/ptparticipant.md): An object that represents a participant.

### Push notification results

- [PTPushResult](pushtotalk/ptpushresult.md): An object that represents a push result.

### Push to Talk errors

- [PTChannelError](pushtotalk/ptchannelerror-swift.struct.md): A structure that represents a channel error.
- [PTChannelError.Code](pushtotalk/ptchannelerror-swift.struct/code.md): Error codes for channel operations.
- [PTInstantiationError](pushtotalk/ptinstantiationerror-swift.struct.md): A structure that represents an instantiation error.
- [PTInstantiationError.Code](pushtotalk/ptinstantiationerror-swift.struct/code.md): Error codes for instantiation operations.
- [PTChannelErrorDomain](pushtotalk/ptchannelerrordomain.md): A string representation of the channel error domain.
- [PTInstantiationErrorDomain](pushtotalk/ptinstantiationerrordomain.md): A string representation of the instantiation error domain.

# Push to Talk (Objective-C)

**Framework:** Push to Talk  
**Kind:** Framework  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Display the system user interface for your app’s Push to Talk services.

<a id="overview"></a>

## Overview

The Push to Talk framework is a power-efficient, user-friendly, and privacy-focused API. It gives your apps the ability to provide user interface controls that allow your users to transmit audio from anywhere. It supplies an ephemeral Apple Push Notification service token so the system can wake your app in the background to handle incoming audio while a session is ongoing.

> **Note**

>  Push to Talk services aren’t available to compatible iPad and iPhone apps running in visionOS.

## Topics

### Essentials

- [Creating a Push to Talk app](pushtotalk/creating-a-push-to-talk-app.md): Build a walkie-talkie style app with system user interface controls.
- [PTChannelManager](pushtotalk/ptchannelmanager.md): An object that represents a push-to-talk channel manager.

### Channel management

- [PTChannelManagerDelegate](pushtotalk/ptchannelmanagerdelegate.md): A type that represents your life cycle of a channel manager.
- [PTTransmissionMode](pushtotalk/pttransmissionmode.md): Identifies the type of audio transmission modes.
- [PTServiceStatus](pushtotalk/ptservicestatus.md): Identifies the type that indicates the status of the service.
- [PTChannelJoinReason](pushtotalk/ptchanneljoinreason.md): Identifies the type that indicates the join reason.
- [PTChannelLeaveReason](pushtotalk/ptchannelleavereason.md): Identifies the type that indicates the leave reason.
- [PTChannelTransmitRequestSource](pushtotalk/ptchanneltransmitrequestsource.md): Identifies the type that indicates the transmission request source.

### Channel restoration

- [PTChannelDescriptor](pushtotalk/ptchanneldescriptor.md): An object that describes a channel.
- [PTChannelRestorationDelegate](pushtotalk/ptchannelrestorationdelegate.md): A type that represents the channel restoration behavior.

### Channel participants

- [PTParticipant](pushtotalk/ptparticipant.md): An object that represents a participant.

### Push notification results

- [PTPushResult](pushtotalk/ptpushresult.md): An object that represents a push result.

### Push to Talk errors

- [PTChannelError](pushtotalk/ptchannelerror-swift.struct/code.md): Error codes for channel operations.
- [PTInstantiationError](pushtotalk/ptinstantiationerror-swift.struct/code.md): Error codes for instantiation operations.
- [PTChannelErrorDomain](pushtotalk/ptchannelerrordomain.md): A string representation of the channel error domain.
- [PTInstantiationErrorDomain](pushtotalk/ptinstantiationerrordomain.md): A string representation of the instantiation error domain.

### Macros

- [PT_EXTERN](pushtotalk/pt_extern.md)
