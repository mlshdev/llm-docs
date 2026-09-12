> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattrkeytype](https://developer.apple.com/documentation/security/ksecattrkeytype)

# kSecAttrKeyType (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the item’s algorithm.

## Declaration

```swift
let kSecAttrKeyType: CFString
```

## Mentioned In

- [Generating New Cryptographic Keys](generating-new-cryptographic-keys.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFNumber](../corefoundation/cfnumber.md) and indicates the algorithm associated with this cryptographic key. See [Key Type Values](item-attribute-keys-and-values.md#Key-Type-Values) for a list of valid values.

# kSecAttrKeyType (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the item’s algorithm.

## Declaration

```objectivec
extern CFStringRef const kSecAttrKeyType;
```

## Mentioned In

- [Generating New Cryptographic Keys](generating-new-cryptographic-keys.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFNumberRef](../corefoundation/cfnumber.md) and indicates the algorithm associated with this cryptographic key. See [Key Type Values](item-attribute-keys-and-values.md#Key-Type-Values) for a list of valid values.
