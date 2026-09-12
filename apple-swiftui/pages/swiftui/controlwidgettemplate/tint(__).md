> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/controlwidgettemplate/tint(_:)](https://developer.apple.com/documentation/swiftui/controlwidgettemplate/tint(_:))

# tint(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

Sets the tint color within this control template.

## Declaration

```swift
@MainActor @preconcurrency func tint(_ tint: Color?) -> some ControlWidgetTemplate

```

## Parameters

- `tint`: The tint [Color](../color.md) to apply.

<a id="discussion"></a>

## Discussion

Controls don’t respect the [tint(\_:)](../view/tint%28__%29.md) modifier when applied to control labels, nor do controls support arbitrary tint shape styles. Instead, define a tint color for your control by applying this modifier to its template:

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
            .tint(.orange)
        }
    }
}
```
