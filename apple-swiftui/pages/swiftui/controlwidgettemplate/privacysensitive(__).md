> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/controlwidgettemplate/privacysensitive(_:)](https://developer.apple.com/documentation/swiftui/controlwidgettemplate/privacysensitive(_:))

# privacySensitive(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

Marks the control template as containing sensitive, private user data.

## Declaration

```swift
@MainActor @preconcurrency func privacySensitive(_ sensitive: Bool = true) -> some ControlWidgetTemplate

```

## Parameters

- `sensitive`: A Boolean value that determines whether this control is sensitive.

<a id="discussion"></a>

## Discussion

The system redacts controls marked with this modifier when those controls are displayed on the Lock Screen and the device is locked.

Controls also respect the [privacySensitive(\_:)](../view/privacysensitive%28__%29.md) modifier applied to the control’s label. That modifier only redacts the control content, however. To redact the content *and* the state of the control, apply this modifier to the control template:

```swift
struct GarageDoorOpener: ControlWidget {
    var body: some ControlWidgetConfiguration {
        StaticControlConfiguration(...) {
            ControlWidgetToggle(...) {
                Label(
                    $0 ? "Open" : "Closed",
                    systemImage: $0 ? "door.open" : "door.closed"
                )
            }
            .privacySensitive()
        }
    }
}
```
