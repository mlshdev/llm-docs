> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/lazymapsequence/joined()-3sfyr

# joined()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a lazy sequence that concatenates the elements of this sequence of sequences.

## Declaration

```swift
func joined() -> LazySequence<FlattenSequence<Self.Elements>>
```
