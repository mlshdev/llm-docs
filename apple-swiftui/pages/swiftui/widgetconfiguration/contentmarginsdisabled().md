> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/widgetconfiguration/contentmarginsdisabled()](https://developer.apple.com/documentation/swiftui/widgetconfiguration/contentmarginsdisabled())

# contentMarginsDisabled()

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 26.0+ · watchOS 9.0+

Disable default content margins.

## Declaration

```swift
@MainActor @preconcurrency func contentMarginsDisabled() -> some WidgetConfiguration

```

<a id="return-value"></a>

## Return Value

A modified widget configuration that doesn’t use default content margins.

<a id="discussion"></a>

## Discussion

When you disable content margins for a widget, the system doesn’t automatically add margins around the widget’s content, and you are responsible for specifying margins and padding around your widget content for each context. To specify custom margins, use [widgetContentMargins](../environmentvalues/widgetcontentmargins.md) in combination with [padding(\_:)](../view/padding%28__%29.md) to selectively or partially apply the default content margins.

This modifier has no effect on operation system versions prior to iOS 17, watchOS 10, or macOS 14.

## See Also

### Setting the appearance

- [supportedFamilies(\_:)](supportedfamilies%28__%29.md): Sets the sizes that a widget supports.
- [disfavoredLocations(\_:for:)](disfavoredlocations%28__for_%29.md): Sets the disfavored locations for a widget.
- [containerBackgroundRemovable(\_:)](containerbackgroundremovable%28__%29.md): A modifier that marks the background of a widget as removable.
