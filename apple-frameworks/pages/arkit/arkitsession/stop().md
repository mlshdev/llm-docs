> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arkitsession/stop()](https://developer.apple.com/documentation/arkit/arkitsession/stop())

# stop()

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** macOS 26.0+ · visionOS 1.0+

Stops all data providers running in this session.

## Declaration

```swift
final func stop()
```

<a id="Discussion"></a>

## Discussion

ARKit also automatically stops sessions when they’re deinitialized.

## See Also

### Starting and stopping a session

- [init()](init%28%29.md): Creates a new session.
- [run(\_:)](run%28__%29.md): Runs a session with the data providers you supply.
- [ARKitSession.Error](error.md): An error that might occur when running data providers on an ARKit session.
