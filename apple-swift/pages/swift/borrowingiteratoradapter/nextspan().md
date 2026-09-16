> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/borrowingiteratoradapter/nextspan()

# nextSpan()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns a span over the next group of elements that are ready to by visited, up to the specifed maximum.

## Declaration

```swift
@export(implementation) mutating func nextSpan() throws(Self.Failure) -> Span<Self.Element>
```
