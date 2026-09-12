> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureexternaldisplayconfigurator/stop()](https://developer.apple.com/documentation/avfoundation/avcaptureexternaldisplayconfigurator/stop())

# stop() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Forces the external display configurator to asynchronously stop configuring the external display.

## Declaration

```swift
func stop()
```

<a id="discussion"></a>

## Discussion

Call [stop()](stop%28%29.md) to force the [AVCaptureExternalDisplayConfigurator](../avcaptureexternaldisplayconfigurator.md) to asynchronously stop configuring the external display. Once stopped, the [isActive](isactive.md) property changes to `false` and the [activeExternalDisplayFrameRate](activeexternaldisplayframerate.md) becomes 0.

# stop (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Forces the external display configurator to asynchronously stop configuring the external display.

## Declaration

```objectivec
- (void) stop;
```

<a id="discussion"></a>

## Discussion

Call [stop](stop%28%29.md) to force the [AVCaptureExternalDisplayConfigurator](../avcaptureexternaldisplayconfigurator.md) to asynchronously stop configuring the external display. Once stopped, the [active](isactive.md) property changes to `false` and the [activeExternalDisplayFrameRate](activeexternaldisplayframerate.md) becomes 0.
