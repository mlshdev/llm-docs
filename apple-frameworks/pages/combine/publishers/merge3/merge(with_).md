> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/merge3/merge(with:)](https://developer.apple.com/documentation/combine/publishers/merge3/merge(with:))

# merge(with:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func merge<P>(with other: P) -> Publishers.Merge4<A, B, C, P> where P : Publisher, C.Failure == P.Failure, C.Output == P.Output
```

## See Also

### Merging elements

- [merge(with:\_:)](merge%28with___%29.md)
- [merge(with:\_:\_:)](merge%28with_____%29.md)
- [merge(with:\_:\_:\_:)](merge%28with_______%29.md)
- [merge(with:\_:\_:\_:\_:)](merge%28with_________%29.md)
