> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontact/note](https://developer.apple.com/documentation/contacts/cncontact/note)

# note (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

A string containing notes for the contact.

## Declaration

```swift
var note: String { get }
```

## Mentioned In

- [Accessing the contact store](../accessing-the-contact-store.md)

<a id="Discussion"></a>

## Discussion

To fetch the `note` property in iOS 13 or later or macOS 13 or later, add the [com.apple.developer.contacts.notes](../../bundleresources/entitlements/com.apple.developer.contacts.notes.md) entitlement to your app. The entitlement requires permission from Apple to use, and you can’t publicly distribute your app until you have permission to use it. For more information about adding the entitlement and getting permission, see [com.apple.developer.contacts.notes](../../bundleresources/entitlements/com.apple.developer.contacts.notes.md).

# note (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

A string containing notes for the contact.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * note;
```

```objectivec
@property (atomic, copy, readonly) NSString * note;
```

## Mentioned In

- [Accessing the contact store](../accessing-the-contact-store.md)

<a id="Discussion"></a>

## Discussion

To fetch the `note` property in iOS 13 or later or macOS 13 or later, add the [com.apple.developer.contacts.notes](../../bundleresources/entitlements/com.apple.developer.contacts.notes.md) entitlement to your app. The entitlement requires permission from Apple to use, and you can’t publicly distribute your app until you have permission to use it. For more information about adding the entitlement and getting permission, see [com.apple.developer.contacts.notes](../../bundleresources/entitlements/com.apple.developer.contacts.notes.md).
