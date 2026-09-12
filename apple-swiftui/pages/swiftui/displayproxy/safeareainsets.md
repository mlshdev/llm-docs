> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/displayproxy/safeareainsets](https://developer.apple.com/documentation/swiftui/displayproxy/safeareainsets)

# safeAreaInsets

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The safe area inset of this display.

## Declaration

```swift
let safeAreaInsets: EdgeInsets
```

<a id="discussion"></a>

## Discussion

On macOS, the safe area contains space occupied by the dock and menu bar, and is dependent on the current user settings. Additionally, on Macs that include a camera housing in the bezel, the safe area contains the vertical space occupied by the bezel.
