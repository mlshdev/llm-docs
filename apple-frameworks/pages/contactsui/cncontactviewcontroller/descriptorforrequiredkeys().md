> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui/cncontactviewcontroller/descriptorforrequiredkeys()](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller/descriptorforrequiredkeys())

# descriptorForRequiredKeys() (Swift)

**Framework:** Contacts UI  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Returns the descriptor for all the keys that must be fetched on the contact before setting it on the view controller.

## Declaration

```swift
class func descriptorForRequiredKeys() -> any CNKeyDescriptor
```

```swift
nonisolated class func descriptorForRequiredKeys() -> any CNKeyDescriptor
```

<a id="return-value"></a>

## Return Value

Descriptor for all the keys that must be fetched.

<a id="discussion"></a>

## Discussion

Pass this descriptor to the `keysToFetch` of the [CNContactFetchRequest](../../contacts/cncontactfetchrequest.md) if you want to display the contact in a [CNContactViewController](../cncontactviewcontroller.md).

# descriptorForRequiredKeys (Objective-C)

**Framework:** Contacts UI  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Returns the descriptor for all the keys that must be fetched on the contact before setting it on the view controller.

## Declaration

```objectivec
+ (id<CNKeyDescriptor>) descriptorForRequiredKeys;
```

<a id="return-value"></a>

## Return Value

Descriptor for all the keys that must be fetched.

<a id="discussion"></a>

## Discussion

Pass this descriptor to the `keysToFetch` of the [CNContactFetchRequest](../../contacts/cncontactfetchrequest.md) if you want to display the contact in a [CNContactViewController](../cncontactviewcontroller.md).
