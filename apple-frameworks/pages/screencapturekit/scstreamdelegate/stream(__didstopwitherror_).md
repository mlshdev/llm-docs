> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamdelegate/stream(_:didstopwitherror:)](https://developer.apple.com/documentation/screencapturekit/scstreamdelegate/stream(_:didstopwitherror:))

# stream(\_:didStopWithError:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

Tells the delegate that the stream stopped with an error.

## Declaration

```swift
optional func stream(_ stream: SCStream, didStopWithError error: any Error)
```

## Parameters

- `stream`: The stream that stopped.
- `error`: The error that caused the stream stoppage.

<a id="discussion"></a>

## Discussion

> **Note**

>  When the `error` parameter has the code [SCStreamError.Code.userStopped](../scstreamerror/code/userstopped.md), the user took an intentional action to cancel the stream. Treat errors of this type as expected and recoverable failures.

# stream:didStopWithError: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

Tells the delegate that the stream stopped with an error.

## Declaration

```objectivec
- (void) stream:(SCStream *) stream didStopWithError:(NSError *) error;
```

## Parameters

- `stream`: The stream that stopped.
- `error`: The error that caused the stream stoppage.

<a id="discussion"></a>

## Discussion

> **Note**

>  When the `error` parameter has the code [SCStreamErrorUserStopped](../scstreamerror/code/userstopped.md), the user took an intentional action to cancel the stream. Treat errors of this type as expected and recoverable failures.
