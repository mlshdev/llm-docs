> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/insettableshape/strokeborder(linewidth:antialiased:)](https://developer.apple.com/documentation/swiftui/insettableshape/strokeborder(linewidth:antialiased:))

# strokeBorder(lineWidth:antialiased:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a view that is the result of filling the `lineWidth`-sized border (aka inner stroke) of `self` with the foreground color. This is equivalent to insetting `self` by `lineWidth / 2` and stroking the resulting shape with `lineWidth` as the line-width.

## Declaration

```swift
func strokeBorder(lineWidth: CGFloat = 1, antialiased: Bool = true) -> some View

```

## See Also

### Setting the stroke border characteristics

- [strokeBorder(\_:lineWidth:antialiased:)](strokeborder%28__linewidth_antialiased_%29.md): Returns a view that is the result of filling the `lineWidth`-sized border (aka inner stroke) of `self` with `content`. This is equivalent to insetting `self` by `lineWidth / 2` and stroking the resulting shape with `lineWidth` as the line-width.
- [strokeBorder(\_:style:antialiased:)](strokeborder%28__style_antialiased_%29.md): Returns a view that is the result of insetting `self` by `style.lineWidth / 2`, stroking the resulting shape with `style`, and then filling with `content`.
- [strokeBorder(style:antialiased:)](strokeborder%28style_antialiased_%29.md): Returns a view that is the result of insetting `self` by `style.lineWidth / 2`, stroking the resulting shape with `style`, and then filling with the foreground color.
