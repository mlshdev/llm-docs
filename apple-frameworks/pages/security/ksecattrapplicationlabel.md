> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattrapplicationlabel](https://developer.apple.com/documentation/security/ksecattrapplicationlabel)

# kSecAttrApplicationLabel (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the item’s application label.

## Declaration

```swift
let kSecAttrApplicationLabel: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFData](../corefoundation/cfdata.md) and contains a label for this item. This attribute is different from the [kSecAttrLabel](ksecattrlabel.md) attribute, which is intended to be human-readable. Instead, this attribute is used to look up a key programmatically; in particular, for keys of class [kSecAttrKeyClassPublic](ksecattrkeyclasspublic.md) and [kSecAttrKeyClassPrivate](ksecattrkeyclassprivate.md), the value of this attribute is the hash of the public key.

# kSecAttrApplicationLabel (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the item’s application label.

## Declaration

```objectivec
extern CFStringRef const kSecAttrApplicationLabel;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFDataRef](../corefoundation/cfdata.md) and contains a label for this item. This attribute is different from the [kSecAttrLabel](ksecattrlabel.md) attribute, which is intended to be human-readable. Instead, this attribute is used to look up a key programmatically; in particular, for keys of class [kSecAttrKeyClassPublic](ksecattrkeyclasspublic.md) and [kSecAttrKeyClassPrivate](ksecattrkeyclassprivate.md), the value of this attribute is the hash of the public key.
