> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incallrecord](https://developer.apple.com/documentation/intents/incallrecord)

# INCallRecord (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

The details about a call handled by your app.

## Declaration

```swift
class INCallRecord
```

<a id="overview"></a>

## Overview

An `INCallRecord` object stores details about calls made by the user through your app. You use call record objects to communicate basic information about calls to SiriKit. A call record identifies the type of call, the duration of the call, the date and time of the call, and the person on the other end of the call. You create call record objects when reporting search results back to SiriKit and when identifying voicemails to play.

## Topics

### Initializing a Call Record

- [init(identifier:dateCreated:caller:callRecordType:callCapability:callDuration:unseen:numberOfCalls:)](incallrecord/init%28identifier_datecreated_caller_callrecordtype_callcapability_callduration_unseen_numberofcalls_%29.md): Creates a call record with the details about the call.

### Identifying the Call

- [identifier](incallrecord/identifier.md): A unique string that you can use to locate the call in your app.

### Identifying the Caller

- [caller](incallrecord/caller.md): Deprecated. The person who participated in the call with the current user.

### Getting the Call Details

- [callRecordType](incallrecord/callrecordtype.md): The type of call that resulted from the attempt.
- [callCapability](incallrecord/callcapability.md): The audio and video capabilities of the call.
- [INCallCapability](incallcapability.md): Constants indicating the capabilities of the call.
- [dateCreated](incallrecord/datecreated.md): The date and time at which the call was initiated.
- [callDuration](incallrecord/callduration-47iud.md): The duration (measured in seconds) of the call.
- [unseen](incallrecord/unseen-2m7sz.md): A Boolean value indicating whether the user has seen the call.
- [numberOfCalls](incallrecord/numberofcalls-r8kl.md): The number of calls in the call record.
- [participants](incallrecord/participants.md): The recipient of the user’s call request.

### Initializers

- [init(coder:)](incallrecord/init%28coder_%29.md)

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
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Describing a Call

- [INCallGroup](incallgroup.md): The details of a group call handled by your app.
- [INCallRecordFilter](incallrecordfilter.md): Filters a user specifies to redial a call.
- [INCallRecordType](incallrecordtype.md): Constants describing the type of the call.
- [INCallRecordTypeOptions](incallrecordtypeoptions.md): Constants describing the types of calls to include during a search.
- [INCallDestinationType](incalldestinationtype.md): Constants describing the destination of a call.

# INCallRecord (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

The details about a call handled by your app.

## Declaration

```objectivec
@interface INCallRecord : NSObject
```

<a id="overview"></a>

## Overview

An `INCallRecord` object stores details about calls made by the user through your app. You use call record objects to communicate basic information about calls to SiriKit. A call record identifies the type of call, the duration of the call, the date and time of the call, and the person on the other end of the call. You create call record objects when reporting search results back to SiriKit and when identifying voicemails to play.

## Topics

### Initializing a Call Record

- [initWithIdentifier:dateCreated:caller:callRecordType:callCapability:callDuration:unseen:numberOfCalls:](https://developer.apple.com/documentation/intents/incallrecord/initwithidentifier:datecreated:caller:callrecordtype:callcapability:callduration:unseen:numberofcalls:): Deprecated. Initializes a call record with the details about the call.
- [initWithIdentifier:dateCreated:caller:callRecordType:callCapability:callDuration:unseen:](https://developer.apple.com/documentation/intents/incallrecord/initwithidentifier:datecreated:caller:callrecordtype:callcapability:callduration:unseen:): Deprecated. Initializes a call record with the details about the call.
- [initWithIdentifier:dateCreated:callRecordType:callCapability:callDuration:unseen:](https://developer.apple.com/documentation/intents/incallrecord/initwithidentifier:datecreated:callrecordtype:callcapability:callduration:unseen:): Creates a call record with the details about the call.
- [initWithIdentifier:dateCreated:callRecordType:callCapability:callDuration:unseen:numberOfCalls:](https://developer.apple.com/documentation/intents/incallrecord/initwithidentifier:datecreated:callrecordtype:callcapability:callduration:unseen:numberofcalls:): Creates a call record with the details about the call.
- [initWithIdentifier:dateCreated:callRecordType:callCapability:callDuration:unseen:participants:numberOfCalls:isCallerIdBlocked:](https://developer.apple.com/documentation/intents/incallrecord/initwithidentifier:datecreated:callrecordtype:callcapability:callduration:unseen:participants:numberofcalls:iscalleridblocked:): Creates a call record with the details about the call.

### Identifying the Call

- [identifier](incallrecord/identifier.md): A unique string that you can use to locate the call in your app.

### Identifying the Caller

- [caller](incallrecord/caller.md): Deprecated. The person who participated in the call with the current user.

### Getting the Call Details

- [callRecordType](incallrecord/callrecordtype.md): The type of call that resulted from the attempt.
- [callCapability](incallrecord/callcapability.md): The audio and video capabilities of the call.
- [INCallCapability](incallcapability.md): Constants indicating the capabilities of the call.
- [dateCreated](incallrecord/datecreated.md): The date and time at which the call was initiated.
- [callDuration](https://developer.apple.com/documentation/intents/incallrecord/callduration-2d9u1): The duration (measured in seconds) of the call.
- [unseen](https://developer.apple.com/documentation/intents/incallrecord/unseen-8qab3): A Boolean value indicating whether the user has seen the call.
- [numberOfCalls](https://developer.apple.com/documentation/intents/incallrecord/numberofcalls-7vv6o): The number of calls in the call record.
- [participants](incallrecord/participants.md): The recipient of the user’s call request.
- [isCallerIdBlocked](https://developer.apple.com/documentation/intents/incallrecord/iscalleridblocked): A Boolean value indicating if user’s callerID is showing during a call.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Describing a Call

- [INCallGroup](incallgroup.md): The details of a group call handled by your app.
- [INCallRecordFilter](incallrecordfilter.md): Filters a user specifies to redial a call.
- [INCallRecordType](incallrecordtype.md): Constants describing the type of the call.
- [INCallRecordTypeOptions](incallrecordtypeoptions.md): Constants describing the types of calls to include during a search.
- [INCallDestinationType](incalldestinationtype.md): Constants describing the destination of a call.
