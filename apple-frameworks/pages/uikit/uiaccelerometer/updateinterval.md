> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccelerometer/updateinterval](https://developer.apple.com/documentation/uikit/uiaccelerometer/updateinterval)

# updateInterval

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property

The interval at which to deliver acceleration data to the delegate.

## Declaration

```objectivec
@property (nonatomic) NSTimeInterval updateInterval;
```

<a id="Discussion"></a>

## Discussion

This property is measured in seconds. The value of this property is capped to certain minimum and maximum values. The maximum value is determined by the maximum frequency supported by the hardware. To ensure that it can deliver device orientation events in a timely fashion, the system determines the appropriate minimum value based on its needs.

Changes to this property are delivered synchronously to the accelerometer hardware. You may change this property while the delegate is non-`nil`.

## See Also

### Accessing the accelerometer properties

- [delegate](delegate.md): Deprecated. The delegate object you want to receive acceleration events.
