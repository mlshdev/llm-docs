> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abpeoplepickernavigationcontroller/addressbook](https://developer.apple.com/documentation/addressbookui/abpeoplepickernavigationcontroller/addressbook)

# addressBook (Swift)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Optional; the address book from which to obtain the list of contacts.

> Use [CNContactPickerViewController](https://developer.apple.com/documentation/contactsui/cncontactpickerviewcontroller) instead.

## Declaration

```swift
var addressBook: ABAddressBook? { get set }
```

<a id="Discussion"></a>

## Discussion

When unset, an address book is created and assigned to this property when needed. This property is only used when the app has access to the user’s contacts—otherwise it remains `NULL`.

# addressBook (Objective-C)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Optional; the address book from which to obtain the list of contacts.

> Use [CNContactPickerViewController](https://developer.apple.com/documentation/contactsui/cncontactpickerviewcontroller) instead.

## Declaration

```objectivec
@property (nonatomic, readwrite, nullable) ABAddressBookRef addressBook;
```

<a id="Discussion"></a>

## Discussion

When unset, an address book is created and assigned to this property when needed. This property is only used when the app has access to the user’s contacts—otherwise it remains `NULL`.
