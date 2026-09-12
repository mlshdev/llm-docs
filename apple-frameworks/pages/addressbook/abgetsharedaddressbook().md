> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abgetsharedaddressbook()](https://developer.apple.com/documentation/addressbook/abgetsharedaddressbook())

# ABGetSharedAddressBook() (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Returns the unique shared ABAddressBook object.

## Declaration

```swift
func ABGetSharedAddressBook() -> Unmanaged<ABAddressBookRef>!
```

<a id="return-value"></a>

## Return Value

The address book for the logged-in user. You are responsible for retaining and releasing this object as needed.

<a id="Discussion"></a>

## Discussion

Every application shares the address book for the logged-in user and this function returns it. If you call this function more than once or try to create a new address book, you get a pointer to the same shared address book.

## See Also

### Address Book

- [ABCopyDefaultCountryCode(\_:)](abcopydefaultcountrycode%28__%29.md): Returns the default country code for records with unspecified country codes.
- [ABHasUnsavedChanges(\_:)](abhasunsavedchanges%28__%29.md): Returns whether if there are unsaved changes in the address book.
- [ABSave(\_:)](absave%28__%29.md): Saves all the changes made since the last save.

# ABGetSharedAddressBook (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Returns the unique shared ABAddressBook object.

## Declaration

```objectivec
extern ABAddressBookRefABGetSharedAddressBook();
```

<a id="return-value"></a>

## Return Value

The address book for the logged-in user. You are responsible for retaining and releasing this object as needed.

<a id="Discussion"></a>

## Discussion

Every application shares the address book for the logged-in user and this function returns it. If you call this function more than once or try to create a new address book, you get a pointer to the same shared address book.

## See Also

### Address Book

- [ABCopyDefaultCountryCode](abcopydefaultcountrycode%28__%29.md): Returns the default country code for records with unspecified country codes.
- [ABHasUnsavedChanges](abhasunsavedchanges%28__%29.md): Returns whether if there are unsaved changes in the address book.
- [ABSave](absave%28__%29.md): Saves all the changes made since the last save.
