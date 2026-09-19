> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/contacts/cnmutablecontact/imagedata

# imageData (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The profile picture of a contact.

## Declaration

```swift
var imageData: Data? { get set }
```

<a id="Discussion"></a>

## Discussion

It is recommended that you fetch this property only when you need to access its value, such as when you need to display the contact’s profile picture.

# imageData (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The profile picture of a contact.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSData * imageData;
```

```objectivec
@property (atomic, copy, nullable) NSData * imageData;
```

<a id="Discussion"></a>

## Discussion

It is recommended that you fetch this property only when you need to access its value, such as when you need to display the contact’s profile picture.
