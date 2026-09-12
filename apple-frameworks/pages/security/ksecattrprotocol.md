> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattrprotocol](https://developer.apple.com/documentation/security/ksecattrprotocol)

# kSecAttrProtocol (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the item’s protocol.

## Declaration

```swift
let kSecAttrProtocol: CFString
```

## Mentioned In

- [Adding a password to the keychain](adding-a-password-to-the-keychain.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFString](../corefoundation/cfstring.md) and denotes the protocol for this item (see [Protocol Values](item-attribute-keys-and-values.md#Protocol-Values)). Items of class [kSecClassInternetPassword](ksecclassinternetpassword.md) have this attribute.

> **Note**

>  For compatibility with earlier Keychain APIs, functions in [Keychain services](keychain-services.md) accept a [CFNumber](../corefoundation/cfnumber.md) for the protocol. The number is a 32-bit integer that encodes the protocol value as a `FourCharCode`. In your code, use a [CFString](../corefoundation/cfstring.md) with one of the values from [Protocol Values](item-attribute-keys-and-values.md#Protocol-Values) instead of a number.

# kSecAttrProtocol (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the item’s protocol.

## Declaration

```objectivec
extern CFStringRef const kSecAttrProtocol;
```

## Mentioned In

- [Adding a password to the keychain](adding-a-password-to-the-keychain.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFStringRef](../corefoundation/cfstring.md) and denotes the protocol for this item (see [Protocol Values](item-attribute-keys-and-values.md#Protocol-Values)). Items of class [kSecClassInternetPassword](ksecclassinternetpassword.md) have this attribute.

> **Note**

>  For compatibility with earlier Keychain APIs, functions in [Keychain services](keychain-services.md) accept a [CFNumberRef](../corefoundation/cfnumber.md) for the protocol. The number is a 32-bit integer that encodes the protocol value as a `FourCharCode`. In your code, use a [CFStringRef](../corefoundation/cfstring.md) with one of the values from [Protocol Values](item-attribute-keys-and-values.md#Protocol-Values) instead of a number.
