> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechmodule/results-swift.property](https://developer.apple.com/documentation/speech/speechmodule/results-swift.property)

# results

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An asynchronous sequence containing this module’s analysis results. Results are added to the sequence as they are created.

## Declaration

```swift
var results: Self.Results { get }
```

<a id="discussion"></a>

## Discussion

Each module has its own result sequence and data structure.

If there is an error in the overall analysis, all modules will throw the error from their individual result sequence.

## See Also

### Getting results

- [Result](result.md)
- [Results](results-swift.associatedtype.md)
