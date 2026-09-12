> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abaddressbook-swift.class/addressbook](https://developer.apple.com/documentation/addressbook/abaddressbook-swift.class/addressbook)

# addressBook

**Interface language:** Objective-C

**Framework:** Address Book  
**Kind:** Type Method  
**Availability:** macOS 10.5+

Returns a new instance of `ABAddressBook`, or `nil` if the Address Book database can’t be initialized.

## Declaration

```objectivec
+ (ABAddressBook *) addressBook;
```

<a id="return-value"></a>

## Return Value

A new instance of `ABAddressBook`, or `nil` if the Address Book database can’t be initialized.

<a id="Discussion"></a>

## Discussion

If you’re just making one-off lookups and edits, the [sharedAddressBook](shared%28%29.md) method is probably more appropriate. If your code is executing a tight loop, the [addressBook](addressbook.md) method can yield significant performance improvements when used with the [ABPerson](../abperson.md)  [initWithAddressBook:](../abrecord-swift.class/init%28addressbook_%29.md) method. See [Accessing the Address Book](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AddressBook/Tasks/ManagingGroups.html#//apple_ref/doc/uid/20001022-102346) for more details.

If the user denies your application access to the Address Book database, this method returns `nil`.

## See Also

### Creating and Initializing an Address Book

- [sharedAddressBook](shared%28%29.md): Returns the unique shared instance of `ABAddressBook`, or `nil` if the Address Book database can’t be initialized.
