> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/map/trymap(_:)](https://developer.apple.com/documentation/combine/publishers/map/trymap(_:))

# tryMap(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func tryMap<T>(_ transform: @escaping (Output) throws -> T) -> Publishers.TryMap<Upstream, T>
```

## See Also

### Mapping elements

- [map(\_:)](map%28__%29.md): Conforms when `Upstream` conforms to `Publisher`.
