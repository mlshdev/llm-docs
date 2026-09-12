> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cametaldisplaylink/delegate](https://developer.apple.com/documentation/quartzcore/cametaldisplaylink/delegate)

# delegate (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An instance of a type your app implements that responds to the system’s callbacks.

## Declaration

```swift
weak var delegate: (any CAMetalDisplayLinkDelegate)? { get set }
```

## See Also

### Configuring a Display Link

- [preferredFrameRateRange](preferredframeraterange.md): A range of frequencies your app allows for frame updates, affecting how often the system invokes your delegate’s callback.
- [preferredFrameLatency](preferredframelatency.md): The amount of time, in frames, your app requests to render a frame.

# delegate (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An instance of a type your app implements that responds to the system’s callbacks.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<CAMetalDisplayLinkDelegate> delegate;
```

## See Also

### Configuring a Display Link

- [preferredFrameRateRange](preferredframeraterange.md): A range of frequencies your app allows for frame updates, affecting how often the system invokes your delegate’s callback.
- [preferredFrameLatency](preferredframelatency.md): The amount of time, in frames, your app requests to render a frame.
