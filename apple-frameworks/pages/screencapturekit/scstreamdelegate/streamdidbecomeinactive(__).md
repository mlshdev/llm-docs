> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamdelegate/streamdidbecomeinactive(_:)](https://developer.apple.com/documentation/screencapturekit/scstreamdelegate/streamdidbecomeinactive(_:))

# streamDidBecomeInactive(\_:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
optional func streamDidBecomeInactive(_ stream: SCStream)
```

## Parameters

- `stream`: The SCStream object

<a id="discussion"></a>

## Discussion

streamDidBecomeInactive:

notifies the delegate that all the windows that are currently being shared are exited. This callback occurs for all content filter types.

# streamDidBecomeInactive: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (void) streamDidBecomeInactive:(SCStream *) stream;
```

## Parameters

- `stream`: The SCStream object

<a id="discussion"></a>

## Discussion

streamDidBecomeInactive:

notifies the delegate that all the windows that are currently being shared are exited. This callback occurs for all content filter types.
