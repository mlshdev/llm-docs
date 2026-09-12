> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekparticipant](https://developer.apple.com/documentation/eventkit/ekparticipant)

# EKParticipant (Swift)

**Framework:** EventKit  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A class that represents person, group, or room invited to a calendar event.

## Declaration

```swift
class EKParticipant
```

<a id="overview"></a>

## Overview

Do not create `EKParticipant` objects directly. Instead, use the property attendees on [EKCalendarItem](ekcalendaritem.md) to return an array of `EKParticipant` objects.

EventKit cannot add participants to an event nor change participant information. Use the properties in this class to get information about a participant.

A participant can be a person, group, room, or other resource.

## Topics

### Defining Participants

- [EKParticipantRole](ekparticipantrole.md): The participant’s role for an event.
- [EKParticipantType](ekparticipanttype.md): The type of participant.
- [EKParticipantStatus](ekparticipantstatus.md): The participant’s attendance status for an event.
- [EKParticipantScheduleStatus](ekparticipantschedulestatus.md): The participant’s scheduled status.

### Accessing Participant Properties

- [isCurrentUser](ekparticipant/iscurrentuser.md): A Boolean value indicating whether this participant represents the owner of this account.
- [name](ekparticipant/name.md): The participant’s name.
- [participantRole](ekparticipant/participantrole.md): The participant’s role in the event.
- [participantStatus](ekparticipant/participantstatus.md): The participant’s attendance status.
- [participantType](ekparticipant/participanttype.md): The participant’s type.
- [url](ekparticipant/url.md): The URL representing this participant.
- [contactPredicate](ekparticipant/contactpredicate.md): A predicate to use with the Contacts framework to retrieve the corresponding contact instance.

### Finding Participant Address Book Records

- [abRecord(with:)](ekparticipant/abrecord%28with_%29.md): Returns the address book record that represents the participant.
- [abPerson(in:)](ekparticipant/abperson%28in_%29.md): Deprecated. Returns the address book record that represents the participant.
- [ABAddressBook](abaddressbook.md): Deprecated. A reference to an ABAddressBook object.
- [ABRecord](abrecord.md): Deprecated. A reference to an ABRecord object or any of its derivedopaque types.

## Relationships

### Inherits From

- [EKObject](ekobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Calendars

- [EKCalendar](ekcalendar.md): A class that represents a calendar in EventKit.

# EKParticipant (Objective-C)

**Framework:** EventKit  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A class that represents person, group, or room invited to a calendar event.

## Declaration

```objectivec
@interface EKParticipant : EKObject
```

<a id="overview"></a>

## Overview

Do not create `EKParticipant` objects directly. Instead, use the property attendees on [EKCalendarItem](ekcalendaritem.md) to return an array of `EKParticipant` objects.

EventKit cannot add participants to an event nor change participant information. Use the properties in this class to get information about a participant.

A participant can be a person, group, room, or other resource.

## Topics

### Defining Participants

- [EKParticipantRole](ekparticipantrole.md): The participant’s role for an event.
- [EKParticipantType](ekparticipanttype.md): The type of participant.
- [EKParticipantStatus](ekparticipantstatus.md): The participant’s attendance status for an event.
- [EKParticipantScheduleStatus](ekparticipantschedulestatus.md): The participant’s scheduled status.

### Accessing Participant Properties

- [currentUser](ekparticipant/iscurrentuser.md): A Boolean value indicating whether this participant represents the owner of this account.
- [name](ekparticipant/name.md): The participant’s name.
- [participantRole](ekparticipant/participantrole.md): The participant’s role in the event.
- [participantStatus](ekparticipant/participantstatus.md): The participant’s attendance status.
- [participantType](ekparticipant/participanttype.md): The participant’s type.
- [URL](ekparticipant/url.md): The URL representing this participant.
- [contactPredicate](ekparticipant/contactpredicate.md): A predicate to use with the Contacts framework to retrieve the corresponding contact instance.

### Finding Participant Address Book Records

- [ABRecordWithAddressBook:](ekparticipant/abrecord%28with_%29.md): Returns the address book record that represents the participant.
- [ABPersonInAddressBook:](ekparticipant/abperson%28in_%29.md): Deprecated. Returns the address book record that represents the participant.
- [ABAddressBookRef](abaddressbook.md): Deprecated. A reference to an ABAddressBook object.
- [ABRecordRef](abrecord.md): Deprecated. A reference to an ABRecord object or any of its derivedopaque types.

## Relationships

### Inherits From

- [EKObject](ekobject.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Calendars

- [EKCalendar](ekcalendar.md): A class that represents a calendar in EventKit.
