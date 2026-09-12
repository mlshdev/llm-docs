> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/transformingattributes(_:_:_:_:_:_:)-9hppo](https://developer.apple.com/documentation/foundation/attributedstring/transformingattributes(_:_:_:_:_:_:)-9hppo)

# transformingAttributes(\_:\_:\_:\_:\_:\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns an attributed string created by calling a closure that transforms five attributes, which key paths identify, of a source attributed string.

## Declaration

```swift
@preconcurrency func transformingAttributes<K1, K2, K3, K4, K5>(_ k: KeyPath<AttributeDynamicLookup, K1>, _ k2: KeyPath<AttributeDynamicLookup, K2>, _ k3: KeyPath<AttributeDynamicLookup, K3>, _ k4: KeyPath<AttributeDynamicLookup, K4>, _ k5: KeyPath<AttributeDynamicLookup, K5>, _ c: (inout AttributedString.SingleAttributeTransformer<K1>, inout AttributedString.SingleAttributeTransformer<K2>, inout AttributedString.SingleAttributeTransformer<K3>, inout AttributedString.SingleAttributeTransformer<K4>, inout AttributedString.SingleAttributeTransformer<K5>) -> Void) -> AttributedString where K1 : AttributedStringKey, K2 : AttributedStringKey, K3 : AttributedStringKey, K4 : AttributedStringKey, K5 : AttributedStringKey, K1.Value : Sendable, K2.Value : Sendable, K3.Value : Sendable, K4.Value : Sendable, K5.Value : Sendable
```

## Parameters

- `k`: The key path to an [AttributedStringKey](../attributedstringkey.md) that identifies an attribute to transform.
- `k2`: The key path to an [AttributedStringKey](../attributedstringkey.md) that identifies a second attribute to transform.
- `k3`: The key path to an [AttributedStringKey](../attributedstringkey.md) that identifies a third attribute to transform.
- `k4`: The key path to an [AttributedStringKey](../attributedstringkey.md) that identifies a fourth attribute to transform.
- `k5`: The key path to an [AttributedStringKey](../attributedstringkey.md) that identifies a fifth attribute to transform.
- `c`: A closure that receives five [AttributedString.SingleAttributeTransformer](singleattributetransformer.md) instances that you use to access and alter the attributes’ ranges and values.

<a id="return-value"></a>

## Return Value

An attributed string, with the applied transformations to the given attributes.

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
- [AttributedString.SingleAttributeTransformer](singleattributetransformer.md): A type that transforms an attribute by altering its range or value, or by replacing it entirely.
