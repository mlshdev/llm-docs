> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/sequence/max(by:)](https://developer.apple.com/documentation/combine/publishers/sequence/max(by:))

# max(by:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func max(by areInIncreasingOrder: (Publishers.Sequence<Elements, Failure>.Output, Publishers.Sequence<Elements, Failure>.Output) -> Bool) -> Optional<Publishers.Sequence<Elements, Failure>.Output>.Publisher
```

## See Also

### Applying mathematical operations on elements

- [count()](count%28%29-5rrw2.md): Conforms when `Elements` conforms to `RandomAccessCollection` and `Failure` is `Never`.
- [count()](count%28%29-5hb52.md): Conforms when `Elements` conforms to `RandomAccessCollection` and `Failure` conforms to `Error`.
- [count()](count%28%29-b8ct.md): Conforms when `Elements` conforms to `Collection` and `Failure` conforms to `Error`.
- [max()](max%28%29.md): Conforms when `Elements` conforms to `Sequence`, `Failure` is `Never`, and `Elements.Element` conforms to `Comparable`.
- [min()](min%28%29.md): Conforms when `Elements` conforms to `Sequence`, `Failure` is `Never`, and `Elements.Element` conforms to `Comparable`.
- [min(by:)](min%28by_%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` is `Never`.
