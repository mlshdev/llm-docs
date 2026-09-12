> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/controlwidgetconfiguration/promptsforuserconfiguration()](https://developer.apple.com/documentation/swiftui/controlwidgetconfiguration/promptsforuserconfiguration())

# promptsForUserConfiguration()

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

Specifies that a control’s configuration UI should be automatically presented after the widget is added.

## Declaration

```swift
@MainActor @preconcurrency func promptsForUserConfiguration() -> some ControlWidgetConfiguration

```

<a id="return-value"></a>

## Return Value

A control configuration that knows whether the presentation of a configuration UI is preferred.
