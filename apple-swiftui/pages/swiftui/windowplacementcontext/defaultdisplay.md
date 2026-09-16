> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/windowplacementcontext/defaultdisplay

# defaultDisplay

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The display on which new windows will be presented by default.

## Declaration

```swift
var defaultDisplay: DisplayProxy { get }
```

<a id="discussion"></a>

## Discussion

On macOS, this is typically the display which currently has focus.
