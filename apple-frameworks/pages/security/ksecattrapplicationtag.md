> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattrapplicationtag](https://developer.apple.com/documentation/security/ksecattrapplicationtag)

# kSecAttrApplicationTag (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the item’s private tag.

## Declaration

```swift
let kSecAttrApplicationTag: CFString
```

## Mentioned In

- [Generating New Cryptographic Keys](generating-new-cryptographic-keys.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFData](../corefoundation/cfdata.md) and contains private tag data.

On key creation, if not explicitly specified, this attribute defaults to `NULL`.

# kSecAttrApplicationTag (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the item’s private tag.

## Declaration

```objectivec
extern CFStringRef const kSecAttrApplicationTag;
```

## Mentioned In

- [Generating New Cryptographic Keys](generating-new-cryptographic-keys.md)

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFDataRef](../corefoundation/cfdata.md) and contains private tag data.

On key creation, if not explicitly specified, this attribute defaults to `NULL`.
