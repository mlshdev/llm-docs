> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/contacts/cncontactproperty/contact

# contact (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The associated contact.

## Declaration

```swift
@NSCopying var contact: CNContact { get }
```

<a id="Discussion"></a>

## Discussion

This property is used for properties that may or may not be in labeled arrays.

# contact (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The associated contact.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) CNContact * contact;
```

```objectivec
@property (atomic, copy, readonly) CNContact * contact;
```

<a id="Discussion"></a>

## Discussion

This property is used for properties that may or may not be in labeled arrays.
