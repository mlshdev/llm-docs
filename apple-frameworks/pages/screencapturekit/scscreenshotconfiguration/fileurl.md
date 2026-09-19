> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/screencapturekit/scscreenshotconfiguration/fileurl

# fileURL (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

Specifies the URL where the screenshot process saves the output.

## Declaration

```swift
var fileURL: URL? { get set }
```

<a id="discussion"></a>

## Discussion

If `imageOutputURL` is `nil`, then the file isn’t saved.

# fileURL (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

Specifies the URL where the screenshot process saves the output.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSURL * fileURL;
```

<a id="discussion"></a>

## Discussion

If `imageOutputURL` is `nil`, then the file isn’t saved.
