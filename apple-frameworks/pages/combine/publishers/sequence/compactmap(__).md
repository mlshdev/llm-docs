> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/publishers/sequence/compactmap(_:)

# compactMap(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func compactMap<T>(_ transform: (Publishers.Sequence<Elements, Failure>.Output) -> T?) -> Publishers.Sequence<[T], Failure>
```

## See Also

### Filtering elements

- [filter(\_:)](filter%28__%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [removeDuplicates()](removeduplicates%28%29.md): Conforms when `Elements` conforms to `Sequence`, `Failure` conforms to `Error`, and `Elements.Element` conforms to `Equatable`.
