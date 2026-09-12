> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/controlwidgettemplate/disabled(_:)](https://developer.apple.com/documentation/swiftui/controlwidgettemplate/disabled(_:))

# disabled(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

Determines whether people can interact with this control.

## Declaration

```swift
@MainActor @preconcurrency func disabled(_ disabled: Bool) -> some ControlWidgetTemplate

```

## Parameters

- `disabled`: A Boolean value that determines whether users can interact with this control.

<a id="discussion"></a>

## Discussion

Controls also respect the [disabled(\_:)](../view/disabled%28__%29.md) modifier applied to the control’s label. That modifier only disables the label, however. To disable the control overall, apply this modifier to the control template:

```swift
struct GarageDoorOpener: ControlWidget {
    var body: some ControlWidgetConfiguration {
        StaticControlConfiguration(
            kind: "com.myapp.garagedooropener",
            provider: DoorValueProvider()
        ) { door in
            ControlWidgetToggle(...) {
                Label(
                    $0 ? "Open" : "Closed",
                    systemImage: $0 ? "door.open" : "door.closed"
                )
            }
            .disabled(door.isSafetyLockEngaged)
        }
    }
}
```
