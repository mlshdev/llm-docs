> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/bidirectionalcollection/firstrange(of:)-5sum7](https://developer.apple.com/documentation/swift/bidirectionalcollection/firstrange(of:)-5sum7)

# firstRange(of:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Finds and returns the range of the first occurrence of a given collection within this collection.

## Declaration

```swift
func firstRange<C>(of other: C) -> Range<Self.Index>? where C : Collection, Self.Element == C.Element
```

## Parameters

- `other`: The collection to search for.

<a id="return-value"></a>

## Return Value

A range in the collection of the first occurrence of `sequence`. Returns `nil` if `sequence` is not found.
