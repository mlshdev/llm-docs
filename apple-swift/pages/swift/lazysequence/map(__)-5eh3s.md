> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/lazysequence/map(_:)-5eh3s

# map(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a `LazyMapSequence` over this `Sequence`.  The elements of the result are computed lazily, each time they are read, by calling `transform` function on a base element.

## Declaration

```swift
func map<U>(_ transform: @escaping (Self.Element) -> U) -> LazyMapSequence<Self.Elements, U>
```
