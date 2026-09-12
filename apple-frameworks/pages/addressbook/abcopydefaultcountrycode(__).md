> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abcopydefaultcountrycode(_:)](https://developer.apple.com/documentation/addressbook/abcopydefaultcountrycode(_:))

# ABCopyDefaultCountryCode(\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS 10.3+

Returns the default country code for records with unspecified country codes.

## Declaration

```swift
func ABCopyDefaultCountryCode(_ addressBook: ABAddressBookRef!) -> Unmanaged<CFString>!
```

## Parameters

- `addressBook`: The address book for the logged-in user.

<a id="return-value"></a>

## Return Value

A string with the default country code. You are responsible for releasing this object.

## See Also

### Address Book

- [ABGetSharedAddressBook()](abgetsharedaddressbook%28%29.md): Returns the unique shared ABAddressBook object.
- [ABHasUnsavedChanges(\_:)](abhasunsavedchanges%28__%29.md): Returns whether if there are unsaved changes in the address book.
- [ABSave(\_:)](absave%28__%29.md): Saves all the changes made since the last save.

# ABCopyDefaultCountryCode (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS 10.3+

Returns the default country code for records with unspecified country codes.

## Declaration

```objectivec
extern CFStringRefABCopyDefaultCountryCode(ABAddressBookRef addressBook);
```

## Parameters

- `addressBook`: The address book for the logged-in user.

<a id="return-value"></a>

## Return Value

A string with the default country code. You are responsible for releasing this object.

## See Also

### Address Book

- [ABGetSharedAddressBook](abgetsharedaddressbook%28%29.md): Returns the unique shared ABAddressBook object.
- [ABHasUnsavedChanges](abhasunsavedchanges%28__%29.md): Returns whether if there are unsaved changes in the address book.
- [ABSave](absave%28__%29.md): Saves all the changes made since the last save.
