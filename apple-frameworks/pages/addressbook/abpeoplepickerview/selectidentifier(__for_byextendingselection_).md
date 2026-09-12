> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abpeoplepickerview/selectidentifier(_:for:byextendingselection:)](https://developer.apple.com/documentation/addressbook/abpeoplepickerview/selectidentifier(_:for:byextendingselection:))

# selectIdentifier(\_:for:byExtendingSelection:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Selects a value or a set of values in a multivalue property.

## Declaration

```swift
func selectIdentifier(_ identifier: String!, for person: ABPerson!, byExtendingSelection extend: Bool)
```

## Parameters

- `identifier`: The identifier to be selected, or to be added to the current selection.
- `person`: The person that the value to be selected is associated with.
- `extend`: [true](https://developer.apple.com/documentation/swift/true) to extend the current selection; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Selecting Groups and Records

- [allowsGroupSelection](allowsgroupselection.md): A Boolean value that specifies whether the user can select entire groups in the group column.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that specifies whether multiple groups, records, or values of multivalue properties can be selected at a time.
- [deselectAll(\_:)](deselectall%28__%29.md): Deselects all selected groups, records, and values in multivalue properties.
- [deselect(\_:)](deselect%28__%29-3x7tl.md): Deselects a group selected in the group list.
- [deselectIdentifier(\_:for:)](deselectidentifier%28__for_%29.md): Deselects a value selected in a multivalue property.
- [deselect(\_:)](deselect%28__%29-1yy11.md): Deselects a record selected in the record list.
- [selectedGroups](selectedgroups.md): The groups selected in the group list. (read-only)
- [selectedIdentifiers(for:)](selectedidentifiers%28for_%29.md): Returns the identifiers of the selected values in a multivalue property.
- [selectedRecords](selectedrecords.md): The selection in the records list. (read-only)
- [selectedValues()](selectedvalues%28%29.md): Returns an array of all the values selected in the displayed multivalue property.
- [select(\_:byExtendingSelection:)](select%28__byextendingselection_%29-6mrii.md): Selects a group or a set of groups in the group list.
- [select(\_:byExtendingSelection:)](select%28__byextendingselection_%29-9eldk.md): Selects a record or a set of records in the record list.

# selectIdentifier:forPerson:byExtendingSelection: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Selects a value or a set of values in a multivalue property.

## Declaration

```objectivec
- (void) selectIdentifier:(NSString *) identifier forPerson:(ABPerson *) person byExtendingSelection:(BOOL) extend;
```

## Parameters

- `identifier`: The identifier to be selected, or to be added to the current selection.
- `person`: The person that the value to be selected is associated with.
- `extend`: [true](https://developer.apple.com/documentation/swift/true) to extend the current selection; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Selecting Groups and Records

- [allowsGroupSelection](allowsgroupselection.md): A Boolean value that specifies whether the user can select entire groups in the group column.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that specifies whether multiple groups, records, or values of multivalue properties can be selected at a time.
- [deselectAll:](deselectall%28__%29.md): Deselects all selected groups, records, and values in multivalue properties.
- [deselectGroup:](deselect%28__%29-3x7tl.md): Deselects a group selected in the group list.
- [deselectIdentifier:forPerson:](deselectidentifier%28__for_%29.md): Deselects a value selected in a multivalue property.
- [deselectRecord:](deselect%28__%29-1yy11.md): Deselects a record selected in the record list.
- [selectedGroups](selectedgroups.md): The groups selected in the group list. (read-only)
- [selectedIdentifiersForPerson:](selectedidentifiers%28for_%29.md): Returns the identifiers of the selected values in a multivalue property.
- [selectedRecords](selectedrecords.md): The selection in the records list. (read-only)
- [selectedValues](selectedvalues%28%29.md): Returns an array of all the values selected in the displayed multivalue property.
- [selectGroup:byExtendingSelection:](select%28__byextendingselection_%29-6mrii.md): Selects a group or a set of groups in the group list.
- [selectRecord:byExtendingSelection:](select%28__byextendingselection_%29-9eldk.md): Selects a record or a set of records in the record list.
