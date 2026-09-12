> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/abdatabasechangedexternally](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/abdatabasechangedexternally)

# abDatabaseChangedExternally

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 10.0+

Posted when a process other than the current one has changed the Address Book database.

## Declaration

```swift
static let abDatabaseChangedExternally: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

Depending on the operation performed on the address book, one or more of the following keys may be included in the user-info dictionary: `kABInsertedRecords`, `kABUpdatedRecords`, and `kABDeletedRecords`. The values for each of the keys are the unique IDs of the records that were inserted, updated, or deleted, respectively. If the values for all the keys are `nil`, every record has changes. For example, this happens when the Address Book database  is restored from a backup copy.

> **Note**

>  The system posts this notification on the main actor.

## See Also

### AddressBook

- [abDatabaseChanged](abdatabasechanged.md): Posted when this process has changed the Address Book database.
- [ABPeoplePickerDisplayedPropertyDidChange](abpeoplepickerdisplayedpropertydidchange.md): Posted when the displayed property in the record list is changed.
- [ABPeoplePickerGroupSelectionDidChange](abpeoplepickergroupselectiondidchange.md): Posted when the selection in the group list is changed.
- [ABPeoplePickerNameSelectionDidChange](abpeoplepickernameselectiondidchange.md): Posted when the selection in the name list is changed.
- [ABPeoplePickerValueSelectionDidChange](abpeoplepickervalueselectiondidchange.md): Posted when the selection in a multivalue property is changed.
