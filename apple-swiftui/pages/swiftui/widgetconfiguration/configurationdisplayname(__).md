> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/widgetconfiguration/configurationdisplayname(_:)](https://developer.apple.com/documentation/swiftui/widgetconfiguration/configurationdisplayname(_:))

# configurationDisplayName(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 26.0+ · watchOS 9.0+

Sets the localized name shown for a widget when a user adds or edits the widget.

## Declaration

```swift
@MainActor @preconcurrency func configurationDisplayName(_ displayName: LocalizedStringResource) -> some WidgetConfiguration

```

## Parameters

- `displayName`: Text resource for the localized name to display.

<a id="return-value"></a>

## Return Value

A widget configuration that includes a descriptive name for the widget.
