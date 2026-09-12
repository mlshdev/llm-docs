> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/text/font(_:)](https://developer.apple.com/documentation/swiftui/text/font(_:))

# font(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sets the default font for text in the view.

## Declaration

```swift
nonisolated func font(_ font: Font?) -> Text
```

## Parameters

- `font`: The font to use when displaying this text.

<a id="return-value"></a>

## Return Value

Text that uses the font you specify.

## Mentioned In

- [Applying custom fonts to text](../applying-custom-fonts-to-text.md)

<a id="discussion"></a>

## Discussion

Use `font(_:)` to apply a specific font to an individual Text View, or all of the text views in a container.

In the example below, the first text field has a font set directly, while the font applied to the following container applies to all of the text views inside that container:

```swift
VStack {
    Text("Font applied to a text view.")
        .font(.largeTitle)

    VStack {
        Text("These two text views have the same font")
        Text("applied to their parent view.")
    }
    .font(.system(size: 16, weight: .light, design: .default))
}
```

![Applying a font to a single text view or a view container](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-view-font@2x.png)

## See Also

### Choosing a font

- [fontWeight(\_:)](fontweight%28__%29.md): Sets the font weight of the text.
- [fontDesign(\_:)](fontdesign%28__%29.md): Sets the font design of the text.
- [fontWidth(\_:)](fontwidth%28__%29.md): Sets the font width of the text.
