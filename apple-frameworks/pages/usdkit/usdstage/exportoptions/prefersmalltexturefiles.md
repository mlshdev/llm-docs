> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/exportoptions/prefersmalltexturefiles](https://developer.apple.com/documentation/usdkit/usdstage/exportoptions/prefersmalltexturefiles)

# preferSmallTextureFiles

**Framework:** USDKit  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Reduce textures’ file size at the standard quality level.

## Declaration

```swift
static var preferSmallTextureFiles: USDStage.ExportOptions { get }
```

<a id="discussion"></a>

## Discussion

This is the same as `preferSmallTextureFiles(quality: .standard)`.
