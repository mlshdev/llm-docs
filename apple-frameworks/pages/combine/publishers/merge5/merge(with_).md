> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/publishers/merge5/merge(with:)

# merge(with:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func merge<P>(with other: P) -> Publishers.Merge6<A, B, C, D, E, P> where P : Publisher, E.Failure == P.Failure, E.Output == P.Output
```

## See Also

### Merging elements

- [merge(with:\_:)](merge%28with___%29.md)
- [merge(with:\_:\_:)](merge%28with_____%29.md)
