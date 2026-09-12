> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccelerometerdelegate/accelerometer:didaccelerate:](https://developer.apple.com/documentation/uikit/uiaccelerometerdelegate/accelerometer:didaccelerate:)

# accelerometer:didAccelerate:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method

Delivers the latest acceleration data to the delegate.

## Declaration

```objectivec
- (void) accelerometer:(UIAccelerometer *) accelerometer didAccelerate:(UIAcceleration *) acceleration;
```

## Parameters

- `accelerometer`: The application-wide accelerometer object.
- `acceleration`: The most recent acceleration data.

<a id="Discussion"></a>

## Discussion

The shared [UIAccelerometer](../uiaccelerometer.md) object invokes this method at the desired interval, providing your delegate with updated acceleration data each time.

This method is always invoked on your application’s main thread when it is in the NSDefaultRunLoopMode run loop mode.
