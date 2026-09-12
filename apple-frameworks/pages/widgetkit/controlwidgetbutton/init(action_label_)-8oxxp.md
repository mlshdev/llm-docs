> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/controlwidgetbutton/init(action:label:)-8oxxp](https://developer.apple.com/documentation/widgetkit/controlwidgetbutton/init(action:label:)-8oxxp)

# init(action:label:)

**Framework:** WidgetKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

Creates a button template for a control that launches an app.

## Declaration

```swift
@MainActor @preconcurrency init(action: Action, @ViewBuilder label: @escaping () -> Label) where ActionLabel == ControlWidgetButtonDefaultActionLabel, Action : OpenIntent
```

## Parameters

- `action`: The action your button performs when pressed.
- `label`: A view that renders the button.

## See Also

### Initializers

- [init(action:label:)](init%28action_label_%29-77p8j.md): Conforms when `Label` conforms to `View` and `ActionLabel` conforms to `View`. Creates a button template for a control.
- [init(action:label:actionLabel:)](init%28action_label_actionlabel_%29.md): Conforms when `Label` conforms to `View` and `ActionLabel` conforms to `View`. Creates a button template for a control.
- [init(action:label:actionLabel:)](init%28action_label_actionlabel_%29.md): Conforms when `Label` conforms to `View` and `ActionLabel` conforms to `View`. Creates a button template for a control.
- [init(\_:action:actionLabel:)](init%28__action_actionlabel_%29-4sgji.md): Conforms when `Label` is `Text` and `ActionLabel` conforms to `View`. Creates a button template for a control.
- [init(\_:action:actionLabel:)](init%28__action_actionlabel_%29-67uvw.md): Conforms when `Label` is `Text` and `ActionLabel` conforms to `View`. Creates a button template for a control.
