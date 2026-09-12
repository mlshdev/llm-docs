> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abhasunsavedchanges(_:)](https://developer.apple.com/documentation/addressbook/abhasunsavedchanges(_:))

# ABHasUnsavedChanges(\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Returns whether if there are unsaved changes in the address book.

## Declaration

```swift
func ABHasUnsavedChanges(_ addressBook: ABAddressBookRef!) -> Bool
```

## Parameters

- `addressBook`: The address book for the logged-in user.

<a id="return-value"></a>

## Return Value

`true` if there are unsaved changes, `false` otherwise.

<a id="Discussion"></a>

## Discussion

The unsaved changes flag is set automatically whenever changes are made to the address book.

## See Also

### Address Book

- [ABGetSharedAddressBook()](abgetsharedaddressbook%28%29.md): Returns the unique shared ABAddressBook object.
- [ABCopyDefaultCountryCode(\_:)](abcopydefaultcountrycode%28__%29.md): Returns the default country code for records with unspecified country codes.
- [ABSave(\_:)](absave%28__%29.md): Saves all the changes made since the last save.

# ABHasUnsavedChanges (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Returns whether if there are unsaved changes in the address book.

## Declaration

```objectivec
extern bool ABHasUnsavedChanges(ABAddressBookRef addressBook);
```

## Parameters

- `addressBook`: The address book for the logged-in user.

<a id="return-value"></a>

## Return Value

`true` if there are unsaved changes, `false` otherwise.

<a id="Discussion"></a>

## Discussion

The unsaved changes flag is set automatically whenever changes are made to the address book.

## See Also

### Address Book

- [ABGetSharedAddressBook](abgetsharedaddressbook%28%29.md): Returns the unique shared ABAddressBook object.
- [ABCopyDefaultCountryCode](abcopydefaultcountrycode%28__%29.md): Returns the default country code for records with unspecified country codes.
- [ABSave](absave%28__%29.md): Saves all the changes made since the last save.
