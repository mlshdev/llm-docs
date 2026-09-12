> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/collection/trimmingprefix(_:)](https://developer.apple.com/documentation/swift/collection/trimmingprefix(_:))

# trimmingPrefix(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a new collection of the same type by removing `prefix` from the start of the collection.

## Declaration

```swift
func trimmingPrefix<Prefix>(_ prefix: Prefix) -> Self.SubSequence where Prefix : Sequence, Self.Element == Prefix.Element
```

## Parameters

- `prefix`: The collection to remove from this collection.

<a id="return-value"></a>

## Return Value

A collection containing the elements of the collection that are not removed by `prefix`.
