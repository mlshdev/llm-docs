> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incallrecordfilter](https://developer.apple.com/documentation/intents/incallrecordfilter)

# INCallRecordFilter (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

Filters a user specifies to redial a call.

## Declaration

```swift
class INCallRecordFilter
```

<a id="overview"></a>

## Overview

Use this method to create filters contributed by the user to redial a call. The `INCallRecordFilter` object identifies the person, type of call, and ability to make the call to initiate the user’s request.

## Topics

### Initializers

- [init(coder:)](incallrecordfilter/init%28coder_%29.md)
- [init(participants:callTypes:callCapability:)](incallrecordfilter/init%28participants_calltypes_callcapability_%29.md): Creates a filtered call record with the details about a call.

### Instance Properties

- [callCapability](incallrecordfilter/callcapability.md): An indicator of whether the call supports audio or video.
- [callTypes](incallrecordfilter/calltypes.md): The various call options that the user can requests.
- [participants](incallrecordfilter/participants.md): The recipient of the user’s call request.

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

- [INCallRecord](incallrecord.md): The details about a call handled by your app.
- [INCallGroup](incallgroup.md): The details of a group call handled by your app.
- [INCallRecordType](incallrecordtype.md): Constants describing the type of the call.
- [INCallRecordTypeOptions](incallrecordtypeoptions.md): Constants describing the types of calls to include during a search.
- [INCallDestinationType](incalldestinationtype.md): Constants describing the destination of a call.

# INCallRecordFilter (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

Filters a user specifies to redial a call.

## Declaration

```objectivec
@interface INCallRecordFilter : NSObject
```

<a id="overview"></a>

## Overview

Use this method to create filters contributed by the user to redial a call. The `INCallRecordFilter` object identifies the person, type of call, and ability to make the call to initiate the user’s request.

## Topics

### Instance Properties

- [callCapability](incallrecordfilter/callcapability.md): An indicator of whether the call supports audio or video.
- [callTypes](incallrecordfilter/calltypes.md): The various call options that the user can requests.
- [participants](incallrecordfilter/participants.md): The recipient of the user’s call request.

### Instance Methods

- [initWithParticipants:callTypes:callCapability:](incallrecordfilter/init%28participants_calltypes_callcapability_%29.md): Creates a filtered call record with the details about a call.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Describing a Call

- [INCallRecord](incallrecord.md): The details about a call handled by your app.
- [INCallGroup](incallgroup.md): The details of a group call handled by your app.
- [INCallRecordType](incallrecordtype.md): Constants describing the type of the call.
- [INCallRecordTypeOptions](incallrecordtypeoptions.md): Constants describing the types of calls to include during a search.
- [INCallDestinationType](incalldestinationtype.md): Constants describing the destination of a call.
