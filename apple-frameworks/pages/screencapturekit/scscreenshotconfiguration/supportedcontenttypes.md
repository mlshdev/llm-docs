> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/screencapturekit/scscreenshotconfiguration/supportedcontenttypes

# supportedContentTypes (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Type Property  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

An array of uniform type identifiers that correspond to file formats the output image supports.

## Declaration

```swift
class var supportedContentTypes: [UTType] { get }
```

<a id="discussion"></a>

## Discussion

You can save the output [CGImage](../../coregraphics/cgimage.md) into HEIC, JPEG, and PNG formats.

# supportedContentTypes (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Type Property  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

An array of uniform type identifiers that correspond to file formats the output image supports.

## Declaration

```objectivec
@property (class, readonly) NSArray<UTType *> * supportedContentTypes;
```

<a id="discussion"></a>

## Discussion

You can save the output [CGImageRef](../../coregraphics/cgimage.md) into HEIC, JPEG, and PNG formats.
