> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/lazysequenceprotocol/elements-6570c](https://developer.apple.com/documentation/swift/lazysequenceprotocol/elements-6570c)

# elements

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A sequence containing the same elements as this one, possibly with a simpler type.

## Declaration

```swift
var elements: Self.Elements { get }
```

<a id="discussion"></a>

## Discussion

When implementing lazy operations, wrapping `elements` instead of `self` can prevent result types from growing an extra `LazySequence` layer.

Note: this property need not be implemented by conforming types, it has a default implementation in a protocol extension that just returns `self`.

## Default Implementations

### LazySequenceProtocol Implementations

- [elements](elements-3xrx.md): Conforms when `Self` is `Self.Elements`. Identical to `self`.
