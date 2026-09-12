> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cametaldisplaylink/preferredframelatency](https://developer.apple.com/documentation/quartzcore/cametaldisplaylink/preferredframelatency)

# preferredFrameLatency (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The amount of time, in frames, your app requests to render a frame.

## Declaration

```swift
var preferredFrameLatency: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The final latency may be bigger if the system needs more time, such as for windowed modes on macOS.

> **Important**

>  The only acceptable values are `1.0` and `2.0`.

## See Also

### Configuring a Display Link

- [preferredFrameRateRange](preferredframeraterange.md): A range of frequencies your app allows for frame updates, affecting how often the system invokes your delegate’s callback.
- [delegate](delegate.md): An instance of a type your app implements that responds to the system’s callbacks.

# preferredFrameLatency (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The amount of time, in frames, your app requests to render a frame.

## Declaration

```objectivec
@property (nonatomic) float preferredFrameLatency;
```

<a id="Discussion"></a>

## Discussion

The final latency may be bigger if the system needs more time, such as for windowed modes on macOS.

> **Important**

>  The only acceptable values are `1.0` and `2.0`.

## See Also

### Configuring a Display Link

- [preferredFrameRateRange](preferredframeraterange.md): A range of frequencies your app allows for frame updates, affecting how often the system invokes your delegate’s callback.
- [delegate](delegate.md): An instance of a type your app implements that responds to the system’s callbacks.
