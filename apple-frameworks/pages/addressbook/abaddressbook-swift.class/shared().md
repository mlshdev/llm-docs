> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abaddressbook-swift.class/shared()](https://developer.apple.com/documentation/addressbook/abaddressbook-swift.class/shared())

# shared() (Swift)

**Framework:** Address Book  
**Kind:** Type Method  
**Availability:** macOS

Returns the unique shared instance of `ABAddressBook`, or `nil` if the Address Book database can’t be initialized.

## Declaration

```swift
class func shared() -> ABAddressBook!
```

<a id="return-value"></a>

## Return Value

The unique shared instance of `ABAddressBook`, or `nil` if the Address Book database can’t be initialized.

<a id="Discussion"></a>

## Discussion

This method returns the address book for the logged-in user that is shared by every application. If you call this method more than once or try to create a new address book, you will get a pointer to the same shared address book.

If you’re just making one-off lookups and edits, this is the appropriate method to use. If your code is executing a tight loop, using the [addressBook](addressbook.md) method with the  [init(addressBook:)](../abrecord-swift.class/init%28addressbook_%29.md) method of [ABPerson](../abperson.md) can yield significant performance improvements. See [Accessing the Address Book](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AddressBook/Tasks/ManagingGroups.html#//apple_ref/doc/uid/20001022-102346) for more details.

If the user denies your application access to the Address Book database, this method returns `nil`.

# sharedAddressBook (Objective-C)

**Framework:** Address Book  
**Kind:** Type Method  
**Availability:** macOS

Returns the unique shared instance of `ABAddressBook`, or `nil` if the Address Book database can’t be initialized.

## Declaration

```objectivec
+ (ABAddressBook *) sharedAddressBook;
```

<a id="return-value"></a>

## Return Value

The unique shared instance of `ABAddressBook`, or `nil` if the Address Book database can’t be initialized.

<a id="Discussion"></a>

## Discussion

This method returns the address book for the logged-in user that is shared by every application. If you call this method more than once or try to create a new address book, you will get a pointer to the same shared address book.

If you’re just making one-off lookups and edits, this is the appropriate method to use. If your code is executing a tight loop, using the [addressBook](addressbook.md) method with the  [initWithAddressBook:](../abrecord-swift.class/init%28addressbook_%29.md) method of [ABPerson](../abperson.md) can yield significant performance improvements. See [Accessing the Address Book](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AddressBook/Tasks/ManagingGroups.html#//apple_ref/doc/uid/20001022-102346) for more details.

If the user denies your application access to the Address Book database, this method returns `nil`.

## See Also

### Creating and Initializing an Address Book

- [addressBook](addressbook.md): Returns a new instance of `ABAddressBook`, or `nil` if the Address Book database can’t be initialized.
