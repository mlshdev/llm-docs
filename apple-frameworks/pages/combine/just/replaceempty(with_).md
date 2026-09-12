> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/just/replaceempty(with:)](https://developer.apple.com/documentation/combine/just/replaceempty(with:))

# replaceEmpty(with:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func replaceEmpty(with output: Output) -> Just<Output>
```

## See Also

### Filtering elements

- [filter(\_:)](filter%28__%29.md)
- [compactMap(\_:)](compactmap%28__%29.md)
- [removeDuplicates()](removeduplicates%28%29.md): Conforms when `Output` conforms to `Equatable`.
- [removeDuplicates(by:)](removeduplicates%28by_%29.md)
- [tryRemoveDuplicates(by:)](tryremoveduplicates%28by_%29.md)
- [replaceError(with:)](replaceerror%28with_%29.md)
