> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/just/output(in:)](https://developer.apple.com/documentation/combine/just/output(in:))

# output(in:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func output<R>(in range: R) -> Optional<Output>.Publisher where R : RangeExpression, R.Bound == Int
```

## See Also

### Selecting specific elements

- [first()](first%28%29.md)
- [first(where:)](first%28where_%29.md)
- [last()](last%28%29.md)
- [last(where:)](last%28where_%29.md)
- [output(at:)](output%28at_%29.md)
