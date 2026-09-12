> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcallupdate](https://developer.apple.com/documentation/callkit/cxcallupdate)

# CXCallUpdate (Swift)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

An encapsulation of new and changed information about a call.

## Declaration

```swift
class CXCallUpdate
```

## Mentioned In

- [Making and receiving VoIP calls](making-and-receiving-voip-calls.md)

<a id="overview"></a>

## Overview

[CXCallUpdate](cxcallupdate.md) objects are used by the system to communicate changes to calls over time. Not every property on a [CXCallUpdate](cxcallupdate.md) object must be set each time, as each object includes only new and changed information. For example, when a call is started, only some properties may be known and included in the first [CXCallUpdate](cxcallupdate.md) object sent to the system, such as [localizedCallerName](cxcallupdate/localizedcallername.md). Later in the same call, other properties may change; for example, a call may be upgraded from audio only to audio and video, which would be reflected by a new [CXCallUpdate](cxcallupdate.md) object with its [hasVideo](cxcallupdate/hasvideo.md) property set to [true](https://developer.apple.com/documentation/swift/true).

When an incoming call is received, you construct a [CXCallUpdate](cxcallupdate.md) object specifying a [localizedCallerName](cxcallupdate/localizedcallername.md) and pass that to the [reportNewIncomingCall(with:update:completion:)](cxprovider/reportnewincomingcall%28with_update_completion_%29.md) method to notify the telephony provider.

When an active call is updated, you construct a [CXCallUpdate](cxcallupdate.md) object specifying any updated information and pass that to the [reportCall(with:updated:)](cxprovider/reportcall%28with_updated_%29.md) method. For example, if a user changes their contact information during a call, you could notify the telephony provider of this change using a new [CXCallUpdate](cxcallupdate.md) object with the new value set to its [remoteHandle](cxcallupdate/remotehandle.md) property.

## Topics

### Accessing Call Update Attributes

- [localizedCallerName](cxcallupdate/localizedcallername.md): The localized name of the caller.
- [remoteHandle](cxcallupdate/remotehandle.md): The handle for the remote party (for an incoming call, this is the caller; for an outgoing call, this is the callee).
- [hasVideo](cxcallupdate/hasvideo.md): A Boolean value that indicates whether the call includes video in addition to audio.
- [supportsGrouping](cxcallupdate/supportsgrouping.md): A Boolean value that indicates whether the call can be grouped with other calls.
- [supportsUngrouping](cxcallupdate/supportsungrouping.md): A Boolean value that indicates whether the call can be ungrouped from other calls.
- [supportsHolding](cxcallupdate/supportsholding.md): A Boolean value that indicates whether the call can be placed on hold or removed from hold.
- [supportsDTMF](cxcallupdate/supportsdtmf.md): A Boolean value that indicates whether the call can send DTMF (dual tone multifrequency) tones via hard pause digits or in-call keypad entries.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Incoming calls

- [Responding to VoIP Notifications from PushKit](../pushkit/responding-to-voip-notifications-from-pushkit.md): Receive incoming Voice-over-IP (VoIP) push notifications and use them to display the system call interface to the user.
- [CXAnswerCallAction](cxanswercallaction.md): An encapsulation of the act of answering an incoming call.

# CXCallUpdate (Objective-C)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

An encapsulation of new and changed information about a call.

## Declaration

```objectivec
@interface CXCallUpdate : NSObject
```

## Mentioned In

- [Making and receiving VoIP calls](making-and-receiving-voip-calls.md)

<a id="overview"></a>

## Overview

[CXCallUpdate](cxcallupdate.md) objects are used by the system to communicate changes to calls over time. Not every property on a [CXCallUpdate](cxcallupdate.md) object must be set each time, as each object includes only new and changed information. For example, when a call is started, only some properties may be known and included in the first [CXCallUpdate](cxcallupdate.md) object sent to the system, such as [localizedCallerName](cxcallupdate/localizedcallername.md). Later in the same call, other properties may change; for example, a call may be upgraded from audio only to audio and video, which would be reflected by a new [CXCallUpdate](cxcallupdate.md) object with its [hasVideo](cxcallupdate/hasvideo.md) property set to [true](https://developer.apple.com/documentation/swift/true).

When an incoming call is received, you construct a [CXCallUpdate](cxcallupdate.md) object specifying a [localizedCallerName](cxcallupdate/localizedcallername.md) and pass that to the [reportNewIncomingCallWithUUID:update:completion:](cxprovider/reportnewincomingcall%28with_update_completion_%29.md) method to notify the telephony provider.

When an active call is updated, you construct a [CXCallUpdate](cxcallupdate.md) object specifying any updated information and pass that to the [reportCallWithUUID:updated:](cxprovider/reportcall%28with_updated_%29.md) method. For example, if a user changes their contact information during a call, you could notify the telephony provider of this change using a new [CXCallUpdate](cxcallupdate.md) object with the new value set to its [remoteHandle](cxcallupdate/remotehandle.md) property.

## Topics

### Accessing Call Update Attributes

- [localizedCallerName](cxcallupdate/localizedcallername.md): The localized name of the caller.
- [remoteHandle](cxcallupdate/remotehandle.md): The handle for the remote party (for an incoming call, this is the caller; for an outgoing call, this is the callee).
- [hasVideo](cxcallupdate/hasvideo.md): A Boolean value that indicates whether the call includes video in addition to audio.
- [supportsGrouping](cxcallupdate/supportsgrouping.md): A Boolean value that indicates whether the call can be grouped with other calls.
- [supportsUngrouping](cxcallupdate/supportsungrouping.md): A Boolean value that indicates whether the call can be ungrouped from other calls.
- [supportsHolding](cxcallupdate/supportsholding.md): A Boolean value that indicates whether the call can be placed on hold or removed from hold.
- [supportsDTMF](cxcallupdate/supportsdtmf.md): A Boolean value that indicates whether the call can send DTMF (dual tone multifrequency) tones via hard pause digits or in-call keypad entries.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Incoming calls

- [Responding to VoIP Notifications from PushKit](../pushkit/responding-to-voip-notifications-from-pushkit.md): Receive incoming Voice-over-IP (VoIP) push notifications and use them to display the system call interface to the user.
- [CXAnswerCallAction](cxanswercallaction.md): An encapsulation of the act of answering an incoming call.
