> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/composedtabulartransformer](https://developer.apple.com/documentation/createmlcomponents/composedtabulartransformer)

# ComposedTabularTransformer

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A transformer that composes two tabular transformers by applying them one after the other.

## Declaration

```swift
struct ComposedTabularTransformer<Inner, Outer> where Inner : TabularTransformer, Outer : TabularTransformer
```

<a id="overview"></a>

## Overview

The result of this transformer is equivalent to invoking `outer(inner(x))` on an input `x`,

## Topics

### Creating the transformer

- [init(\_:\_:)](composedtabulartransformer/init%28____%29.md): Creates a composed tabular transformer from two tabular transformers.

### Getting the properties

- [inner](composedtabulartransformer/inner.md): The inner transformer.
- [outer](composedtabulartransformer/outer.md): The outer transformer.

### Applying a transformation

- [applied(to:eventHandler:)](composedtabulartransformer/applied%28to_eventhandler_%29.md): Performs the composed transformation on a single input.

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
- [TabularTransformer](tabulartransformer.md)
- [Transformer](transformer.md)

## See Also

### Composition

- [ComposedTransformer](composedtransformer.md): A transformer that composes two transformers by applying them one after the other.
- [ComposedTemporalTransformer](composedtemporaltransformer.md): A temporal transformer that composes two temporal transformers by applying them one after the other.
