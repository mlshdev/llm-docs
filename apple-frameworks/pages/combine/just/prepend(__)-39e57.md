> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/just/prepend(_:)-39e57](https://developer.apple.com/documentation/combine/just/prepend(_:)-39e57)

# prepend(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func prepend<S>(_ elements: S) -> Publishers.Sequence<[Output], Just<Output>.Failure> where Output == S.Element, S : Sequence
```

## See Also

### Applying sequence operations to elements

- [dropFirst(\_:)](dropfirst%28__%29.md)
- [drop(while:)](drop%28while_%29.md)
- [append(\_:)](append%28__%29-7eyqj.md)
- [append(\_:)](append%28__%29-7sxlu.md)
- [prepend(\_:)](prepend%28__%29-7fg73.md)
- [prefix(\_:)](prefix%28__%29.md)
- [prefix(while:)](prefix%28while_%29.md)
