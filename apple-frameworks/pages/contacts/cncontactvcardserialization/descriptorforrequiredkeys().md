> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactvcardserialization/descriptorforrequiredkeys()](https://developer.apple.com/documentation/contacts/cncontactvcardserialization/descriptorforrequiredkeys())

# descriptorForRequiredKeys() (Swift)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Use to fetch all contact keys required to create vCard data from a contact.

## Declaration

```swift
class func descriptorForRequiredKeys() -> any CNKeyDescriptor
```

<a id="Return-Value"></a>

## Return Value

A key descriptor to be used in the [keysToFetch](../cncontactfetchrequest/keystofetch.md) array when fetching the contacts.

# descriptorForRequiredKeys (Objective-C)

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Use to fetch all contact keys required to create vCard data from a contact.

## Declaration

```objectivec
+ (id<CNKeyDescriptor>) descriptorForRequiredKeys;
```

<a id="Return-Value"></a>

## Return Value

A key descriptor to be used in the [keysToFetch](../cncontactfetchrequest/keystofetch.md) array when fetching the contacts.
