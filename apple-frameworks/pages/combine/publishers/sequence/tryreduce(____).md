> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/publishers/sequence/tryreduce(_:_:)

# tryReduce(\_:\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func tryReduce<T>(_ initialResult: T, _ nextPartialResult: @escaping (T, Publishers.Sequence<Elements, Failure>.Output) throws -> T) -> Result<T, any Error>.Publisher
```

## See Also

### Reducing elements

- [collect()](collect%28%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [ignoreOutput()](ignoreoutput%28%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [reduce(\_:\_:)](reduce%28____%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
