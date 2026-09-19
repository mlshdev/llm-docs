> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/dataprotocol/regions-swift.associatedtype

# Regions

**Framework:** Foundation  
**Kind:** Associated Type  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that represents a collection of contiguous parts that make up the type conforming to a data protocol.

## Declaration

```swift
associatedtype Regions : BidirectionalCollection where Self.Regions.Element : ContiguousBytes, Self.Regions.Element : DataProtocol, Self.Regions.Element.SubSequence : ContiguousBytes
```

## See Also

### Accessing Backing Storage

- [regions](regions-swift.property.md): A collection of buffers that make up the whole of the type conforming to a data protocol.
