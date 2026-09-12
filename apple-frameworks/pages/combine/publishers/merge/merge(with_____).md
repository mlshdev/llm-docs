> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/merge/merge(with:_:_:)](https://developer.apple.com/documentation/combine/publishers/merge/merge(with:_:_:))

# merge(with:\_:\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func merge<Z, Y, X>(with z: Z, _ y: Y, _ x: X) -> Publishers.Merge5<A, B, Z, Y, X> where Z : Publisher, Y : Publisher, X : Publisher, B.Failure == Z.Failure, B.Output == Z.Output, Z.Failure == Y.Failure, Z.Output == Y.Output, Y.Failure == X.Failure, Y.Output == X.Output
```

## See Also

### Merging elements

- [merge(with:)](merge%28with_%29.md)
- [merge(with:\_:)](merge%28with___%29.md)
- [merge(with:\_:\_:\_:)](merge%28with_______%29.md)
- [merge(with:\_:\_:\_:\_:)](merge%28with_________%29.md)
- [merge(with:\_:\_:\_:\_:\_:)](merge%28with___________%29.md)
