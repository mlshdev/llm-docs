> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/collection/trimprefix(_:)](https://developer.apple.com/documentation/swift/collection/trimprefix(_:))

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
