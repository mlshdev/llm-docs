> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/fontwidth(_:)](https://developer.apple.com/documentation/swiftui/view/fontwidth(_:))

# fontWidth(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Sets the font width of the text in this view.

## Declaration

```swift
nonisolated func fontWidth(_ width: Font.Width?) -> some View

```

## Parameters

- `width`: One of the available font widths. Providing `nil` removes the effect of any font width modifier applied higher in the view hierarchy.

<a id="return-value"></a>

## Return Value

A view that uses the font width you specify.

## See Also

### Setting a font

- [Applying custom fonts to text](../applying-custom-fonts-to-text.md): Add and use a font in your app that scales with Dynamic Type.
- [font(\_:)](font%28__%29.md): Sets the default font for text in this view.
- [fontDesign(\_:)](fontdesign%28__%29.md): Sets the font design of the text in this view.
- [fontWeight(\_:)](fontweight%28__%29.md): Sets the font weight of the text in this view.
- [font](../environmentvalues/font.md): The default font of this environment.
- [Font](../font.md): An environment-dependent font.
