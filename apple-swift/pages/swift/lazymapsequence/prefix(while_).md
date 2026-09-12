> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/lazymapsequence/prefix(while:)](https://developer.apple.com/documentation/swift/lazymapsequence/prefix(while:))

# prefix(while:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a lazy sequence of the initial consecutive elements that satisfy `predicate`.

## Declaration

```swift
func prefix(while predicate: @escaping (Self.Elements.Element) -> Bool) -> LazyPrefixWhileSequence<Self.Elements>
```

## Parameters

- `predicate`: A closure that takes an element of the sequence as its argument and returns `true` if the element should be included or `false` otherwise. Once `predicate` returns `false` it will not be called again.
