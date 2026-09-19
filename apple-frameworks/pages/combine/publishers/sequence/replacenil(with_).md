> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/publishers/sequence/replacenil(with:)

# replaceNil(with:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func replaceNil<T>(with output: T) -> Publishers.Sequence<[Publishers.Sequence<Elements, Failure>.Output], Failure> where Elements.Element == T?
```

## See Also

### Mapping elements

- [map(\_:)](map%28__%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [scan(\_:\_:)](scan%28____%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [setFailureType(to:)](setfailuretype%28to_%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
