> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/transformingattributes(_:_:)-9prm2](https://developer.apple.com/documentation/foundation/attributedstring/transformingattributes(_:_:)-9prm2)

# transformingAttributes(\_:\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns an attributed string by calling a closure that transforms one attribute of a source attributed string.

## Declaration

```swift
@preconcurrency func transformingAttributes<K>(_ k: K.Type, _ c: (inout AttributedString.SingleAttributeTransformer<K>) -> Void) -> AttributedString where K : AttributedStringKey, K.Value : Sendable
```

## Parameters

- `k`: The [AttributedStringKey](../attributedstringkey.md) that identifies the attribute to transform.
- `c`: The closure that receives an [AttributedString.SingleAttributeTransformer](singleattributetransformer.md) that you use to access and alter the attribute’s range and value.

<a id="return-value"></a>

## Return Value

An attributed string with the applied transformation to the specified attribute.

## See Also

### Transforming Attributes

- [transformingAttributes(\_:\_:)](transformingattributes%28____%29-64qnl.md): Returns an attributed string by calling a closure that transforms one attribute, which a key path identifies, of a source attributed string.
- [transformingAttributes(\_:\_:\_:)](transformingattributes%28______%29-7kw1o.md): Returns an attributed string by calling a closure that transforms two attributes of a source attributed string.
- [transformingAttributes(\_:\_:\_:)](transformingattributes%28______%29-8gt2n.md): Returns an attributed string created by calling a closure that transforms two attributes, which key paths identify, of a source attributed string.
- [transformingAttributes(\_:\_:\_:\_:)](transformingattributes%28________%29-4owv7.md): Returns an attributed string by calling a closure that transforms three attributes of a source attributed string.
- [transformingAttributes(\_:\_:\_:\_:)](transformingattributes%28________%29-5xmlf.md): Returns an attributed string by calling a closure that transforms three attributes, which key paths identify, of a source attributed string.
- [transformingAttributes(\_:\_:\_:\_:\_:)](transformingattributes%28__________%29-9uodg.md): Returns an attributed string by calling a closure that transforms four attributes of a source attributed string.
- [transformingAttributes(\_:\_:\_:\_:\_:)](transformingattributes%28__________%29-all0.md): Returns an attributed string created by calling a closure that transforms four attributes, which key paths identify, of a source attributed string.
- [transformingAttributes(\_:\_:\_:\_:\_:\_:)](transformingattributes%28____________%29-3i7ac.md): Returns an attributed string created by calling a closure that transforms five attributes of a source attributed string.
- [transformingAttributes(\_:\_:\_:\_:\_:\_:)](transformingattributes%28____________%29-9hppo.md): Returns an attributed string created by calling a closure that transforms five attributes, which key paths identify, of a source attributed string.
- [AttributedString.SingleAttributeTransformer](singleattributetransformer.md): A type that transforms an attribute by altering its range or value, or by replacing it entirely.
