> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arcamera/trackingstatereason](https://developer.apple.com/documentation/arkit/arcamera/trackingstatereason)

# trackingStateReason

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A possible diagnosis for limited position-tracking quality as of when the camera captured a frame.

## Declaration

```objectivec
@property (nonatomic, readonly) ARTrackingStateReason trackingStateReason;
```

## See Also

### Handling Tracking Status

- [trackingState](trackingstate-9pgmq.md): The general quality of position tracking available when the camera captured a frame.
- [ARTrackingState](../artrackingstate.md): Possible values for position-tracking quality.
- [ARTrackingStateReason](../artrackingstatereason.md): Possible causes for limited position-tracking quality.
