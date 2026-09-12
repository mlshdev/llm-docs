> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnmutablecontact/emailaddresses](https://developer.apple.com/documentation/contacts/cnmutablecontact/emailaddresses)

# emailAddresses (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An array of labeled email addresses for the contact.

## Declaration

```swift
var emailAddresses: [CNLabeledValue<NSString>] { get set }
```

<a id="Discussion"></a>

## Discussion

This property is an array of [CNLabeledValue](../cnlabeledvalue.md) objects, each of which has a label and a [NSString](../../foundation/nsstring.md) value.

## See Also

### Setting Addresses

- [postalAddresses](postaladdresses.md): An array of labeled postal addresses for a contact.
- [urlAddresses](urladdresses.md): An array of labeled URL addresses for a contact.

# emailAddresses (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An array of labeled email addresses for the contact.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<CNLabeledValue<NSString *> *> * emailAddresses;
```

```objectivec
@property (atomic, copy) NSArray<CNLabeledValue<NSString *> *> * emailAddresses;
```

<a id="Discussion"></a>

## Discussion

This property is an array of [CNLabeledValue](../cnlabeledvalue.md) objects, each of which has a label and a [NSString](../../foundation/nsstring.md) value.

## See Also

### Setting Addresses

- [postalAddresses](postaladdresses.md): An array of labeled postal addresses for a contact.
- [urlAddresses](urladdresses.md): An array of labeled URL addresses for a contact.
