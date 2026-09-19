> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/screencapturekit/scstream/iscapturing

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
