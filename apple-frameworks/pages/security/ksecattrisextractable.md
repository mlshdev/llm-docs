> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattrisextractable](https://developer.apple.com/documentation/security/ksecattrisextractable)

# kSecAttrIsExtractable (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the item’s extractability.

## Declaration

```swift
let kSecAttrIsExtractable: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFBoolean](../corefoundation/cfboolean.md) and indicates whether the item can be exported from its keychain. Items of class [kSecClassKey](ksecclasskey.md) have this attribute.

# kSecAttrIsExtractable (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the item’s extractability.

## Declaration

```objectivec
extern CFStringRef const kSecAttrIsExtractable;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFBooleanRef](../corefoundation/cfboolean.md) and indicates whether the item can be exported from its keychain. Items of class [kSecClassKey](ksecclasskey.md) have this attribute.
