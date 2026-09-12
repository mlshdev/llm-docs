> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/absave(_:)](https://developer.apple.com/documentation/addressbook/absave(_:))

# ABSave(\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Saves all the changes made since the last save.

## Declaration

```swift
func ABSave(_ addressBook: ABAddressBookRef!) -> Bool
```

## Parameters

- `addressBook`: The address book for the logged-in user.

<a id="return-value"></a>

## Return Value

`true` if this function is successful or if there were no changes, `false` otherwise.

## See Also

### Address Book

- [ABGetSharedAddressBook()](abgetsharedaddressbook%28%29.md): Returns the unique shared ABAddressBook object.
- [ABCopyDefaultCountryCode(\_:)](abcopydefaultcountrycode%28__%29.md): Returns the default country code for records with unspecified country codes.
- [ABHasUnsavedChanges(\_:)](abhasunsavedchanges%28__%29.md): Returns whether if there are unsaved changes in the address book.

# ABSave (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Saves all the changes made since the last save.

## Declaration

```objectivec
extern bool ABSave(ABAddressBookRef addressBook);
```

## Parameters

- `addressBook`: The address book for the logged-in user.

<a id="return-value"></a>

## Return Value

`true` if this function is successful or if there were no changes, `false` otherwise.

## See Also

### Address Book

- [ABGetSharedAddressBook](abgetsharedaddressbook%28%29.md): Returns the unique shared ABAddressBook object.
- [ABCopyDefaultCountryCode](abcopydefaultcountrycode%28__%29.md): Returns the default country code for records with unspecified country codes.
- [ABHasUnsavedChanges](abhasunsavedchanges%28__%29.md): Returns whether if there are unsaved changes in the address book.
