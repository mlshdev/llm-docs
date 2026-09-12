> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cgrect/frame(withwidth:using:)](https://developer.apple.com/documentation/corefoundation/cgrect/frame(withwidth:using:))

# frame(withWidth:using:)

**Framework:** Core Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.9+ · Swift 4.0+

Draws a frame around the inside of this rect in the current NSGraphicsContext in the context’s fill color The compositing operation of the fill defaults to the context’s compositing operation, not necessarily using `.copy` like `NSFrameRect()`.

## Declaration

```swift
func frame(withWidth width: CGFloat = 1.0, using operation: NSCompositingOperation = NSGraphicsContext.current?.compositingOperation ?? .sourceOver)
```

<a id="discussion"></a>

## Discussion

> **Precondition**

> There must be a set current NSGraphicsContext.
