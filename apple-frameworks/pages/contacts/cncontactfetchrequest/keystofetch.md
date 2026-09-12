> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactfetchrequest/keystofetch](https://developer.apple.com/documentation/contacts/cncontactfetchrequest/keystofetch)

# keysToFetch (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The properties to fetch in the returned contacts.

## Declaration

```swift
var keysToFetch: [any CNKeyDescriptor] { get set }
```

<a id="Discussion"></a>

## Discussion

An array of contact property keys or key descriptors from contact objects to be fetched in the returned contacts. For example, [CNContactEmailAddressesKey](../cncontactemailaddresseskey.md), [CNContactPhoneNumbersKey](../cncontactphonenumberskey.md), [CNContactFormatterStyle.fullName](../cncontactformatterstyle/fullname.md) fetches the contact’s email addresses, phone numbers, and contact’s full name with the contact formatter.

# keysToFetch (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The properties to fetch in the returned contacts.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<id<CNKeyDescriptor>> * keysToFetch;
```

```objectivec
@property (atomic, copy) NSArray<id<CNKeyDescriptor>> * keysToFetch;
```

<a id="Discussion"></a>

## Discussion

An array of contact property keys or key descriptors from contact objects to be fetched in the returned contacts. For example, [CNContactEmailAddressesKey](../cncontactemailaddresseskey.md), [CNContactPhoneNumbersKey](../cncontactphonenumberskey.md), [CNContactFormatterStyleFullName](../cncontactformatterstyle/fullname.md) fetches the contact’s email addresses, phone numbers, and contact’s full name with the contact formatter.
