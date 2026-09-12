> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/queryresult/iterator/next()](https://developer.apple.com/documentation/realitykit/queryresult/iterator/next())

# next()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Advances to the next entity and returns it.

## Declaration

```swift
mutating func next() -> Element?
```

<a id="return-value"></a>

## Return Value

Calling this method advances the iterator to the next entity and returns it. If there is no next element, returns `nil`.
