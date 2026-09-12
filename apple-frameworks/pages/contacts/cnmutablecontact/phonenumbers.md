> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnmutablecontact/phonenumbers](https://developer.apple.com/documentation/contacts/cnmutablecontact/phonenumbers)

# phoneNumbers (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An array of labeled phone numbers for a contact.

## Declaration

```swift
var phoneNumbers: [CNLabeledValue<CNPhoneNumber>] { get set }
```

<a id="Discussion"></a>

## Discussion

This property is an array of [CNLabeledValue](../cnlabeledvalue.md) objects, each of which has a label and a [CNPhoneNumber](../cnphonenumber.md) value.

# phoneNumbers (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An array of labeled phone numbers for a contact.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<CNLabeledValue<CNPhoneNumber *> *> * phoneNumbers;
```

```objectivec
@property (atomic, copy) NSArray<CNLabeledValue<CNPhoneNumber *> *> * phoneNumbers;
```

<a id="Discussion"></a>

## Discussion

This property is an array of [CNLabeledValue](../cnlabeledvalue.md) objects, each of which has a label and a [CNPhoneNumber](../cnphonenumber.md) value.
