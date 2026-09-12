> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cgrect/fill(using:)](https://developer.apple.com/documentation/corefoundation/cgrect/fill(using:))

# fill(using:)

**Framework:** Core Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.9+ · Swift 4.0+

Fills this rect in the current NSGraphicsContext in the context’s fill color. The compositing operation of the fill defaults to the context’s compositing operation, not necessarily using `.copy` like `NSRectFill()`.

## Declaration

```swift
func fill(using operation: NSCompositingOperation = NSGraphicsContext.current?.compositingOperation ?? .sourceOver)
```

<a id="discussion"></a>

## Discussion

> **Precondition**

> There must be a set current NSGraphicsContext.
