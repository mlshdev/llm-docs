> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/clipboundingrect](https://developer.apple.com/documentation/swiftui/graphicscontext/clipboundingrect)

# clipBoundingRect

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The bounding rectangle of the intersection of all current clip shapes in the current user space.

## Declaration

```swift
var clipBoundingRect: CGRect { get }
```

## See Also

### Masking

- [clip(to:style:options:)](clip%28to_style_options_%29.md): Adds a path to the context’s array of clip shapes.
- [clipToLayer(opacity:options:content:)](cliptolayer%28opacity_options_content_%29.md): Adds a clip shape that you define in a new layer to the context’s array of clip shapes.
- [GraphicsContext.ClipOptions](clipoptions.md): Options that affect the use of clip shapes.
