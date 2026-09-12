> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abpeoplepickerview/selectedidentifiers(for:)](https://developer.apple.com/documentation/addressbook/abpeoplepickerview/selectedidentifiers(for:))

# selectedIdentifiers(for:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Returns the identifiers of the selected values in a multivalue property.

## Declaration

```swift
func selectedIdentifiers(for person: ABPerson!) -> [Any]!
```

## Parameters

- `person`: The person whose identifiers for selected values will be returned.

<a id="Discussion"></a>

## Discussion

Returns `nil` if the property displayed is a single-value property, or if the selected value is not a property of `person`.

The [selectedRecords](selectedrecords.md) property returns all of the person records that were unified to display the selected records, which can require some extra care in passing the correct person record.

## See Also

### Selecting Groups and Records

- [allowsGroupSelection](allowsgroupselection.md): A Boolean value that specifies whether the user can select entire groups in the group column.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that specifies whether multiple groups, records, or values of multivalue properties can be selected at a time.
- [deselectAll(\_:)](deselectall%28__%29.md): Deselects all selected groups, records, and values in multivalue properties.
- [deselect(\_:)](deselect%28__%29-3x7tl.md): Deselects a group selected in the group list.
- [deselectIdentifier(\_:for:)](deselectidentifier%28__for_%29.md): Deselects a value selected in a multivalue property.
- [deselect(\_:)](deselect%28__%29-1yy11.md): Deselects a record selected in the record list.
- [selectedGroups](selectedgroups.md): The groups selected in the group list. (read-only)
- [selectedRecords](selectedrecords.md): The selection in the records list. (read-only)
- [selectedValues()](selectedvalues%28%29.md): Returns an array of all the values selected in the displayed multivalue property.
- [select(\_:byExtendingSelection:)](select%28__byextendingselection_%29-6mrii.md): Selects a group or a set of groups in the group list.
- [selectIdentifier(\_:for:byExtendingSelection:)](selectidentifier%28__for_byextendingselection_%29.md): Selects a value or a set of values in a multivalue property.
- [select(\_:byExtendingSelection:)](select%28__byextendingselection_%29-9eldk.md): Selects a record or a set of records in the record list.

# selectedIdentifiersForPerson: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Returns the identifiers of the selected values in a multivalue property.

## Declaration

```objectivec
- (NSArray *) selectedIdentifiersForPerson:(ABPerson *) person;
```

## Parameters

- `person`: The person whose identifiers for selected values will be returned.

<a id="Discussion"></a>

## Discussion

Returns `nil` if the property displayed is a single-value property, or if the selected value is not a property of `person`.

The [selectedRecords](selectedrecords.md) property returns all of the person records that were unified to display the selected records, which can require some extra care in passing the correct person record.

## See Also

### Selecting Groups and Records

- [allowsGroupSelection](allowsgroupselection.md): A Boolean value that specifies whether the user can select entire groups in the group column.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean value that specifies whether multiple groups, records, or values of multivalue properties can be selected at a time.
- [deselectAll:](deselectall%28__%29.md): Deselects all selected groups, records, and values in multivalue properties.
- [deselectGroup:](deselect%28__%29-3x7tl.md): Deselects a group selected in the group list.
- [deselectIdentifier:forPerson:](deselectidentifier%28__for_%29.md): Deselects a value selected in a multivalue property.
- [deselectRecord:](deselect%28__%29-1yy11.md): Deselects a record selected in the record list.
- [selectedGroups](selectedgroups.md): The groups selected in the group list. (read-only)
- [selectedRecords](selectedrecords.md): The selection in the records list. (read-only)
- [selectedValues](selectedvalues%28%29.md): Returns an array of all the values selected in the displayed multivalue property.
- [selectGroup:byExtendingSelection:](select%28__byextendingselection_%29-6mrii.md): Selects a group or a set of groups in the group list.
- [selectIdentifier:forPerson:byExtendingSelection:](selectidentifier%28__for_byextendingselection_%29.md): Selects a value or a set of values in a multivalue property.
- [selectRecord:byExtendingSelection:](select%28__byextendingselection_%29-9eldk.md): Selects a record or a set of records in the record list.
