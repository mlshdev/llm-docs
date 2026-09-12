> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/abrecord](https://developer.apple.com/documentation/eventkit/abrecord)

# ABRecord (Swift)

**Framework:** EventKit  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

A reference to an ABRecord object or any of its derivedopaque types.

> use CNContact, CNGroup, or CNContainer

## Declaration

```swift
typealias ABRecord = CFTypeRef
```

## See Also

### Finding Participant Address Book Records

- [abRecord(with:)](ekparticipant/abrecord%28with_%29.md): Returns the address book record that represents the participant.
- [abPerson(in:)](ekparticipant/abperson%28in_%29.md): Deprecated. Returns the address book record that represents the participant.
- [ABAddressBook](abaddressbook.md): Deprecated. A reference to an ABAddressBook object.

# ABRecordRef (Objective-C)

**Framework:** EventKit  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

A reference to an ABRecord object or any of its derivedopaque types.

> use CNContact, CNGroup, or CNContainer

## Declaration

```objectivec
typedef CFTypeRef ABRecordRef;
```

## See Also

### Finding Participant Address Book Records

- [ABRecordWithAddressBook:](ekparticipant/abrecord%28with_%29.md): Returns the address book record that represents the participant.
- [ABPersonInAddressBook:](ekparticipant/abperson%28in_%29.md): Deprecated. Returns the address book record that represents the participant.
- [ABAddressBookRef](abaddressbook.md): Deprecated. A reference to an ABAddressBook object.
