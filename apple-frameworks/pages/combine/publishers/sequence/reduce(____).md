> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/publishers/sequence/reduce(_:_:)

# reduce(\_:\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func reduce<T>(_ initialResult: T, _ nextPartialResult: @escaping (T, Publishers.Sequence<Elements, Failure>.Output) -> T) -> Result<T, Failure>.Publisher
```

## See Also

### Reducing elements

- [collect()](collect%28%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [ignoreOutput()](ignoreoutput%28%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [tryReduce(\_:\_:)](tryreduce%28____%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
