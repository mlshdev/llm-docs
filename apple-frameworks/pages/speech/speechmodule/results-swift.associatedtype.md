> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechmodule/results-swift.associatedtype](https://developer.apple.com/documentation/speech/speechmodule/results-swift.associatedtype)

# Results

**Framework:** Speech  
**Kind:** Associated Type  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
associatedtype Results : Sendable, AsyncSequence where Self.Results.Failure == any Error
```

## See Also

### Getting results

- [results](results-swift.property.md): An asynchronous sequence containing this module’s analysis results. Results are added to the sequence as they are created.
- [Result](result.md)
