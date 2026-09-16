> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/text/layoutkey/anchoredlayout

# Text.LayoutKey.AnchoredLayout

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The layout of one text view, together with an anchor for the position of that view.

## Declaration

```swift
struct AnchoredLayout
```

<a id="overview"></a>

## Overview

[Text.LayoutKey](../layoutkey.md) collects one of these values for every text view in the subtree you query. Read [layout](anchoredlayout/layout.md) to inspect the lines, runs, and glyphs the text produced, and resolve [origin](anchoredlayout/origin.md) in a [GeometryProxy](../../geometryproxy.md) to place something of your own next to the text:

```swift
ZStack {
    Text("Hello, world")
}
.overlayPreferenceValue(Text.LayoutKey.self) { layouts in
    GeometryReader { proxy in
        ForEach(0..<layouts.count, id: \.self) { index in
            Underline(layout: layouts[index].layout)
                .position(proxy[layouts[index].origin])
        }
    }
}
```

The anchor matters because a text view reports its layout in its own coordinate space. Resolving the anchor converts that origin into the space of the view reading the preference.

## Topics

### Instance Properties

- [layout](anchoredlayout/layout.md): The text layout value.
- [origin](anchoredlayout/origin.md): The origin of the text layout.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
