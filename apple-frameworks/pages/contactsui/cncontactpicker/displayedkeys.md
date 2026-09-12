> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui/cncontactpicker/displayedkeys](https://developer.apple.com/documentation/contactsui/cncontactpicker/displayedkeys)

# displayedKeys (Swift)

**Framework:** Contacts UI  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The keys to be displayed when a contact is expanded.

## Declaration

```swift
var displayedKeys: [String] { get set }
```

<a id="discussion"></a>

## Discussion

If no keys are provided, the picker selects contacts instead of values. For a list of possible keys, see [Contact Keys](../../contacts/contact-keys.md).

## See Also

### Related Documentation

- [CNContact](../../contacts/cncontact.md): An immutable object that stores information about a single contact, such as the contact’s first name, phone numbers, and addresses.

# displayedKeys (Objective-C)

**Framework:** Contacts UI  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The keys to be displayed when a contact is expanded.

## Declaration

```objectivec
@property (copy) NSArray<NSString *> * displayedKeys;
```

<a id="discussion"></a>

## Discussion

If no keys are provided, the picker selects contacts instead of values. For a list of possible keys, see [Contact Keys](../../contacts/contact-keys.md).

## See Also

### Related Documentation

- [CNContact](../../contacts/cncontact.md): An immutable object that stores information about a single contact, such as the contact’s first name, phone numbers, and addresses.
