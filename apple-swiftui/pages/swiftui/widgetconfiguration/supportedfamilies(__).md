> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/widgetconfiguration/supportedfamilies(_:)](https://developer.apple.com/documentation/swiftui/widgetconfiguration/supportedfamilies(_:))

# supportedFamilies(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 26.0+ · watchOS 9.0+

Sets the sizes that a widget supports.

## Declaration

```swift
@MainActor @preconcurrency func supportedFamilies(_ families: [WidgetFamily]) -> some WidgetConfiguration

```

## Parameters

- `families`: The set of sizes the widget supports.

<a id="return-value"></a>

## Return Value

A widget configuration that supports the sizes you specify.

## See Also

### Setting the appearance

- [contentMarginsDisabled()](contentmarginsdisabled%28%29.md): Disable default content margins.
- [disfavoredLocations(\_:for:)](disfavoredlocations%28__for_%29.md): Sets the disfavored locations for a widget.
- [containerBackgroundRemovable(\_:)](containerbackgroundremovable%28__%29.md): A modifier that marks the background of a widget as removable.
