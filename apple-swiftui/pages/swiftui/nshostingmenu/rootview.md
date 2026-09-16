> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/nshostingmenu/rootview

# rootView

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** macOS 14.4+

The root view of the SwiftUI view hierarchy managed by this menu.

## Declaration

```swift
var rootView: Content { get set }
```

<a id="discussion"></a>

## Discussion

Updating this property will immediately update the `items` array, even if the menu is currently visible to the user.
