> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/controlwidgettoggle/init(ison:action:label:)](https://developer.apple.com/documentation/widgetkit/controlwidgettoggle/init(ison:action:label:))

# init(isOn:action:label:)

**Framework:** WidgetKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

Creates a toggle template for a control.

## Declaration

```swift
@MainActor @preconcurrency init(isOn: Bool, action: Action, @ViewBuilder label: @escaping () -> Label) where ValueLabel == ControlWidgetToggleDefaultLabel, Action : SetValueIntent, Action.ValueType == Bool
```

## Parameters

- `isOn`: A boolean value that describes the current value of the toggle.
- `action`: The action the toggle performs when pressed.
- `label`: A view that renders the toggle’s label.

<a id="discussion"></a>

## Discussion

The toggle will use “On” and “Off” as default value label.

## See Also

### Initializers

- [init(isOn:action:label:valueLabel:)](init%28ison_action_label_valuelabel_%29.md): Conforms when `Label` conforms to `View` and `ValueLabel` conforms to `View`. Creates a toggle template for a control.
- [init(\_:isOn:action:valueLabel:)](init%28__ison_action_valuelabel_%29-33wfq.md): Conforms when `Label` is `Text` and `ValueLabel` conforms to `View`. Creates a toggle template for a control.
- [init(\_:isOn:action:valueLabel:)](init%28__ison_action_valuelabel_%29-5o6bn.md): Conforms when `Label` is `Text` and `ValueLabel` conforms to `View`. Creates a toggle template for a control.
- [init(\_:isOn:action:valueLabel:)](init%28__ison_action_valuelabel_%29-4lk32.md): Conforms when `Label` is `Text` and `ValueLabel` conforms to `View`. Creates a toggle template for a control.
