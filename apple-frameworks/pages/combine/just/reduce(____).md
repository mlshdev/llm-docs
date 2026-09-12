> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/just/reduce(_:_:)](https://developer.apple.com/documentation/combine/just/reduce(_:_:))

# reduce(\_:\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func reduce<T>(_ initialResult: T, _ nextPartialResult: (T, Output) -> T) -> Result<T, Just<Output>.Failure>.Publisher
```

## See Also

### Reducing elements

- [collect()](collect%28%29.md)
- [ignoreOutput()](ignoreoutput%28%29.md)
- [tryReduce(\_:\_:)](tryreduce%28____%29.md)
