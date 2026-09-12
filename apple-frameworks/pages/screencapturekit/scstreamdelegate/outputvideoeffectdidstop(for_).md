> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamdelegate/outputvideoeffectdidstop(for:)](https://developer.apple.com/documentation/screencapturekit/scstreamdelegate/outputvideoeffectdidstop(for:))

# outputVideoEffectDidStop(for:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 14.0+ · tvOS 27.0+ · visionOS 27.0+

Tells the delegate that Presenter Overlay stopped.

## Declaration

```swift
optional func outputVideoEffectDidStop(for stream: SCStream)
```

## Parameters

- `stream`: The stream that was using Presenter Overlay.

## See Also

### Responding to Presenter Overlay

- [outputVideoEffectDidStart(for:)](outputvideoeffectdidstart%28for_%29.md): Tells the delegate that Presenter Overlay started.

# outputVideoEffectDidStopForStream: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 14.0+ · tvOS 27.0+ · visionOS 27.0+

Tells the delegate that Presenter Overlay stopped.

## Declaration

```objectivec
- (void) outputVideoEffectDidStopForStream:(SCStream *) stream;
```

## Parameters

- `stream`: The stream that was using Presenter Overlay.

## See Also

### Responding to Presenter Overlay

- [outputVideoEffectDidStartForStream:](outputvideoeffectdidstart%28for_%29.md): Tells the delegate that Presenter Overlay started.
