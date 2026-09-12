> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/merge/merge(with:)](https://developer.apple.com/documentation/combine/publishers/merge/merge(with:))

# merge(with:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func merge<P>(with other: P) -> Publishers.Merge3<A, B, P> where P : Publisher, B.Failure == P.Failure, B.Output == P.Output
```

## See Also

### Merging elements

- [merge(with:\_:)](merge%28with___%29.md)
- [merge(with:\_:\_:)](merge%28with_____%29.md)
- [merge(with:\_:\_:\_:)](merge%28with_______%29.md)
- [merge(with:\_:\_:\_:\_:)](merge%28with_________%29.md)
- [merge(with:\_:\_:\_:\_:\_:)](merge%28with___________%29.md)
