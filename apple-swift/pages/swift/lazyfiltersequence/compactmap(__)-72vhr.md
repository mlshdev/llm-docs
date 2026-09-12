> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/lazyfiltersequence/compactmap(_:)-72vhr](https://developer.apple.com/documentation/swift/lazyfiltersequence/compactmap(_:)-72vhr)

# compactMap(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the non-`nil` results of mapping the given transformation over this sequence.

## Declaration

```swift
func compactMap<ElementOfResult>(_ transform: @escaping (Self.Elements.Element) -> ElementOfResult?) -> LazyMapSequence<LazyFilterSequence<LazyMapSequence<Self.Elements, ElementOfResult?>>, ElementOfResult>
```

## Parameters

- `transform`: A closure that accepts an element of this sequence as its argument and returns an optional value.

<a id="discussion"></a>

## Discussion

Use this method to receive a sequence of non-optional values when your transformation produces an optional value.

> **Complexity**

> O(1)
