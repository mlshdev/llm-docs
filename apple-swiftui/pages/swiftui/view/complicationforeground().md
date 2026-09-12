> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/complicationforeground()](https://developer.apple.com/documentation/swiftui/view/complicationforeground())

# complicationForeground()

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Promotes this view to the foreground in a complication.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
@MainActor @preconcurrency func complicationForeground() -> some View

```

<a id="return-value"></a>

## Return Value

A view that is in the complication foreground.

<a id="discussion"></a>

## Discussion

A view in the foreground will be tinted alongside other foreground views. The color for both the foreground and background layers is determined by the watch face.

## See Also

### Appearance modifiers

- [colorScheme(\_:)](colorscheme%28__%29.md): Deprecated. Sets this view’s color scheme.
- [listRowPlatterColor(\_:)](listrowplattercolor%28__%29.md): Deprecated. Sets the color that the system applies to the row background when this view is placed in a list.
- [background(\_:alignment:)](background%28__alignment_%29.md): Deprecated. Layers the given view behind this view.
- [overlay(\_:alignment:)](overlay%28__alignment_%29.md): Deprecated. Layers a secondary view in front of this view.
- [foregroundColor(\_:)](foregroundcolor%28__%29.md): Deprecated. Sets the color of the foreground elements displayed by this view.
