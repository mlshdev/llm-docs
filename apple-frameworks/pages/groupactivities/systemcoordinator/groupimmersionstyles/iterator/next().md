> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/systemcoordinator/groupimmersionstyles/iterator/next()](https://developer.apple.com/documentation/groupactivities/systemcoordinator/groupimmersionstyles/iterator/next())

# next()

**Framework:** GroupActivities  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Asynchronously advances to the next element and returns it, or ends the sequence if there is no next element.

## Declaration

```swift
func next() async -> SystemCoordinator.GroupImmersionStyles.Element?
```

<a id="return-value"></a>

## Return Value

The next element, if it exists, or `nil` to signal the end of the sequence.
