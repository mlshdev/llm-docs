> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekparticipant/abperson(in:)](https://developer.apple.com/documentation/eventkit/ekparticipant/abperson(in:))

# abPerson(in:) (Swift)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+ (deprecated in 10.11)

Returns the address book record that represents the participant.

> Use contactPredicate instead

## Declaration

```swift
func abPerson(in addressBook: ABAddressBook) -> ABPerson?
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

>  This instance method is only available in macOS. For iOS, see the [abRecord(with:)](abrecord%28with_%29.md) instance method.

## See Also

### Finding Participant Address Book Records

- [abRecord(with:)](abrecord%28with_%29.md): Returns the address book record that represents the participant.
- [ABAddressBook](../abaddressbook.md): Deprecated. A reference to an ABAddressBook object.
- [ABRecord](../abrecord.md): Deprecated. A reference to an ABRecord object or any of its derivedopaque types.

# ABPersonInAddressBook: (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+ (deprecated in 10.11)

Returns the address book record that represents the participant.

> Use contactPredicate instead

## Declaration

```objectivec
- (ABPerson *) ABPersonInAddressBook:(ABAddressBook *) addressBook;
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

>  This instance method is only available in macOS. For iOS, see the [ABRecordWithAddressBook:](abrecord%28with_%29.md) instance method.

## See Also

### Finding Participant Address Book Records

- [ABRecordWithAddressBook:](abrecord%28with_%29.md): Returns the address book record that represents the participant.
- [ABAddressBookRef](../abaddressbook.md): Deprecated. A reference to an ABAddressBook object.
- [ABRecordRef](../abrecord.md): Deprecated. A reference to an ABRecord object or any of its derivedopaque types.
