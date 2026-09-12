> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstream/iscapturing](https://developer.apple.com/documentation/screencapturekit/scstream/iscapturing)

# isCapturing (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
var isCapturing: Bool { get }
```

<a id="discussion"></a>

## Discussion

Indicates whether this stream is currently capturing screen content

Returns YES if the stream has been started and is actively capturing, NO otherwise.

# capturing (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isCapturing) BOOL capturing;
```

<a id="discussion"></a>

## Discussion

Indicates whether this stream is currently capturing screen content

Returns YES if the stream has been started and is actively capturing, NO otherwise.
