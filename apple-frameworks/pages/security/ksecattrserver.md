> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattrserver](https://developer.apple.com/documentation/security/ksecattrserver)

# kSecAttrServer (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a string indicating the item’s server.

## Declaration

```swift
let kSecAttrServer: CFString
```

## Mentioned In

- [Adding a password to the keychain](adding-a-password-to-the-keychain.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFString](../corefoundation/cfstring.md) and contains the server’s domain name or IP address. Items of class [kSecClassInternetPassword](ksecclassinternetpassword.md) have this attribute.

# kSecAttrServer (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a string indicating the item’s server.

## Declaration

```objectivec
extern CFStringRef const kSecAttrServer;
```

## Mentioned In

- [Adding a password to the keychain](adding-a-password-to-the-keychain.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFStringRef](../corefoundation/cfstring.md) and contains the server’s domain name or IP address. Items of class [kSecClassInternetPassword](ksecclassinternetpassword.md) have this attribute.
