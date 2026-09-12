> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/span/borrowingiterator/nextspan()](https://developer.apple.com/documentation/swift/span/borrowingiterator/nextspan())

# nextSpan()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns a span over the next group of elements that are ready to by visited, up to the specifed maximum.

## Declaration

```swift
mutating func nextSpan() throws(Self.Failure) -> Span<Self.Element>
```
