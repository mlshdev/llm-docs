> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arkitsession/events-swift.struct/iterator/next()](https://developer.apple.com/documentation/arkit/arkitsession/events-swift.struct/iterator/next())

# next()

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** macOS 26.0+ · visionOS 1.0+

Returns the next element in a sequence.

## Declaration

```swift
mutating func next() async -> ARKitSession.Events.Element?
```

<a id="return-value"></a>

## Return Value

Returns an [ARKitSession.Events.Element](../element.md), or `nil` if there are no more elements.
