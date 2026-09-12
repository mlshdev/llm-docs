> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecvaluedata](https://developer.apple.com/documentation/security/ksecvaluedata)

# kSecValueData (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is the item’s data.

## Declaration

```swift
let kSecValueData: CFString
```

## Mentioned In

- [Searching for keychain items](searching-for-keychain-items.md)
- [Updating and deleting keychain items](updating-and-deleting-keychain-items.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFData](../corefoundation/cfdata.md).  For keys and password items, the data is secret (encrypted) and may require the user to enter a password for access.

# kSecValueData (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is the item’s data.

## Declaration

```objectivec
extern CFStringRef const kSecValueData;
```

## Mentioned In

- [Searching for keychain items](searching-for-keychain-items.md)
- [Updating and deleting keychain items](updating-and-deleting-keychain-items.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFDataRef](../corefoundation/cfdata.md).  For keys and password items, the data is secret (encrypted) and may require the user to enter a password for access.
