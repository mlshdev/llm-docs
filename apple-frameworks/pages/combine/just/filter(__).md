> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/just/filter(_:)

# filter(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func filter(_ isIncluded: (Output) -> Bool) -> Optional<Output>.Publisher
```

## See Also

### Filtering elements

- [compactMap(\_:)](compactmap%28__%29.md)
- [removeDuplicates()](removeduplicates%28%29.md): Conforms when `Output` conforms to `Equatable`.
- [removeDuplicates(by:)](removeduplicates%28by_%29.md)
- [tryRemoveDuplicates(by:)](tryremoveduplicates%28by_%29.md)
- [replaceEmpty(with:)](replaceempty%28with_%29.md)
- [replaceError(with:)](replaceerror%28with_%29.md)
