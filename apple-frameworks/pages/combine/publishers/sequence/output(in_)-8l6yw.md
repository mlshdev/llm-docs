> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/sequence/output(in:)-8l6yw](https://developer.apple.com/documentation/combine/publishers/sequence/output(in:)-8l6yw)

# output(in:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func output(in range: Range<Elements.Index>) -> Publishers.Sequence<[Publishers.Sequence<Elements, Failure>.Output], Failure>
```

## See Also

### Selecting specific elements

- [first()](first%28%29.md): Conforms when `Elements` conforms to `Collection` and `Failure` is `Never`.
- [first(where:)](first%28where_%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` is `Never`.
- [last()](last%28%29.md): Conforms when `Elements` conforms to `BidirectionalCollection` and `Failure` is `Never`.
- [last(where:)](last%28where_%29.md): Conforms when `Elements` conforms to `BidirectionalCollection` and `Failure` is `Never`.
- [output(at:)](output%28at_%29-3r7zo.md): Conforms when `Elements` conforms to `Collection` and `Failure` is `Never`.
- [output(at:)](output%28at_%29-9kto7.md): Conforms when `Elements` conforms to `RandomAccessCollection` and `Failure` is `Never`.
- [output(in:)](output%28in_%29-6g2zc.md): Conforms when `Elements` conforms to `RandomAccessCollection` and `Failure` conforms to `Error`.
