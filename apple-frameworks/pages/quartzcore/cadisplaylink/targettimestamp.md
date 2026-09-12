> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cadisplaylink/targettimestamp](https://developer.apple.com/documentation/quartzcore/cadisplaylink/targettimestamp)

# targetTimestamp (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 14.0+ · tvOS 10.0+ · visionOS 1.0+

The time interval that represents when the next frame displays.

## Declaration

```swift
var targetTimestamp: CFTimeInterval { get }
```

## Mentioned In

- [Optimizing iPhone and iPad apps to support ProMotion displays](../optimizing-iphone-and-ipad-apps-to-support-promotion-displays.md)

<a id="Discussion"></a>

## Discussion

You can use the target timestamp to cancel or pause long running processes that may overrun the available time between frames in order to maintain a consistent frame rate.

The following code shows how you can create a display link and register it with a run loop. The ```step(``displayLink:)``` function attempts to sum the square roots of all numbers up to [max](https://developer.apple.com/documentation/swift/int/max), but with each iteration checks the current time ([CACurrentMediaTime()](../cacurrentmediatime%28%29.md)) against the [targetTimestamp](targettimestamp.md). If the time taken to complete the calculation is later than the target timestamp, the function breaks the loop:

```swift
func createDisplayLink() {
    let displayLink = CADisplayLink(target: self,
                                    selector: #selector(step))
    displayLink.add(to: .main,
                    forMode: .defaultRunLoopMode)
}
    
func step(displayLink: CADisplayLink) {
    var sqrtSum = 0.0
    for i in 0 ..< Int.max {
        sqrtSum += sqrt(Double(i))
        
        if (CACurrentMediaTime() >= displayLink.targetTimestamp) {
            print("break at i =", i)
            break
        }
    }
}
```

## See Also

### Configuring a Display Link

- [duration](duration.md): The time interval between screen refresh updates.
- [preferredFrameRateRange](preferredframeraterange.md): A range of frequencies your app allows for frame updates, affecting how often the system invokes your delegate’s callback.
- [preferredFramesPerSecond](preferredframespersecond.md): Deprecated. A frequency your app prefers for frame updates, affecting how often the system invokes your delegate’s callback.
- [isPaused](ispaused.md): A Boolean value that indicates whether the system suspends the display link’s notifications to the target.
- [timestamp](timestamp.md): The time interval that represents when the last frame displayed.
- [frameInterval](frameinterval.md): Deprecated. The number of frames that must pass before the display link notifies the target again.

# targetTimestamp (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 14.0+ · tvOS 10.0+ · visionOS 1.0+

The time interval that represents when the next frame displays.

## Declaration

```objectivec
@property (nonatomic, readonly) CFTimeInterval targetTimestamp;
```

## Mentioned In

- [Optimizing iPhone and iPad apps to support ProMotion displays](../optimizing-iphone-and-ipad-apps-to-support-promotion-displays.md)

<a id="Discussion"></a>

## Discussion

You can use the target timestamp to cancel or pause long running processes that may overrun the available time between frames in order to maintain a consistent frame rate.

The following code shows how you can create a display link and register it with a run loop. The ```step(``displayLink:)``` function attempts to sum the square roots of all numbers up to [max](https://developer.apple.com/documentation/swift/int/max), but with each iteration checks the current time ([CACurrentMediaTime](../cacurrentmediatime%28%29.md)) against the [targetTimestamp](targettimestamp.md). If the time taken to complete the calculation is later than the target timestamp, the function breaks the loop:

```swift
func createDisplayLink() {
    let displayLink = CADisplayLink(target: self,
                                    selector: #selector(step))
    displayLink.add(to: .main,
                    forMode: .defaultRunLoopMode)
}
    
func step(displayLink: CADisplayLink) {
    var sqrtSum = 0.0
    for i in 0 ..< Int.max {
        sqrtSum += sqrt(Double(i))
        
        if (CACurrentMediaTime() >= displayLink.targetTimestamp) {
            print("break at i =", i)
            break
        }
    }
}
```

## See Also

### Configuring a Display Link

- [duration](duration.md): The time interval between screen refresh updates.
- [preferredFrameRateRange](preferredframeraterange.md): A range of frequencies your app allows for frame updates, affecting how often the system invokes your delegate’s callback.
- [preferredFramesPerSecond](preferredframespersecond.md): Deprecated. A frequency your app prefers for frame updates, affecting how often the system invokes your delegate’s callback.
- [paused](ispaused.md): A Boolean value that indicates whether the system suspends the display link’s notifications to the target.
- [timestamp](timestamp.md): The time interval that represents when the last frame displayed.
- [frameInterval](frameinterval.md): Deprecated. The number of frames that must pass before the display link notifies the target again.
