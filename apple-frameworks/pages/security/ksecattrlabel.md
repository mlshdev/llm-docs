> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattrlabel](https://developer.apple.com/documentation/security/ksecattrlabel)

# kSecAttrLabel (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key with a value that’s a string indicating the item’s label.

## Declaration

```swift
let kSecAttrLabel: CFString
```

## Mentioned In

- [Adding a password to the keychain](adding-a-password-to-the-keychain.md)
- [Storing a Certificate in the Keychain](storing-a-certificate-in-the-keychain.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFString](../corefoundation/cfstring.md) and contains the user-visible label for this item.

On key creation, if not explicitly specified, this attribute defaults to `NULL`.

# kSecAttrLabel (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key with a value that’s a string indicating the item’s label.

## Declaration

```objectivec
extern CFStringRef const kSecAttrLabel;
```

## Mentioned In

- [Adding a password to the keychain](adding-a-password-to-the-keychain.md)
- [Storing a Certificate in the Keychain](storing-a-certificate-in-the-keychain.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFStringRef](../corefoundation/cfstring.md) and contains the user-visible label for this item.

On key creation, if not explicitly specified, this attribute defaults to `NULL`.
