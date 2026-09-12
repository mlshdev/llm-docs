> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/screcordingeditor/init(url:)-ead5](https://developer.apple.com/documentation/screencapturekit/screcordingeditor/init(url:)-ead5)

# init(url:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
init(url: URL)
```

## Parameters

- `url`: The file URL of the completed recording, from SCRecordingOutput or SCClipBufferingOutput.

<a id="return-value"></a>

## Return Value

An initialized SCRecordingEditor.

<a id="discussion"></a>

## Discussion

Initialize an SCRecordingEditor with the file URL of a completed recording.

# initWithURL: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) url;
```

## Parameters

- `url`: The file URL of the completed recording, from SCRecordingOutput or SCClipBufferingOutput.

<a id="return-value"></a>

## Return Value

An initialized SCRecordingEditor.

<a id="discussion"></a>

## Discussion

Initialize an SCRecordingEditor with the file URL of a completed recording.
