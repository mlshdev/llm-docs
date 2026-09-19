> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiaccelerometer/delegate

# delegate

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property

The delegate object you want to receive acceleration events.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UIAccelerometerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The [UIAccelerometerDelegate](../uiaccelerometerdelegate.md) is a formal protocol, so your delegate object must implement the method it defines. The shared accelerometer object delivers the acceleration data to your delegate at the specified interval. It delivers these events on the main thread of your application when it is in the NSDefaultRunLoopMode run loop mode.

## See Also

### Accessing the accelerometer properties

- [updateInterval](updateinterval.md): Deprecated. The interval at which to deliver acceleration data to the delegate.
