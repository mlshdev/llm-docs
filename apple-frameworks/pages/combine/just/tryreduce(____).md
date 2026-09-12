> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/just/tryreduce(_:_:)](https://developer.apple.com/documentation/combine/just/tryreduce(_:_:))

# tryReduce(\_:\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func tryReduce<T>(_ initialResult: T, _ nextPartialResult: (T, Output) throws -> T) -> Result<T, any Error>.Publisher
```

## See Also

### Reducing elements

- [collect()](collect%28%29.md)
- [ignoreOutput()](ignoreoutput%28%29.md)
- [reduce(\_:\_:)](reduce%28____%29.md)
