> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit](https://developer.apple.com/documentation/callkit)

# CallKit (Swift)

**Framework:** CallKit  
**Kind:** Framework  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Display the system-calling UI for your app’s VoIP services, and coordinate your calling services with other apps and the system.

## Mentioned In

- [Sending End-to-End Encrypted VoIP Calls](callkit/sending-end-to-end-encrypted-voip-calls.md)
- [Preparing your app to be the default calling app](callkit/preparing-your-app-to-be-the-default-calling-app.md)

<a id="overview"></a>

## Overview

Use CallKit to integrate your calling services with other call-related apps in the system. CallKit provides the calling interface, and you handle the back-end communication with your VoIP service. See [Making and receiving VoIP calls](callkit/making-and-receiving-voip-calls.md) for more information.

For incoming and outgoing calls, CallKit displays the same interfaces as the Phone app, giving your app a more native look and feel. CallKit also responds appropriately to system-level behaviors, such as Do Not Disturb.

In addition to handling calls, you can use a Call Directory app extension to provide caller ID information and a list of blocked numbers associated with your service. See [Identifying and blocking calls](callkit/identifying-and-blocking-calls.md) for more information.

<a id="Manage-user-privacy"></a>

### Manage user privacy

With a person’s permission, an installed health research app that uses [SensorKit](https://developer.apple.com/documentation/sensorkit) entitlements may collect Speech Metrics data while your CallKit app is in use. To prevent this, you can set the [SRResearchDataGeneration](bundleresources/information-property-list/srresearchdatageneration.md) information property list key to `NO`.

> **Important**

>  When a person makes a call in your app that uses CallKit, your app provides the contact information of the recipient to the system. The system may use that information to indicate communication with that person as a suggestion in the Journal app, or in other apps that use the [Journaling Suggestions](https://developer.apple.com/documentation/journalingsuggestions) framework.

<a id="Become-the-default-calling-app"></a>

### Become the default calling app

In iOS and iPadOS 18.2 and later, a person may select an app — other than the Phone app or FaceTime — to place calls by default. To make your CallKit or [LiveCommunicationKit](livecommunicationkit.md) app support the default calling app setting, see [Preparing your app to be the default calling app](callkit/preparing-your-app-to-be-the-default-calling-app.md).

## Topics

### Essentials

Call-related actions route through your provider and its delegate, which you use to communicate with your service.

- [CXProvider](callkit/cxprovider.md): An object that represents a telephony provider.
- [CXProviderDelegate](callkit/cxproviderdelegate.md): A collection of methods that a telephony provider object calls.
- [CXProviderConfiguration](callkit/cxproviderconfiguration.md): An encapsulation of the configuration of a provider object.
- [Making and receiving VoIP calls](callkit/making-and-receiving-voip-calls.md): Initiate outgoing calls with VoIP and configure your app to receive incoming calls.
- [VoIP calling with CallKit](callkit/voip-calling-with-callkit.md): Use the CallKit framework to integrate native VoIP calling.
- [Preparing your app to be the default calling app](callkit/preparing-your-app-to-be-the-default-calling-app.md): Configure your CallKit or LiveCommunicationKit app so people can set it as the default calling app on their device.
- [CallKit updates](https://developer.apple.com/documentation/updates/callkit): Learn about important changes to CallKit.

### Incoming calls

When a PushKit notification indicates an incoming call, you generate an appropriate action. CallKit handles the action by presenting the system interface for answering the call.

- [Responding to VoIP Notifications from PushKit](pushkit/responding-to-voip-notifications-from-pushkit.md): Receive incoming Voice-over-IP (VoIP) push notifications and use them to display the system call interface to the user.
- [CXCallUpdate](callkit/cxcallupdate.md): An encapsulation of new and changed information about a call.
- [CXAnswerCallAction](callkit/cxanswercallaction.md): An encapsulation of the act of answering an incoming call.

### Outgoing calls

Start outgoing calls with a call controller, and handle subsequent interactions with your provider delegate.

- [Sending End-to-End Encrypted VoIP Calls](callkit/sending-end-to-end-encrypted-voip-calls.md): Initiate VoIP calls when your server can’t determine whether an outgoing notification is a request for a VoIP call due to metadata encryption.
- [CXCallController](callkit/cxcallcontroller.md): A programmatic interface for interacting with and observing calls.
- [CXTransaction](callkit/cxtransaction.md): An object that contains zero or more action objects for a call controller to perform.
- [CXStartCallAction](callkit/cxstartcallaction.md): An encapsulation of the act of initiating an outgoing call.

### Call-related actions

Respond to reported actions.

- [CXAction](callkit/cxaction.md): An abstract class that declares a programmatic interface for objects that represent a telephony action.
- [CXCallAction](callkit/cxcallaction.md): A programmatic interface for objects that represent a telephony action associated with a call object.
- [CXEndCallAction](callkit/cxendcallaction.md): An encapsulation of the act of ending a call.
- [CXPlayDTMFCallAction](callkit/cxplaydtmfcallaction.md): An encapsulation of the act of playing a dual tone multifrequency (DTMF) sequence.
- [CXSetGroupCallAction](callkit/cxsetgroupcallaction.md): An encapsulation of the act of grouping or ungrouping calls.
- [CXSetHeldCallAction](callkit/cxsetheldcallaction.md): An encapsulation of the act of placing a call on hold or removing a call from hold.
- [CXSetMutedCallAction](callkit/cxsetmutedcallaction.md): An encapsulation of the act of muting or unmuting a call.
- [CXSetTranslatingCallAction](callkit/cxsettranslatingcallaction.md): An encapsulation of the act of translating a call.

### Call information

Get information about calls, and receive notifications when the status of a call changes.

- [CXCall](callkit/cxcall.md): A telephony call.
- [CXCallObserver](callkit/cxcallobserver.md): A programmatic interface for an object that manages a list of active calls and observes call changes.
- [CXCallObserverDelegate](callkit/cxcallobserverdelegate.md): A collection of methods the system calls when a call changes state.
- [CXHandle](callkit/cxhandle.md): A way to reach a call recipient, such as a phone number or email address.

### Caller ID

Use a Call Directory app extension to block calls and provide caller ID information.

- [Identifying and blocking calls](callkit/identifying-and-blocking-calls.md): Create a Call Directory app extension to identify and block incoming callers by their phone number.
- [CXCallDirectoryProvider](callkit/cxcalldirectoryprovider.md): The principal object for a Call Directory app extension for a host app.
- [CXCallDirectoryExtensionContext](callkit/cxcalldirectoryextensioncontext.md): A programmatic interface for adding identification and blocking entries to a Call Directory app extension.
- [CXCallDirectoryExtensionContextDelegate](callkit/cxcalldirectoryextensioncontextdelegate.md): A collection of methods a Call Directory extension context object calls when a request fails.
- [CXCallDirectoryManager](callkit/cxcalldirectorymanager.md): The programmatic interface to an object that manages a Call Directory app extension.

### Reference

- [CallKit Enumerations](callkit/callkit-enumerations.md)
- [CallKit Constants](callkit/callkit-constants.md)

# CallKit (Objective-C)

**Framework:** CallKit  
**Kind:** Framework  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Display the system-calling UI for your app’s VoIP services, and coordinate your calling services with other apps and the system.

## Mentioned In

- [Sending End-to-End Encrypted VoIP Calls](callkit/sending-end-to-end-encrypted-voip-calls.md)
- [Preparing your app to be the default calling app](callkit/preparing-your-app-to-be-the-default-calling-app.md)

<a id="overview"></a>

## Overview

Use CallKit to integrate your calling services with other call-related apps in the system. CallKit provides the calling interface, and you handle the back-end communication with your VoIP service. See [Making and receiving VoIP calls](callkit/making-and-receiving-voip-calls.md) for more information.

For incoming and outgoing calls, CallKit displays the same interfaces as the Phone app, giving your app a more native look and feel. CallKit also responds appropriately to system-level behaviors, such as Do Not Disturb.

In addition to handling calls, you can use a Call Directory app extension to provide caller ID information and a list of blocked numbers associated with your service. See [Identifying and blocking calls](callkit/identifying-and-blocking-calls.md) for more information.

<a id="Manage-user-privacy"></a>

### Manage user privacy

With a person’s permission, an installed health research app that uses [SensorKit](https://developer.apple.com/documentation/sensorkit) entitlements may collect Speech Metrics data while your CallKit app is in use. To prevent this, you can set the [SRResearchDataGeneration](bundleresources/information-property-list/srresearchdatageneration.md) information property list key to `NO`.

> **Important**

>  When a person makes a call in your app that uses CallKit, your app provides the contact information of the recipient to the system. The system may use that information to indicate communication with that person as a suggestion in the Journal app, or in other apps that use the [Journaling Suggestions](https://developer.apple.com/documentation/journalingsuggestions) framework.

<a id="Become-the-default-calling-app"></a>

### Become the default calling app

In iOS and iPadOS 18.2 and later, a person may select an app — other than the Phone app or FaceTime — to place calls by default. To make your CallKit or [LiveCommunicationKit](livecommunicationkit.md) app support the default calling app setting, see [Preparing your app to be the default calling app](callkit/preparing-your-app-to-be-the-default-calling-app.md).

## Topics

### Essentials

Call-related actions route through your provider and its delegate, which you use to communicate with your service.

- [CXProvider](callkit/cxprovider.md): An object that represents a telephony provider.
- [CXProviderDelegate](callkit/cxproviderdelegate.md): A collection of methods that a telephony provider object calls.
- [CXProviderConfiguration](callkit/cxproviderconfiguration.md): An encapsulation of the configuration of a provider object.
- [Making and receiving VoIP calls](callkit/making-and-receiving-voip-calls.md): Initiate outgoing calls with VoIP and configure your app to receive incoming calls.
- [Preparing your app to be the default calling app](callkit/preparing-your-app-to-be-the-default-calling-app.md): Configure your CallKit or LiveCommunicationKit app so people can set it as the default calling app on their device.
- [CallKit updates](https://developer.apple.com/documentation/updates/callkit): Learn about important changes to CallKit.

### Incoming calls

When a PushKit notification indicates an incoming call, you generate an appropriate action. CallKit handles the action by presenting the system interface for answering the call.

- [Responding to VoIP Notifications from PushKit](pushkit/responding-to-voip-notifications-from-pushkit.md): Receive incoming Voice-over-IP (VoIP) push notifications and use them to display the system call interface to the user.
- [CXCallUpdate](callkit/cxcallupdate.md): An encapsulation of new and changed information about a call.
- [CXAnswerCallAction](callkit/cxanswercallaction.md): An encapsulation of the act of answering an incoming call.

### Outgoing calls

Start outgoing calls with a call controller, and handle subsequent interactions with your provider delegate.

- [Sending End-to-End Encrypted VoIP Calls](callkit/sending-end-to-end-encrypted-voip-calls.md): Initiate VoIP calls when your server can’t determine whether an outgoing notification is a request for a VoIP call due to metadata encryption.
- [CXCallController](callkit/cxcallcontroller.md): A programmatic interface for interacting with and observing calls.
- [CXTransaction](callkit/cxtransaction.md): An object that contains zero or more action objects for a call controller to perform.
- [CXStartCallAction](callkit/cxstartcallaction.md): An encapsulation of the act of initiating an outgoing call.

### Call-related actions

Respond to reported actions.

- [CXAction](callkit/cxaction.md): An abstract class that declares a programmatic interface for objects that represent a telephony action.
- [CXCallAction](callkit/cxcallaction.md): A programmatic interface for objects that represent a telephony action associated with a call object.
- [CXEndCallAction](callkit/cxendcallaction.md): An encapsulation of the act of ending a call.
- [CXPlayDTMFCallAction](callkit/cxplaydtmfcallaction.md): An encapsulation of the act of playing a dual tone multifrequency (DTMF) sequence.
- [CXSetGroupCallAction](callkit/cxsetgroupcallaction.md): An encapsulation of the act of grouping or ungrouping calls.
- [CXSetHeldCallAction](callkit/cxsetheldcallaction.md): An encapsulation of the act of placing a call on hold or removing a call from hold.
- [CXSetMutedCallAction](callkit/cxsetmutedcallaction.md): An encapsulation of the act of muting or unmuting a call.
- [CXSetTranslatingCallAction](callkit/cxsettranslatingcallaction.md): An encapsulation of the act of translating a call.

### Call information

Get information about calls, and receive notifications when the status of a call changes.

- [CXCall](callkit/cxcall.md): A telephony call.
- [CXCallObserver](callkit/cxcallobserver.md): A programmatic interface for an object that manages a list of active calls and observes call changes.
- [CXCallObserverDelegate](callkit/cxcallobserverdelegate.md): A collection of methods the system calls when a call changes state.
- [CXHandle](callkit/cxhandle.md): A way to reach a call recipient, such as a phone number or email address.

### Caller ID

Use a Call Directory app extension to block calls and provide caller ID information.

- [Identifying and blocking calls](callkit/identifying-and-blocking-calls.md): Create a Call Directory app extension to identify and block incoming callers by their phone number.
- [CXCallDirectoryProvider](callkit/cxcalldirectoryprovider.md): The principal object for a Call Directory app extension for a host app.
- [CXCallDirectoryExtensionContext](callkit/cxcalldirectoryextensioncontext.md): A programmatic interface for adding identification and blocking entries to a Call Directory app extension.
- [CXCallDirectoryExtensionContextDelegate](callkit/cxcalldirectoryextensioncontextdelegate.md): A collection of methods a Call Directory extension context object calls when a request fails.
- [CXCallDirectoryManager](callkit/cxcalldirectorymanager.md): The programmatic interface to an object that manages a Call Directory app extension.

### Reference

- [CallKit Enumerations](callkit/callkit-enumerations.md)
- [CallKit Constants](callkit/callkit-constants.md)
