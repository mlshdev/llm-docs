> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arcamera/trackingstate-9pgmq](https://developer.apple.com/documentation/arkit/arcamera/trackingstate-9pgmq)

# trackingState

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The general quality of position tracking available when the camera captured a frame.

## Declaration

```objectivec
@property (nonatomic, readonly) ARTrackingState trackingState;
```

## See Also

### Handling Tracking Status

- [ARTrackingState](../artrackingstate.md): Possible values for position-tracking quality.
- [trackingStateReason](trackingstatereason.md): A possible diagnosis for limited position-tracking quality as of when the camera captured a frame.
- [ARTrackingStateReason](../artrackingstatereason.md): Possible causes for limited position-tracking quality.
