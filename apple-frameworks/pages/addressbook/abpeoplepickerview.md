> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abpeoplepickerview](https://developer.apple.com/documentation/addressbook/abpeoplepickerview)

# ABPeoplePickerView (Swift)

**Framework:** Address Book  
**Kind:** Class  
**Availability:** macOS 10.3+

An object you use to customize the behavior of people-picker views in an app’s user interface.

## Declaration

```swift
class ABPeoplePickerView
```

## Topics

### Working with Properties in the Record List

- [addProperty(\_:)](abpeoplepickerview/addproperty%28__%29.md): Adds a property to the group of properties whose values are shown in the record list.
- [columnTitle(forProperty:)](abpeoplepickerview/columntitle%28forproperty_%29.md): Returns the title of a custom property.
- [displayedProperty](abpeoplepickerview/displayedproperty.md): The property currently displayed in the record list.
- [properties()](abpeoplepickerview/properties%28%29.md): Returns an array of the properties whose values are shown in the record list.
- [removeProperty(\_:)](abpeoplepickerview/removeproperty%28__%29.md): Removes a property from the group of properties whose values are shown in the record list.
- [setColumnTitle(\_:forProperty:)](abpeoplepickerview/setcolumntitle%28__forproperty_%29.md): Sets the title displayed in the people picker for a property.

### Specifying Selection Behavior

- [valueSelectionBehavior](abpeoplepickerview/valueselectionbehavior.md): The current selection behavior.
- [ABPeoplePickerSelectionBehavior](abpeoplepickerselectionbehavior.md): Constants indicating the possible value selection behaviors.

### Selecting Groups and Records

- [allowsGroupSelection](abpeoplepickerview/allowsgroupselection.md): A Boolean value that specifies whether the user can select entire groups in the group column.
- [allowsMultipleSelection](abpeoplepickerview/allowsmultipleselection.md): A Boolean value that specifies whether multiple groups, records, or values of multivalue properties can be selected at a time.
- [deselectAll(\_:)](abpeoplepickerview/deselectall%28__%29.md): Deselects all selected groups, records, and values in multivalue properties.
- [deselect(\_:)](abpeoplepickerview/deselect%28__%29-3x7tl.md): Deselects a group selected in the group list.
- [deselectIdentifier(\_:for:)](abpeoplepickerview/deselectidentifier%28__for_%29.md): Deselects a value selected in a multivalue property.
- [deselect(\_:)](abpeoplepickerview/deselect%28__%29-1yy11.md): Deselects a record selected in the record list.
- [selectedGroups](abpeoplepickerview/selectedgroups.md): The groups selected in the group list. (read-only)
- [selectedIdentifiers(for:)](abpeoplepickerview/selectedidentifiers%28for_%29.md): Returns the identifiers of the selected values in a multivalue property.
- [selectedRecords](abpeoplepickerview/selectedrecords.md): The selection in the records list. (read-only)
- [selectedValues()](abpeoplepickerview/selectedvalues%28%29.md): Returns an array of all the values selected in the displayed multivalue property.
- [select(\_:byExtendingSelection:)](abpeoplepickerview/select%28__byextendingselection_%29-6mrii.md): Selects a group or a set of groups in the group list.
- [selectIdentifier(\_:for:byExtendingSelection:)](abpeoplepickerview/selectidentifier%28__for_byextendingselection_%29.md): Selects a value or a set of values in a multivalue property.
- [select(\_:byExtendingSelection:)](abpeoplepickerview/select%28__byextendingselection_%29-9eldk.md): Selects a record or a set of records in the record list.

### Specifying the Accessory View

- [accessoryView](abpeoplepickerview/accessoryview.md): The view that is placed to the left of the search field.

### Managing Actions

- [clearSearchField(\_:)](abpeoplepickerview/clearsearchfield%28__%29.md): Clears the search field and resets the list of displayed records.
- [editInAddressBook(\_:)](abpeoplepickerview/editinaddressbook%28__%29.md): Launches Address Book to edit the item selected in the people picker.
- [groupDoubleAction](abpeoplepickerview/groupdoubleaction.md): The action to be invoked when a group is double-clicked.
- [nameDoubleAction](abpeoplepickerview/namedoubleaction.md): The action to be invoked when a name is double-clicked.
- [selectInAddressBook(\_:)](abpeoplepickerview/selectinaddressbook%28__%29.md): Launches Address Book and selects the item selected in the people picker.
- [target](abpeoplepickerview/target.md): The target for double-click actions.

### Managing Persistent User Settings

- [autosaveName](abpeoplepickerview/autosavename.md): The name under which the column positions and the filter selection are saved.

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityelementprotocol)
- [NSAccessibilityProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol)
- [NSAnimatablePropertyContainer](https://developer.apple.com/documentation/appkit/nsanimatablepropertycontainer)
- [NSAppearanceCustomization](https://developer.apple.com/documentation/appkit/nsappearancecustomization)
- [NSCoding](../foundation/nscoding.md)
- [NSDraggingDestination](https://developer.apple.com/documentation/appkit/nsdraggingdestination)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)

## See Also

### Pickers

- [ABPersonView](abpersonview.md): An object that provides a view for displaying and editing contacts.

# ABPeoplePickerView (Objective-C)

**Framework:** Address Book  
**Kind:** Class  
**Availability:** macOS 10.3+

An object you use to customize the behavior of people-picker views in an app’s user interface.

## Declaration

```objectivec
@interface ABPeoplePickerView : NSView
```

## Topics

### Working with Properties in the Record List

- [addProperty:](abpeoplepickerview/addproperty%28__%29.md): Adds a property to the group of properties whose values are shown in the record list.
- [columnTitleForProperty:](abpeoplepickerview/columntitle%28forproperty_%29.md): Returns the title of a custom property.
- [displayedProperty](abpeoplepickerview/displayedproperty.md): The property currently displayed in the record list.
- [properties](abpeoplepickerview/properties%28%29.md): Returns an array of the properties whose values are shown in the record list.
- [removeProperty:](abpeoplepickerview/removeproperty%28__%29.md): Removes a property from the group of properties whose values are shown in the record list.
- [setColumnTitle:forProperty:](abpeoplepickerview/setcolumntitle%28__forproperty_%29.md): Sets the title displayed in the people picker for a property.

### Specifying Selection Behavior

- [valueSelectionBehavior](abpeoplepickerview/valueselectionbehavior.md): The current selection behavior.
- [ABPeoplePickerSelectionBehavior](abpeoplepickerselectionbehavior.md): Constants indicating the possible value selection behaviors.

### Selecting Groups and Records

- [allowsGroupSelection](abpeoplepickerview/allowsgroupselection.md): A Boolean value that specifies whether the user can select entire groups in the group column.
- [allowsMultipleSelection](abpeoplepickerview/allowsmultipleselection.md): A Boolean value that specifies whether multiple groups, records, or values of multivalue properties can be selected at a time.
- [deselectAll:](abpeoplepickerview/deselectall%28__%29.md): Deselects all selected groups, records, and values in multivalue properties.
- [deselectGroup:](abpeoplepickerview/deselect%28__%29-3x7tl.md): Deselects a group selected in the group list.
- [deselectIdentifier:forPerson:](abpeoplepickerview/deselectidentifier%28__for_%29.md): Deselects a value selected in a multivalue property.
- [deselectRecord:](abpeoplepickerview/deselect%28__%29-1yy11.md): Deselects a record selected in the record list.
- [selectedGroups](abpeoplepickerview/selectedgroups.md): The groups selected in the group list. (read-only)
- [selectedIdentifiersForPerson:](abpeoplepickerview/selectedidentifiers%28for_%29.md): Returns the identifiers of the selected values in a multivalue property.
- [selectedRecords](abpeoplepickerview/selectedrecords.md): The selection in the records list. (read-only)
- [selectedValues](abpeoplepickerview/selectedvalues%28%29.md): Returns an array of all the values selected in the displayed multivalue property.
- [selectGroup:byExtendingSelection:](abpeoplepickerview/select%28__byextendingselection_%29-6mrii.md): Selects a group or a set of groups in the group list.
- [selectIdentifier:forPerson:byExtendingSelection:](abpeoplepickerview/selectidentifier%28__for_byextendingselection_%29.md): Selects a value or a set of values in a multivalue property.
- [selectRecord:byExtendingSelection:](abpeoplepickerview/select%28__byextendingselection_%29-9eldk.md): Selects a record or a set of records in the record list.

### Specifying the Accessory View

- [accessoryView](abpeoplepickerview/accessoryview.md): The view that is placed to the left of the search field.

### Managing Actions

- [clearSearchField:](abpeoplepickerview/clearsearchfield%28__%29.md): Clears the search field and resets the list of displayed records.
- [editInAddressBook:](abpeoplepickerview/editinaddressbook%28__%29.md): Launches Address Book to edit the item selected in the people picker.
- [groupDoubleAction](abpeoplepickerview/groupdoubleaction.md): The action to be invoked when a group is double-clicked.
- [nameDoubleAction](abpeoplepickerview/namedoubleaction.md): The action to be invoked when a name is double-clicked.
- [selectInAddressBook:](abpeoplepickerview/selectinaddressbook%28__%29.md): Launches Address Book and selects the item selected in the people picker.
- [target](abpeoplepickerview/target.md): The target for double-click actions.

### Managing Persistent User Settings

- [autosaveName](abpeoplepickerview/autosavename.md): The name under which the column positions and the filter selection are saved.

### Notifications

- [ABPeoplePickerGroupSelectionDidChangeNotification](abpeoplepickergroupselectiondidchangenotification.md): Posted when the selection in the group list is changed.
- [ABPeoplePickerNameSelectionDidChangeNotification](abpeoplepickernameselectiondidchangenotification.md): Posted when the selection in the name list is changed.
- [ABPeoplePickerValueSelectionDidChangeNotification](abpeoplepickervalueselectiondidchangenotification.md): Posted when the selection in a multivalue property is changed.
- [ABPeoplePickerDisplayedPropertyDidChangeNotification](abpeoplepickerdisplayedpropertydidchangenotification.md): Posted when the displayed property in the record list is changed.

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)

## See Also

### Pickers

- [ABPersonView](abpersonview.md): An object that provides a view for displaying and editing contacts.
- [ABPersonPicker](abpersonpicker.md): A picker object that you display when you want the user to select contacts.
