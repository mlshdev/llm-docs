> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/publishers/removeduplicates/predicate

# predicate

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The predicate closure used to evaluate whether two elements are duplicates.

## Declaration

```swift
let predicate: (Publishers.RemoveDuplicates<Upstream>.Output, Publishers.RemoveDuplicates<Upstream>.Output) -> Bool
```

## See Also

### Inspecting publisher properties

- [upstream](upstream.md): The publisher from which this publisher receives elements.
