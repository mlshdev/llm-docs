> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/textrenderer/displaypadding

# displayPadding

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns the size of the extra padding added to any drawing layer used to rasterize the text. For example when drawing the text with a shadow this may be used to extend the drawing bounds to avoid clipping the shadow.

## Declaration

```swift
var displayPadding: EdgeInsets { get }
```

<a id="discussion"></a>

## Discussion

The default implementation of this function returns an empty set of insets.

## Default Implementations

### TextRenderer Implementations

- [displayPadding](displaypadding-9l6t9.md): Returns the size of the extra padding added to any drawing layer used to rasterize the text. For example when drawing the text with a shadow this may be used to extend the drawing bounds to avoid clipping the shadow.
