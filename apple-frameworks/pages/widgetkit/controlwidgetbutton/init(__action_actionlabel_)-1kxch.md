> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/controlwidgetbutton/init(_:action:actionlabel:)-1kxch](https://developer.apple.com/documentation/widgetkit/controlwidgetbutton/init(_:action:actionlabel:)-1kxch)

# init(\_:action:actionLabel:)

**Framework:** WidgetKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

Creates a button template for a control.

## Declaration

```swift
@MainActor @preconcurrency init(_ titleResource: LocalizedStringResource, action: Action, @ViewBuilder actionLabel: @escaping (Bool) -> ActionLabel) where Action : AppIntent
```

## Parameters

- `titleResource`: The localized string resource to display as the title of the button.
- `action`: The action your button performs when pressed.
- `actionLabel`: A view that is rendered when the button’s action is performed.

<a id="discussion"></a>

## Discussion

Use the action label to additionally customize the appearance of this control button while its action is performed

```swift
ControlWidgetButton(
    "Open Trunk",
    action: OpenTrunkIntent()
) { isActive in
    Image(systemName: "car.side.rear.open.crop")
    if isActive {
        Text("Opening...")
    }
}
```

The example above produces a control button that in control center will display “Open Trunk” as its title and the provided SF symbol. While the control is performing its action it will show the “Opening…” subtitle.
