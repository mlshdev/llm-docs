> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/sequence/fill(using:)-6sdhf](https://developer.apple.com/documentation/swift/sequence/fill(using:)-6sdhf)

# fill(using:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** macOS 10.9+ · Swift 4.0+

Fills this list of rects in the current NSGraphicsContext with that rect’s associated gray component value in the DeviceGray color space. The compositing operation of the fill defaults to the context’s compositing operation, not necessarily using `.copy` like `NSRectFillListWithGrays()`.

## Declaration

```swift
func fill(using operation: NSCompositingOperation = NSGraphicsContext.current?.compositingOperation ?? .sourceOver)
```

<a id="discussion"></a>

## Discussion

> **Precondition**

> There must be a set current NSGraphicsContext.
