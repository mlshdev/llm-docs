> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/controlwidgetbutton/init(action:label:actionlabel:)](https://developer.apple.com/documentation/widgetkit/controlwidgetbutton/init(action:label:actionlabel:))

# init(action:label:actionLabel:)

**Framework:** WidgetKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

Creates a button template for a control.

## Declaration

```swift
@MainActor @preconcurrency init(action: Action, @ViewBuilder label: @escaping () -> Label, @ViewBuilder actionLabel: @escaping (Bool) -> ActionLabel) where Action : AppIntent
```

## Parameters

- `action`: The action your button performs when pressed.
- `label`: A view that renders the button.
- `actionLabel`: A view that is rendered when the button’s action is performed

<a id="discussion"></a>

## Discussion

Use the action label to additionally customize the appearance of this control button while its action is performed

```swift
ControlWidgetButton(action: OpenTrunkIntent()) {
    Label("Open Trunk", systemImage: "car.side.rear.open.crop")
} actionLabel: { isActive in
    if isActive {
        Text("Opening…")
    }
}
```

The example above produces a control button that appears in Control Center with “Open Trunk” as its title and the provided SF symbol. While the control is performing its action, it shows the “Opening…” subtitle.

## See Also

### Initializers

- [init(action:label:)](init%28action_label_%29-77p8j.md): Conforms when `Label` conforms to `View` and `ActionLabel` conforms to `View`. Creates a button template for a control.
- [init(action:label:)](init%28action_label_%29-8oxxp.md): Conforms when `Label` conforms to `View` and `ActionLabel` conforms to `View`. Creates a button template for a control that launches an app.
- [init(\_:action:actionLabel:)](init%28__action_actionlabel_%29-4sgji.md): Conforms when `Label` is `Text` and `ActionLabel` conforms to `View`. Creates a button template for a control.
- [init(\_:action:actionLabel:)](init%28__action_actionlabel_%29-67uvw.md): Conforms when `Label` is `Text` and `ActionLabel` conforms to `View`. Creates a button template for a control.
