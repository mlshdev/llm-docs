> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/throwingtaskgroup/next()](https://developer.apple.com/documentation/swift/throwingtaskgroup/next())

# next()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
mutating func next() async throws -> ChildTaskResult?
```

## See Also

### Accessing Individual Results

- [nextResult()](nextresult%28%29.md): Wait for the next child task to complete, and return a result containing either the value that the child task returned or the error that it threw.
- [next(isolation:)](next%28isolation_%29.md): Wait for the next child task to complete, and return the value it returned or rethrow the error it threw.
- [isEmpty](isempty.md): A Boolean value that indicates whether the group has any remaining tasks.
- [waitForAll()](waitforall%28%29.md): Wait for all of the group’s remaining tasks to complete.
