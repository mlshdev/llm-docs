> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattrgeneric](https://developer.apple.com/documentation/security/ksecattrgeneric)

# kSecAttrGeneric (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the item’s user-defined attributes.

## Declaration

```swift
let kSecAttrGeneric: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFData](../corefoundation/cfdata.md) and contains a user-defined attribute. Items of class [kSecClassGenericPassword](ksecclassgenericpassword.md) have this attribute.

# kSecAttrGeneric (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the item’s user-defined attributes.

## Declaration

```objectivec
extern CFStringRef const kSecAttrGeneric;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFDataRef](../corefoundation/cfdata.md) and contains a user-defined attribute. Items of class [kSecClassGenericPassword](ksecclassgenericpassword.md) have this attribute.
