> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/controlwidgettoggle/init(_:ison:action:valuelabel:)-33wfq](https://developer.apple.com/documentation/widgetkit/controlwidgettoggle/init(_:ison:action:valuelabel:)-33wfq)

# init(\_:isOn:action:valueLabel:)

**Framework:** WidgetKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

Creates a toggle template for a control.

## Declaration

```swift
@MainActor @preconcurrency init(_ title: some StringProtocol, isOn: Bool, action: Action, @ViewBuilder valueLabel: @escaping (Bool) -> ValueLabel) where Action : SetValueIntent, Action.ValueType == Bool
```

## Parameters

- `title`: A string to display as the title of the toggle.
- `isOn`: A boolean value that describes the current value of the toggle.
- `action`: The action the toggle performs when pressed.
- `valueLabel`: A view that renders the toggle’s value. The boolean parameter represents the value.

## See Also

### Initializers

- [init(isOn:action:label:)](init%28ison_action_label_%29.md): Conforms when `Label` conforms to `View` and `ValueLabel` conforms to `View`. Creates a toggle template for a control.
- [init(isOn:action:label:valueLabel:)](init%28ison_action_label_valuelabel_%29.md): Conforms when `Label` conforms to `View` and `ValueLabel` conforms to `View`. Creates a toggle template for a control.
- [init(\_:isOn:action:valueLabel:)](init%28__ison_action_valuelabel_%29-5o6bn.md): Conforms when `Label` is `Text` and `ValueLabel` conforms to `View`. Creates a toggle template for a control.
- [init(\_:isOn:action:valueLabel:)](init%28__ison_action_valuelabel_%29-4lk32.md): Conforms when `Label` is `Text` and `ValueLabel` conforms to `View`. Creates a toggle template for a control.
