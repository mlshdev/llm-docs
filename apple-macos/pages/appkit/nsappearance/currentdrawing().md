> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsappearance/currentdrawing()](https://developer.apple.com/documentation/appkit/nsappearance/currentdrawing())

# currentDrawing()

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 11.0+

The appearance that the system uses for color and asset resolution, and that’s active for drawing, usually from locking focus on a view.

## Declaration

```swift
class func currentDrawing() -> NSAppearance
```

<a id="return-value"></a>

## Return Value

The current appearance used for drawing.

## See Also

### Getting and Setting the Current Appearance

- [performAsCurrentDrawingAppearance(\_:)](performascurrentdrawingappearance%28__%29.md): Sets the appearance to be the active drawing appearance and perform the specified block.
- [current](current.md): Deprecated. Returns the appearance object that’s active on the current thread.
