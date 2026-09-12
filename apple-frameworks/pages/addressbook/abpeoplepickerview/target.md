> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abpeoplepickerview/target](https://developer.apple.com/documentation/addressbook/abpeoplepickerview/target)

# target (Swift)

**Framework:** Address Book  
**Kind:** Instance Property  
**Availability:** macOS 10.3+

The target for double-click actions.

## Declaration

```swift
unowned(unsafe) var target: AnyObject! { get set }
```

<a id="Discussion"></a>

## Discussion

The target is the object on which the action specified by [groupDoubleAction](groupdoubleaction.md) and [nameDoubleAction](namedoubleaction.md) is invoked.

## See Also

### Managing Actions

- [clearSearchField(\_:)](clearsearchfield%28__%29.md): Clears the search field and resets the list of displayed records.
- [editInAddressBook(\_:)](editinaddressbook%28__%29.md): Launches Address Book to edit the item selected in the people picker.
- [groupDoubleAction](groupdoubleaction.md): The action to be invoked when a group is double-clicked.
- [nameDoubleAction](namedoubleaction.md): The action to be invoked when a name is double-clicked.
- [selectInAddressBook(\_:)](selectinaddressbook%28__%29.md): Launches Address Book and selects the item selected in the people picker.

# target (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Property  
**Availability:** macOS 10.3+

The target for double-click actions.

## Declaration

```objectivec
@property (nonatomic, assign) id target;
```

<a id="Discussion"></a>

## Discussion

The target is the object on which the action specified by [groupDoubleAction](groupdoubleaction.md) and [nameDoubleAction](namedoubleaction.md) is invoked.

## See Also

### Managing Actions

- [clearSearchField:](clearsearchfield%28__%29.md): Clears the search field and resets the list of displayed records.
- [editInAddressBook:](editinaddressbook%28__%29.md): Launches Address Book to edit the item selected in the people picker.
- [groupDoubleAction](groupdoubleaction.md): The action to be invoked when a group is double-clicked.
- [nameDoubleAction](namedoubleaction.md): The action to be invoked when a name is double-clicked.
- [selectInAddressBook:](selectinaddressbook%28__%29.md): Launches Address Book and selects the item selected in the people picker.
