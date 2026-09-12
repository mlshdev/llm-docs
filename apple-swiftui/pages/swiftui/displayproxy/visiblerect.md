> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/displayproxy/visiblerect](https://developer.apple.com/documentation/swiftui/displayproxy/visiblerect)

# visibleRect

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The portion of the display where it is safe to place windows.

## Declaration

```swift
let visibleRect: CGRect
```

<a id="discussion"></a>

## Discussion

On macOS, this area does not contain the space occupied by the dock and menu bar. Additionally, on Macs that include a camera housing in the bezel this rectangle does not include the bezel or visible areas to each side of the bezel.
