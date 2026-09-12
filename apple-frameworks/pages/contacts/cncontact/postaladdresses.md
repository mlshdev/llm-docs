> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontact/postaladdresses](https://developer.apple.com/documentation/contacts/cncontact/postaladdresses)

# postalAddresses (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An array of labeled postal addresses for a contact.

## Declaration

```swift
var postalAddresses: [CNLabeledValue<CNPostalAddress>] { get }
```

<a id="Discussion"></a>

## Discussion

This property is an array of [CNLabeledValue](../cnlabeledvalue.md) objects, each of which has a label and a [CNPostalAddress](../cnpostaladdress.md) value.

## See Also

### Getting Addresses

- [emailAddresses](emailaddresses.md): An array of labeled email addresses for the contact.
- [urlAddresses](urladdresses.md): An array of labeled URL addresses for a contact.

# postalAddresses (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An array of labeled postal addresses for a contact.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<CNLabeledValue<CNPostalAddress *> *> * postalAddresses;
```

```objectivec
@property (atomic, copy, readonly) NSArray<CNLabeledValue<CNPostalAddress *> *> * postalAddresses;
```

<a id="Discussion"></a>

## Discussion

This property is an array of [CNLabeledValue](../cnlabeledvalue.md) objects, each of which has a label and a [CNPostalAddress](../cnpostaladdress.md) value.

## See Also

### Getting Addresses

- [emailAddresses](emailaddresses.md): An array of labeled email addresses for the contact.
- [urlAddresses](urladdresses.md): An array of labeled URL addresses for a contact.
