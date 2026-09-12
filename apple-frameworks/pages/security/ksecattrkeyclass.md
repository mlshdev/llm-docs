> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattrkeyclass](https://developer.apple.com/documentation/security/ksecattrkeyclass)

# kSecAttrKeyClass (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the item’s cryptographic key class.

## Declaration

```swift
let kSecAttrKeyClass: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFTypeRef](../corefoundation/cftyperef.md) and specifies a type of cryptographic key. Possible values are listed in [Key Class Values](item-attribute-keys-and-values.md#Key-Class-Values). Read only.

> **Note**

>  Don’t confuse this attribute with the more general [kSecClass](ksecclass.md) attribute that indicates an item’s class (for example password, certificate, or cryptographic key). The [kSecAttrKeyClass](ksecattrkeyclass.md) attribute described here applies only to items of class [kSecClassKey](ksecclasskey.md), indicating what category a cryptographic key fits into (for example, public, private, or symmetric).

# kSecAttrKeyClass (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the item’s cryptographic key class.

## Declaration

```objectivec
extern CFStringRef const kSecAttrKeyClass;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFTypeRef](../corefoundation/cftyperef.md) and specifies a type of cryptographic key. Possible values are listed in [Key Class Values](item-attribute-keys-and-values.md#Key-Class-Values). Read only.

> **Note**

>  Don’t confuse this attribute with the more general [kSecClass](ksecclass.md) attribute that indicates an item’s class (for example password, certificate, or cryptographic key). The [kSecAttrKeyClass](ksecattrkeyclass.md) attribute described here applies only to items of class [kSecClassKey](ksecclasskey.md), indicating what category a cryptographic key fits into (for example, public, private, or symmetric).
