> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattraccount](https://developer.apple.com/documentation/security/ksecattraccount)

# kSecAttrAccount (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a string indicating the item’s account name.

## Declaration

```swift
let kSecAttrAccount: CFString
```

## Mentioned In

- [Searching for keychain items](searching-for-keychain-items.md)
- [Updating and deleting keychain items](updating-and-deleting-keychain-items.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFString](../corefoundation/cfstring.md) and contains an account name. Items of class [kSecClassGenericPassword](ksecclassgenericpassword.md) and [kSecClassInternetPassword](ksecclassinternetpassword.md) have this attribute.

# kSecAttrAccount (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a string indicating the item’s account name.

## Declaration

```objectivec
extern CFStringRef const kSecAttrAccount;
```

## Mentioned In

- [Searching for keychain items](searching-for-keychain-items.md)
- [Updating and deleting keychain items](updating-and-deleting-keychain-items.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFStringRef](../corefoundation/cfstring.md) and contains an account name. Items of class [kSecClassGenericPassword](ksecclassgenericpassword.md) and [kSecClassInternetPassword](ksecclassinternetpassword.md) have this attribute.
