> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/properties-swift.struct/viewcount](https://developer.apple.com/documentation/compositorservices/layerrenderer/properties-swift.struct/viewcount)

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
