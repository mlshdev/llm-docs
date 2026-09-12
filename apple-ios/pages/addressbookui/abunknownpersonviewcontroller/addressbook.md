> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abunknownpersonviewcontroller/addressbook](https://developer.apple.com/documentation/addressbookui/abunknownpersonviewcontroller/addressbook)

# addressBook (Swift)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Optional. The address book database that the person record is added to.

> Use [CNContactViewController](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller) instead.

## Declaration

```swift
var addressBook: ABAddressBook? { get set }
```

<a id="Discussion"></a>

## Discussion

When unspecified, this view controller sets the value of this property by creating an `ABAddressBookRef` object.

The person record is only added to the address book database if [allowsAddingToAddressBook](allowsaddingtoaddressbook.md) is [true](https://developer.apple.com/documentation/swift/true) and the user taps the “Add to Existing Contact” or “Create New Contact” button.

## See Also

### Configuring the Interface Details

- [allowsActions](allowsactions.md): Deprecated. Specifies whether buttons appear to let the user perform actions such as sharing the contact, initiating a FaceTime call, or sending a text message.
- [allowsAddingToAddressBook](allowsaddingtoaddressbook.md): Deprecated. Specifies whether the user can add the properties displayed by the unknown-person view controller to the address book database, either as a new contact or by adding them to an existing contact.

# addressBook (Objective-C)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Optional. The address book database that the person record is added to.

> Use [CNContactViewController](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller) instead.

## Declaration

```objectivec
@property (nonatomic, readwrite, nullable) ABAddressBookRef addressBook;
```

<a id="Discussion"></a>

## Discussion

When unspecified, this view controller sets the value of this property by creating an `ABAddressBookRef` object.

The person record is only added to the address book database if [allowsAddingToAddressBook](allowsaddingtoaddressbook.md) is [true](https://developer.apple.com/documentation/swift/true) and the user taps the “Add to Existing Contact” or “Create New Contact” button.

## See Also

### Configuring the Interface Details

- [allowsActions](allowsactions.md): Deprecated. Specifies whether buttons appear to let the user perform actions such as sharing the contact, initiating a FaceTime call, or sending a text message.
- [allowsAddingToAddressBook](allowsaddingtoaddressbook.md): Deprecated. Specifies whether the user can add the properties displayed by the unknown-person view controller to the address book database, either as a new contact or by adding them to an existing contact.
