> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/colorscheme(_:)](https://developer.apple.com/documentation/swiftui/view/colorscheme(_:))

# colorScheme(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Sets this view’s color scheme.

> Use [preferredColorScheme(\_:)](preferredcolorscheme%28__%29.md) instead.

## Declaration

```swift
nonisolated func colorScheme(_ colorScheme: ColorScheme) -> some View

```

## Parameters

- `colorScheme`: The color scheme for this view.

<a id="return-value"></a>

## Return Value

A view that sets this view’s color scheme.

<a id="discussion"></a>

## Discussion

Use `colorScheme(_:)` to set the color scheme for the view to which you apply it and any subviews.

## See Also

### Appearance modifiers

- [listRowPlatterColor(\_:)](listrowplattercolor%28__%29.md): Deprecated. Sets the color that the system applies to the row background when this view is placed in a list.
- [background(\_:alignment:)](background%28__alignment_%29.md): Deprecated. Layers the given view behind this view.
- [overlay(\_:alignment:)](overlay%28__alignment_%29.md): Deprecated. Layers a secondary view in front of this view.
- [foregroundColor(\_:)](foregroundcolor%28__%29.md): Deprecated. Sets the color of the foreground elements displayed by this view.
- [complicationForeground()](complicationforeground%28%29.md): Deprecated. Promotes this view to the foreground in a complication.
