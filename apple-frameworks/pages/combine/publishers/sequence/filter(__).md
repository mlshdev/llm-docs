> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/publishers/sequence/filter(_:)

# filter(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func filter(_ isIncluded: (Publishers.Sequence<Elements, Failure>.Output) -> Bool) -> Publishers.Sequence<[Publishers.Sequence<Elements, Failure>.Output], Failure>
```

## See Also

### Filtering elements

- [compactMap(\_:)](compactmap%28__%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [removeDuplicates()](removeduplicates%28%29.md): Conforms when `Elements` conforms to `Sequence`, `Failure` conforms to `Error`, and `Elements.Element` conforms to `Equatable`.
