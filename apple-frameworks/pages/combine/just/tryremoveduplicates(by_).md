> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/just/tryremoveduplicates(by:)](https://developer.apple.com/documentation/combine/just/tryremoveduplicates(by:))

# tryRemoveDuplicates(by:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func tryRemoveDuplicates(by predicate: (Output, Output) throws -> Bool) -> Result<Output, any Error>.Publisher
```

## See Also

### Filtering elements

- [filter(\_:)](filter%28__%29.md)
- [compactMap(\_:)](compactmap%28__%29.md)
- [removeDuplicates()](removeduplicates%28%29.md): Conforms when `Output` conforms to `Equatable`.
- [removeDuplicates(by:)](removeduplicates%28by_%29.md)
- [replaceEmpty(with:)](replaceempty%28with_%29.md)
- [replaceError(with:)](replaceerror%28with_%29.md)
