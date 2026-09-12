> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/sequence/output(at:)-3r7zo](https://developer.apple.com/documentation/combine/publishers/sequence/output(at:)-3r7zo)

# output(at:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func output(at index: Elements.Index) -> Optional<Publishers.Sequence<Elements, Failure>.Output>.Publisher
```

## See Also

### Selecting specific elements

- [first()](first%28%29.md): Conforms when `Elements` conforms to `Collection` and `Failure` is `Never`.
- [first(where:)](first%28where_%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` is `Never`.
- [last()](last%28%29.md): Conforms when `Elements` conforms to `BidirectionalCollection` and `Failure` is `Never`.
- [last(where:)](last%28where_%29.md): Conforms when `Elements` conforms to `BidirectionalCollection` and `Failure` is `Never`.
- [output(at:)](output%28at_%29-9kto7.md): Conforms when `Elements` conforms to `RandomAccessCollection` and `Failure` is `Never`.
- [output(in:)](output%28in_%29-6g2zc.md): Conforms when `Elements` conforms to `RandomAccessCollection` and `Failure` conforms to `Error`.
- [output(in:)](output%28in_%29-8l6yw.md): Conforms when `Elements` conforms to `Collection` and `Failure` conforms to `Error`.
