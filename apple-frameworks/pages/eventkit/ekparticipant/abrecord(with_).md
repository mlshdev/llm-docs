> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekparticipant/abrecord(with:)](https://developer.apple.com/documentation/eventkit/ekparticipant/abrecord(with:))

# abRecord(with:) (Swift)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+

Returns the address book record that represents the participant.

## Declaration

```swift
func abRecord(with addressBook: ABAddressBook) -> ABRecord?
```

## Parameters

- `addressBook`: The address book to search.

<a id="return-value"></a>

## Return Value

The address book record for the participant, or `nil` if the record is not found.

<a id="Discussion"></a>

## Discussion

This method searches for a record match based on the participant’s email address.

<a id="Special-Considerations"></a>

### Special Considerations

> **Note**

>  This instance method is only available on iOS. For macOS, see the [abPerson(in:)](abperson%28in_%29.md) instance method.

## See Also

### Finding Participant Address Book Records

- [abPerson(in:)](abperson%28in_%29.md): Deprecated. Returns the address book record that represents the participant.
- [ABAddressBook](../abaddressbook.md): Deprecated. A reference to an ABAddressBook object.
- [ABRecord](../abrecord.md): Deprecated. A reference to an ABRecord object or any of its derivedopaque types.

# ABRecordWithAddressBook: (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+

Returns the address book record that represents the participant.

## Declaration

```objectivec
- (ABRecordRef) ABRecordWithAddressBook:(ABAddressBookRef) addressBook;
```

## Parameters

- `addressBook`: The address book to search.

<a id="return-value"></a>

## Return Value

The address book record for the participant, or `nil` if the record is not found.

<a id="Discussion"></a>

## Discussion

This method searches for a record match based on the participant’s email address.

<a id="Special-Considerations"></a>

### Special Considerations

> **Note**

>  This instance method is only available on iOS. For macOS, see the [ABPersonInAddressBook:](abperson%28in_%29.md) instance method.

## See Also

### Finding Participant Address Book Records

- [ABPersonInAddressBook:](abperson%28in_%29.md): Deprecated. Returns the address book record that represents the participant.
- [ABAddressBookRef](../abaddressbook.md): Deprecated. A reference to an ABAddressBook object.
- [ABRecordRef](../abrecord.md): Deprecated. A reference to an ABRecord object or any of its derivedopaque types.
