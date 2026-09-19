> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/screencapturekit/scscreenshotconfiguration/contenttype

# contentType (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

A uniform type identifier that specifies the screenshot’s file format; HEIC, JPEG, or PNG.

## Declaration

```swift
unowned(unsafe) var contentType: UTTypeReference { get set }
```

# contentType (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

A uniform type identifier that specifies the screenshot’s file format; HEIC, JPEG, or PNG.

## Declaration

```objectivec
@property (nonatomic, assign) UTType * contentType;
```
