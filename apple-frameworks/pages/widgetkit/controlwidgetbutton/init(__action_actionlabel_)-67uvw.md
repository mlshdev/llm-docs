> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/controlwidgetbutton/init(_:action:actionlabel:)-67uvw](https://developer.apple.com/documentation/widgetkit/controlwidgetbutton/init(_:action:actionlabel:)-67uvw)

# init(\_:action:actionLabel:)

**Framework:** WidgetKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

Creates a button template for a control.

## Declaration

```swift
@MainActor @preconcurrency init(_ titleKey: LocalizedStringKey, action: Action, @ViewBuilder actionLabel: @escaping (Bool) -> ActionLabel) where Action : AppIntent
```

## Parameters

- `titleKey`: The key to a localized string to display as the title of the button.
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

The example above produces a control button that appears in Control Center with “Open Trunk” as its title and the provided SF symbol. While the control is performing its action, it shows the “Opening…” subtitle.

## See Also

### Initializers

- [init(action:label:)](init%28action_label_%29-77p8j.md): Conforms when `Label` conforms to `View` and `ActionLabel` conforms to `View`. Creates a button template for a control.
- [init(action:label:)](init%28action_label_%29-8oxxp.md): Conforms when `Label` conforms to `View` and `ActionLabel` conforms to `View`. Creates a button template for a control that launches an app.
- [init(action:label:actionLabel:)](init%28action_label_actionlabel_%29.md): Conforms when `Label` conforms to `View` and `ActionLabel` conforms to `View`. Creates a button template for a control.
- [init(action:label:actionLabel:)](init%28action_label_actionlabel_%29.md): Conforms when `Label` conforms to `View` and `ActionLabel` conforms to `View`. Creates a button template for a control.
- [init(\_:action:actionLabel:)](init%28__action_actionlabel_%29-4sgji.md): Conforms when `Label` is `Text` and `ActionLabel` conforms to `View`. Creates a button template for a control.
