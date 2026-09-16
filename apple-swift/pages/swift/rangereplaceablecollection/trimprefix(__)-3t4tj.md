> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/rangereplaceablecollection/trimprefix(_:)-3t4tj

# trimPrefix(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Removes `prefix` from the start of the collection.

## Declaration

```swift
mutating func trimPrefix<Prefix>(_ prefix: Prefix) where Prefix : Sequence, Self.Element == Prefix.Element
```

## Parameters

- `prefix`: The collection to remove from this collection.
