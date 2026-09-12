> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/controlwidgettoggle](https://developer.apple.com/documentation/widgetkit/controlwidgettoggle)

# ControlWidgetToggle

**Framework:** WidgetKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

A control template representing a toggle.

## Declaration

```swift
@MainActor @preconcurrency struct ControlWidgetToggle<Label, ValueLabel, Action> where Label : View, ValueLabel : View
```

<a id="overview"></a>

## Overview

Toggles are controls that have two states, “off” and “on”.

## Topics

### Initializers

- [init(isOn:action:label:)](controlwidgettoggle/init%28ison_action_label_%29.md): Conforms when `Label` conforms to `View` and `ValueLabel` conforms to `View`. Creates a toggle template for a control.
- [init(isOn:action:label:valueLabel:)](controlwidgettoggle/init%28ison_action_label_valuelabel_%29.md): Conforms when `Label` conforms to `View` and `ValueLabel` conforms to `View`. Creates a toggle template for a control.
- [init(\_:isOn:action:valueLabel:)](controlwidgettoggle/init%28__ison_action_valuelabel_%29-33wfq.md): Conforms when `Label` is `Text` and `ValueLabel` conforms to `View`. Creates a toggle template for a control.
- [init(\_:isOn:action:valueLabel:)](controlwidgettoggle/init%28__ison_action_valuelabel_%29-5o6bn.md): Conforms when `Label` is `Text` and `ValueLabel` conforms to `View`. Creates a toggle template for a control.
- [init(\_:isOn:action:valueLabel:)](controlwidgettoggle/init%28__ison_action_valuelabel_%29-4lk32.md): Conforms when `Label` is `Text` and `ValueLabel` conforms to `View`. Creates a toggle template for a control.

### Default action label

- [ControlWidgetToggleDefaultLabel](controlwidgettoggledefaultlabel.md): A view that represents the default label for a toggle control if you don’t provide a label.

## Relationships

### Conforms To

- [ControlWidgetTemplate](https://developer.apple.com/documentation/swiftui/controlwidgettemplate)

## See Also

### Setup and configuration

- [Creating controls to perform actions across the system](creating-controls-to-perform-actions-across-the-system.md): Perform your app’s actions from Control Center, the Lock Screen, and the Action button.
- [Adding refinements and configuration to controls](adding-refinements-and-configuration-to-controls.md): Customize the way controls display across the system and offer people the ability to configure them.
- [StaticControlConfiguration](staticcontrolconfiguration.md): The description of a control that has no user-configurable options.
- [AppIntentControlConfiguration](appintentcontrolconfiguration.md): The description of a control that uses a custom app intent to provide user-configurable options.
- [ControlCenter](controlcenter.md): An object you use to access configuration information for controls and reload them.
- [ControlInfo](controlinfo.md): A structure that contains information about user-configured controls.
- [ControlWidgetButton](controlwidgetbutton.md): A control template representing a button.
