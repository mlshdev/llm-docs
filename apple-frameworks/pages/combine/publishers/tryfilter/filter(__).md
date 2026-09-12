> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/tryfilter/filter(_:)](https://developer.apple.com/documentation/combine/publishers/tryfilter/filter(_:))

# filter(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func filter(_ isIncluded: @escaping (Publishers.TryFilter<Upstream>.Output) -> Bool) -> Publishers.TryFilter<Upstream>
```

## See Also

### Filtering elements

- [tryFilter(\_:)](tryfilter%28__%29.md): Conforms when `Upstream` conforms to `Publisher`.
