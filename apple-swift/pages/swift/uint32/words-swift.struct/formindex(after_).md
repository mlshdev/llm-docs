> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/uint32/words-swift.struct/formindex(after:)

# formIndex(after:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces the given index with its successor.

## Declaration

```swift
func formIndex(after i: inout Self.Index)
```

## Parameters

- `i`: A valid index of the collection. `i` must be less than `endIndex`.
