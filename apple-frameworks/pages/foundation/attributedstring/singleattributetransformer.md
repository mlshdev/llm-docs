> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/singleattributetransformer](https://developer.apple.com/documentation/foundation/attributedstring/singleattributetransformer)

# AttributedString.SingleAttributeTransformer

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that transforms an attribute by altering its range or value, or by replacing it entirely.

## Declaration

```swift
@preconcurrency struct SingleAttributeTransformer<T> where T : AttributedStringKey, T.Value : Sendable
```

<a id="overview"></a>

## Overview

For simple transformations, the closure you provide to the `transformingAttributes(…)` methods of [AttributedString](../attributedstring.md) can use this instance to change the attribute’s value. You can also use this instance to change the range of the string that the attribute applies to. To completely replace the attribute with an attribute of a different type, use [replace(with:value:)](singleattributetransformer/replace%28with_value_%29-6bn0e.md).

## Topics

### Accessing the Attribute’s Range

- [range](singleattributetransformer/range.md): The range of the attribute in the attributed string.

### Accessing the Attribute’s Value

- [value](singleattributetransformer/value.md): The value of the attribute.

### Replacing Attributes

- [replace(with:value:)](singleattributetransformer/replace%28with_value_%29-6bn0e.md): Replaces an attribute with a different attribute.
- [replace(with:value:)](singleattributetransformer/replace%28with_value_%29-xg8b.md): Replaces an attribute with a different attribute that a key path identifies.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Transforming Attributes

- [transformingAttributes(\_:\_:)](transformingattributes%28____%29-9prm2.md): Returns an attributed string by calling a closure that transforms one attribute of a source attributed string.
- [transformingAttributes(\_:\_:)](transformingattributes%28____%29-64qnl.md): Returns an attributed string by calling a closure that transforms one attribute, which a key path identifies, of a source attributed string.
- [transformingAttributes(\_:\_:\_:)](transformingattributes%28______%29-7kw1o.md): Returns an attributed string by calling a closure that transforms two attributes of a source attributed string.
- [transformingAttributes(\_:\_:\_:)](transformingattributes%28______%29-8gt2n.md): Returns an attributed string created by calling a closure that transforms two attributes, which key paths identify, of a source attributed string.
- [transformingAttributes(\_:\_:\_:\_:)](transformingattributes%28________%29-4owv7.md): Returns an attributed string by calling a closure that transforms three attributes of a source attributed string.
- [transformingAttributes(\_:\_:\_:\_:)](transformingattributes%28________%29-5xmlf.md): Returns an attributed string by calling a closure that transforms three attributes, which key paths identify, of a source attributed string.
- [transformingAttributes(\_:\_:\_:\_:\_:)](transformingattributes%28__________%29-9uodg.md): Returns an attributed string by calling a closure that transforms four attributes of a source attributed string.
- [transformingAttributes(\_:\_:\_:\_:\_:)](transformingattributes%28__________%29-all0.md): Returns an attributed string created by calling a closure that transforms four attributes, which key paths identify, of a source attributed string.
- [transformingAttributes(\_:\_:\_:\_:\_:\_:)](transformingattributes%28____________%29-3i7ac.md): Returns an attributed string created by calling a closure that transforms five attributes of a source attributed string.
- [transformingAttributes(\_:\_:\_:\_:\_:\_:)](transformingattributes%28____________%29-9hppo.md): Returns an attributed string created by calling a closure that transforms five attributes, which key paths identify, of a source attributed string.
