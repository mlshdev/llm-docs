> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/compositorservices/layerrenderer/properties-swift.struct/viewcount

# viewCount

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

The number of views that you must fill with content.

## Declaration

```swift
var viewCount: Int { get }
```

<a id="discussion"></a>

## Discussion

This property tells you how many views you’re responsible for filling with your content. For example, this function returns `1` for a monoscopic display and `2` for a stereoscopic display.
