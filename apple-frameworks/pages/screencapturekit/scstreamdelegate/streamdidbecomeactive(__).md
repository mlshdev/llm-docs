> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamdelegate/streamdidbecomeactive(_:)](https://developer.apple.com/documentation/screencapturekit/scstreamdelegate/streamdidbecomeactive(_:))

# streamDidBecomeActive(\_:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
optional func streamDidBecomeActive(_ stream: SCStream)
```

## Parameters

- `stream`: The SCStream object

<a id="discussion"></a>

## Discussion

streamDidBecomeActive:

notifies the delegate the first time any window that was being shared in the stream is re-opened after all the windows being shared are closed.  When all the windows being shared are closed, the client will receive streamDidBecomeInactive:.

# streamDidBecomeActive: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (void) streamDidBecomeActive:(SCStream *) stream;
```

## Parameters

- `stream`: The SCStream object

<a id="discussion"></a>

## Discussion

streamDidBecomeActive:

notifies the delegate the first time any window that was being shared in the stream is re-opened after all the windows being shared are closed.  When all the windows being shared are closed, the client will receive streamDidBecomeInactive:.
