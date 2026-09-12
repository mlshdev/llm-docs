> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiacceleration/timestamp](https://developer.apple.com/documentation/uikit/uiacceleration/timestamp)

# timestamp

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property

The relative time at which the acceleration event occurred.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval timestamp;
```

<a id="Discussion"></a>

## Discussion

This value indicates the time relative to the device CPU time base register. Compare acceleration event timestamps to determine the elapsed time between them. Do not use a timestamp to determine the exact time at which an event occurred.

## See Also

### Accessing the acceleration values

- [x](x.md): Deprecated. The acceleration value for the x axis of the device.
- [y](y.md): Deprecated. The acceleration value for the y axis of the device.
- [z](z.md): Deprecated. The acceleration value for the z axis of the device.
