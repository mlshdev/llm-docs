> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/composedtransformer](https://developer.apple.com/documentation/createmlcomponents/composedtransformer)

# ComposedTransformer

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A transformer that composes two transformers by applying them one after the other.

## Declaration

```swift
struct ComposedTransformer<Inner, Outer> where Inner : Transformer, Outer : Transformer, Inner.Output == Outer.Input
```

<a id="overview"></a>

## Overview

The inner transformer’s output must match the outer transformer input. The result of this transformer is equivalent to invoking `outer(inner(x))` on an input `x`,

## Topics

### Creating the transformer

- [init(\_:\_:)](composedtransformer/init%28____%29.md): Creates a transformer composition from two transformers.

### Getting the properties

- [inner](composedtransformer/inner.md): The inner transformer.
- [outer](composedtransformer/outer.md): The outer transformer.

### Performing the transformation

- [applied(to:eventHandler:)](composedtransformer/applied%28to_eventhandler_%29.md): Performs the composed transformation on a single input.
- [ComposedTransformer.Input](composedtransformer/input.md): The input type.
- [ComposedTransformer.Intermediate](composedtransformer/intermediate.md): The intermediate type.
- [ComposedTransformer.Output](composedtransformer/output.md): The output type.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Transformer](transformer.md)

## See Also

### Composition

- [ComposedTemporalTransformer](composedtemporaltransformer.md): A temporal transformer that composes two temporal transformers by applying them one after the other.
- [ComposedTabularTransformer](composedtabulartransformer.md): A transformer that composes two tabular transformers by applying them one after the other.
