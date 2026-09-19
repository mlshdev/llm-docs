> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/just/max(by:)

# max(by:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func max(by areInIncreasingOrder: (Output, Output) -> Bool) -> Just<Output>
```

## See Also

### Applying mathematical operations on elements

- [count()](count%28%29.md)
- [max()](max%28%29.md): Conforms when `Output` conforms to `Comparable`.
- [min()](min%28%29.md): Conforms when `Output` conforms to `Comparable`.
- [min(by:)](min%28by_%29.md)
