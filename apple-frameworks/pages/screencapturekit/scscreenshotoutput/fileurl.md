> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scscreenshotoutput/fileurl](https://developer.apple.com/documentation/screencapturekit/scscreenshotoutput/fileurl)

# fileURL (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

A URL property that specifies the location of the saved image.

## Declaration

```swift
unowned(unsafe) var fileURL: NSURL? { get set }
```

<a id="discussion"></a>

## Discussion

If `fileURL` is `nil`, then the file isn’t saved.

# fileURL (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

A URL property that specifies the location of the saved image.

## Declaration

```objectivec
@property (nonatomic, assign, nullable) NSURL * fileURL;
```

<a id="discussion"></a>

## Discussion

If `fileURL` is `nil`, then the file isn’t saved.
