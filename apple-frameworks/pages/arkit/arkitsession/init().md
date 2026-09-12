> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arkitsession/init()](https://developer.apple.com/documentation/arkit/arkitsession/init())

# init()

**Framework:** ARKit  
**Kind:** Initializer  
**Availability:** visionOS 1.0+

Creates a new session.

## Declaration

```swift
convenience init()
```

<a id="Discussion"></a>

## Discussion

ARKit stops sessions when they’re deinitialized.

## See Also

### Starting and stopping a session

- [run(\_:)](run%28__%29.md): Runs a session with the data providers you supply.
- [stop()](stop%28%29.md): Stops all data providers running in this session.
- [ARKitSession.Error](error.md): An error that might occur when running data providers on an ARKit session.
