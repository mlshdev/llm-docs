> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/composedtemporaltransformer](https://developer.apple.com/documentation/createmlcomponents/composedtemporaltransformer)

# ComposedTemporalTransformer

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A temporal transformer that composes two temporal transformers by applying them one after the other.

## Declaration

```swift
struct ComposedTemporalTransformer<Inner, Outer> where Inner : TemporalTransformer, Outer : TemporalTransformer, Inner.Output == Outer.Input
```

<a id="overview"></a>

## Overview

The inner transformer’s output must match the outer transformer input. The result of this transformer is equivalent to invoking `outer(inner(x))` on an input `x`,

## Topics

### Creating the transformer

- [init(\_:\_:)](composedtemporaltransformer/init%28____%29.md): Creates a transformer composition from two temporal transformers.

### Getting the properties

- [inner](composedtemporaltransformer/inner.md): The inner transformer.
- [outer](composedtemporaltransformer/outer.md): The outer transformer.

### Applying a transformer

- [applied(to:eventHandler:)](composedtemporaltransformer/applied%28to_eventhandler_%29.md): Performs the composed transformation on an input sequence.
- [ComposedTemporalTransformer.Intermediate](composedtemporaltransformer/intermediate.md): The intermediate type.
- [ComposedTemporalTransformer.Input](composedtemporaltransformer/input.md): The input type.
- [ComposedTemporalTransformer.Output](composedtemporaltransformer/output.md): The output type.
- [ComposedTemporalTransformer.OutputSequence](composedtemporaltransformer/outputsequence.md): The output sequence type.

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
- [TemporalTransformer](temporaltransformer.md)

## See Also

### Composition

- [ComposedTransformer](composedtransformer.md): A transformer that composes two transformers by applying them one after the other.
- [ComposedTabularTransformer](composedtabulartransformer.md): A transformer that composes two tabular transformers by applying them one after the other.
