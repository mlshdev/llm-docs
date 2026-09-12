> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/range/subscript(_:)-358vm](https://developer.apple.com/documentation/swift/range/subscript(_:)-358vm)

# subscript(\_:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accesses the subsequence bounded by the given range.

## Declaration

```swift
subscript(bounds: Range<Range<Bound>.Index>) -> Range<Bound> { get }
```

## Parameters

- `bounds`: A range of the range’s indices. The upper and lower bounds of the `bounds` range must be valid indices of the collection.
