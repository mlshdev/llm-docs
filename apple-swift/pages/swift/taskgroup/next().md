> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/taskgroup/next()](https://developer.apple.com/documentation/swift/taskgroup/next())

# next()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
mutating func next() async -> ChildTaskResult?
```

## See Also

### Accessing Individual Results

- [next(isolation:)](next%28isolation_%29.md): Waits for the next child task to complete, and returns the value it returned.
- [isEmpty](isempty.md): A Boolean value that indicates whether the group has any remaining tasks.
- [waitForAll()](waitforall%28%29.md): Wait for all of the group’s remaining tasks to complete.
