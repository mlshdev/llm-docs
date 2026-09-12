> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/sequence/removeduplicates()](https://developer.apple.com/documentation/combine/publishers/sequence/removeduplicates())

# removeDuplicates()

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func removeDuplicates() -> Publishers.Sequence<[Publishers.Sequence<Elements, Failure>.Output], Failure>
```

## See Also

### Filtering elements

- [filter(\_:)](filter%28__%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [compactMap(\_:)](compactmap%28__%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
