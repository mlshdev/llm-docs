> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattrauthenticationtype](https://developer.apple.com/documentation/security/ksecattrauthenticationtype)

# kSecAttrAuthenticationType (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the item’s authentication scheme.

## Declaration

```swift
let kSecAttrAuthenticationType: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFString](../corefoundation/cfstring.md) and denotes the authentication scheme for this item (see [Authentication Type Values](item-attribute-keys-and-values.md#Authentication-Type-Values)).

> **Note**

>  For compatibility with earlier Keychain APIs, functions in [Keychain services](keychain-services.md) accept a [CFNumber](../corefoundation/cfnumber.md) for the authentication scheme. The number is a 32-bit integer that encodes the authentication scheme as a `FourCharCode`. In your code, use a [CFString](../corefoundation/cfstring.md) with one of the values from [Authentication Type Values](item-attribute-keys-and-values.md#Authentication-Type-Values) instead of a number.

# kSecAttrAuthenticationType (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the item’s authentication scheme.

## Declaration

```objectivec
extern CFStringRef const kSecAttrAuthenticationType;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFStringRef](../corefoundation/cfstring.md) and denotes the authentication scheme for this item (see [Authentication Type Values](item-attribute-keys-and-values.md#Authentication-Type-Values)).

> **Note**

>  For compatibility with earlier Keychain APIs, functions in [Keychain services](keychain-services.md) accept a [CFNumberRef](../corefoundation/cfnumber.md) for the authentication scheme. The number is a 32-bit integer that encodes the authentication scheme as a `FourCharCode`. In your code, use a [CFStringRef](../corefoundation/cfstring.md) with one of the values from [Authentication Type Values](item-attribute-keys-and-values.md#Authentication-Type-Values) instead of a number.
