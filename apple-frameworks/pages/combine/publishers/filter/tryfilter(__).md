> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/publishers/filter/tryfilter(_:)

# tryFilter(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func tryFilter(_ isIncluded: @escaping (Publishers.Filter<Upstream>.Output) throws -> Bool) -> Publishers.TryFilter<Upstream>
```

## See Also

### Filtering elements

- [filter(\_:)](filter%28__%29.md): Conforms when `Upstream` conforms to `Publisher`.
