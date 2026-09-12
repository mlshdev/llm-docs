> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/fontdesign(_:)](https://developer.apple.com/documentation/swiftui/view/fontdesign(_:))

# fontDesign(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

Sets the font design of the text in this view.

## Declaration

```swift
nonisolated func fontDesign(_ design: Font.Design?) -> some View

```

## Parameters

- `design`: One of the available font designs. Providing `nil` removes the effect of any font design modifier applied higher in the view hierarchy.

<a id="return-value"></a>

## Return Value

A view that uses the font design you specify.

## See Also

### Setting a font

- [Applying custom fonts to text](../applying-custom-fonts-to-text.md): Add and use a font in your app that scales with Dynamic Type.
- [font(\_:)](font%28__%29.md): Sets the default font for text in this view.
- [fontWeight(\_:)](fontweight%28__%29.md): Sets the font weight of the text in this view.
- [fontWidth(\_:)](fontwidth%28__%29.md): Sets the font width of the text in this view.
- [font](../environmentvalues/font.md): The default font of this environment.
- [Font](../font.md): An environment-dependent font.
