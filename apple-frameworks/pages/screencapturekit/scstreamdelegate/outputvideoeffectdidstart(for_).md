> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamdelegate/outputvideoeffectdidstart(for:)](https://developer.apple.com/documentation/screencapturekit/scstreamdelegate/outputvideoeffectdidstart(for:))

# outputVideoEffectDidStart(for:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 14.0+ · tvOS 27.0+ · visionOS 27.0+

Tells the delegate that Presenter Overlay started.

## Declaration

```swift
optional func outputVideoEffectDidStart(for stream: SCStream)
```

## Parameters

- `stream`: The stream using Presenter Overlay.

## See Also

### Responding to Presenter Overlay

- [outputVideoEffectDidStop(for:)](outputvideoeffectdidstop%28for_%29.md): Tells the delegate that Presenter Overlay stopped.

# outputVideoEffectDidStartForStream: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 14.0+ · tvOS 27.0+ · visionOS 27.0+

Tells the delegate that Presenter Overlay started.

## Declaration

```objectivec
- (void) outputVideoEffectDidStartForStream:(SCStream *) stream;
```

## Parameters

- `stream`: The stream using Presenter Overlay.

## See Also

### Responding to Presenter Overlay

- [outputVideoEffectDidStopForStream:](outputvideoeffectdidstop%28for_%29.md): Tells the delegate that Presenter Overlay stopped.
