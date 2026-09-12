> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/abaddressbook](https://developer.apple.com/documentation/eventkit/abaddressbook)

# ABAddressBook (Swift)

**Framework:** EventKit  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

A reference to an ABAddressBook object.

> use CNContactStore

## Declaration

```swift
typealias ABAddressBook = CFTypeRef
```

## See Also

### Finding Participant Address Book Records

- [abRecord(with:)](ekparticipant/abrecord%28with_%29.md): Returns the address book record that represents the participant.
- [abPerson(in:)](ekparticipant/abperson%28in_%29.md): Deprecated. Returns the address book record that represents the participant.
- [ABRecord](abrecord.md): Deprecated. A reference to an ABRecord object or any of its derivedopaque types.

# ABAddressBookRef (Objective-C)

**Framework:** EventKit  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

A reference to an ABAddressBook object.

> use CNContactStore

## Declaration

```objectivec
typedef CFTypeRef ABAddressBookRef;
```

## See Also

### Finding Participant Address Book Records

- [ABRecordWithAddressBook:](ekparticipant/abrecord%28with_%29.md): Returns the address book record that represents the participant.
- [ABPersonInAddressBook:](ekparticipant/abperson%28in_%29.md): Deprecated. Returns the address book record that represents the participant.
- [ABRecordRef](abrecord.md): Deprecated. A reference to an ABRecord object or any of its derivedopaque types.
