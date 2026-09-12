> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/sequence/clip()](https://developer.apple.com/documentation/swift/sequence/clip())

# clip()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** macOS 10.9+ · Swift 4.0+

Modifies the current graphics context clipping path by intersecting it with the graphical union of this list of rects This permanently modifies the graphics state, so the current state should be saved beforehand and restored afterwards.

## Declaration

```swift
func clip()
```

<a id="discussion"></a>

## Discussion

> **Precondition**

> There must be a set current NSGraphicsContext.

## See Also

### Applying AppKit Graphic Operations

- [fill(using:)](fill%28using_%29-l1te.md): Conforms when `Element` is `CGRect`. Fills this list of rects in the current NSGraphicsContext in the context’s fill color. The compositing operation of the fill defaults to the context’s compositing operation, not necessarily using `.copy` like `NSRectFill()`.
- [fill(using:)](fill%28using_%29-45en6.md): Conforms when `Element` is `(CGRect, NSColor)`. Fills this list of rects in the current NSGraphicsContext with that rect’s associated color The compositing operation of the fill defaults to the context’s compositing operation, not necessarily using `.copy` like `NSRectFill()`.
