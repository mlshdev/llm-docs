> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incallgroup](https://developer.apple.com/documentation/intents/incallgroup)

# INCallGroup (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+ · watchOS 7.3+

The details of a group call handled by your app.

## Declaration

```swift
class INCallGroup
```

<a id="overview"></a>

## Overview

An `INCallGroup` object stores details that the user contributed to your app about a group call. Use call group objects to communicate general information about group calls to SiriKit. An `INCallGroup` identifies the calls group name and unique group ID.

## Topics

### Initializers

- [init(coder:)](incallgroup/init%28coder_%29.md)
- [init(groupName:groupId:)](incallgroup/init%28groupname_groupid_%29.md): Creates a call record with the group details.

### Instance Properties

- [groupId](incallgroup/groupid.md): A unique identifier that disguishes call groups.
- [groupName](incallgroup/groupname.md): The name contributed the user to their group call.

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
- [INCallRecordFilter](incallrecordfilter.md): Filters a user specifies to redial a call.
- [INCallRecordType](incallrecordtype.md): Constants describing the type of the call.
- [INCallRecordTypeOptions](incallrecordtypeoptions.md): Constants describing the types of calls to include during a search.
- [INCallDestinationType](incalldestinationtype.md): Constants describing the destination of a call.

# INCallGroup (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+ · watchOS 7.3+

The details of a group call handled by your app.

## Declaration

```objectivec
@interface INCallGroup : NSObject
```

<a id="overview"></a>

## Overview

An `INCallGroup` object stores details that the user contributed to your app about a group call. Use call group objects to communicate general information about group calls to SiriKit. An `INCallGroup` identifies the calls group name and unique group ID.

## Topics

### Instance Properties

- [groupId](incallgroup/groupid.md): A unique identifier that disguishes call groups.
- [groupName](incallgroup/groupname.md): The name contributed the user to their group call.

### Instance Methods

- [initWithGroupName:groupId:](incallgroup/init%28groupname_groupid_%29.md): Creates a call record with the group details.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Describing a Call

- [INCallRecord](incallrecord.md): The details about a call handled by your app.
- [INCallRecordFilter](incallrecordfilter.md): Filters a user specifies to redial a call.
- [INCallRecordType](incallrecordtype.md): Constants describing the type of the call.
- [INCallRecordTypeOptions](incallrecordtypeoptions.md): Constants describing the types of calls to include during a search.
- [INCallDestinationType](incalldestinationtype.md): Constants describing the destination of a call.
