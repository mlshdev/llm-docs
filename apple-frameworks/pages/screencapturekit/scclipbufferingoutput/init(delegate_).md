> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scclipbufferingoutput/init(delegate:)](https://developer.apple.com/documentation/screencapturekit/scclipbufferingoutput/init(delegate:))

# init(delegate:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
init(delegate: (any SCClipBufferingOutputDelegate)?)
```

## Parameters

- `delegate`: Object conforming to SCClipBufferingOutputDelegate protocol. Clients may specify a delegate to receive notifications about clip buffering events.

<a id="discussion"></a>

## Discussion

Initialize SCClipBufferingOutput object with SCClipBufferingOutputDelegate

Client can create a SCClipBufferingOutput with this initializer and add it to SCStream to start clip buffering.

# initWithDelegate: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (instancetype) initWithDelegate:(id<SCClipBufferingOutputDelegate>) delegate;
```

## Parameters

- `delegate`: Object conforming to SCClipBufferingOutputDelegate protocol. Clients may specify a delegate to receive notifications about clip buffering events.

<a id="discussion"></a>

## Discussion

Initialize SCClipBufferingOutput object with SCClipBufferingOutputDelegate

Client can create a SCClipBufferingOutput with this initializer and add it to SCStream to start clip buffering.
