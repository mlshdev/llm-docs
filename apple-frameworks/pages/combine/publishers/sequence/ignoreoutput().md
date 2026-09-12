> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/sequence/ignoreoutput()](https://developer.apple.com/documentation/combine/publishers/sequence/ignoreoutput())

# ignoreOutput()

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func ignoreOutput() -> Empty<Publishers.Sequence<Elements, Failure>.Output, Failure>
```

## See Also

### Reducing elements

- [collect()](collect%28%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [reduce(\_:\_:)](reduce%28____%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [tryReduce(\_:\_:)](tryreduce%28____%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
