> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/controlwidgetbutton](https://developer.apple.com/documentation/widgetkit/controlwidgetbutton)

# ControlWidgetButton

**Framework:** WidgetKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

A control template representing a button.

## Declaration

```swift
@MainActor @preconcurrency struct ControlWidgetButton<Label, ActionLabel, Action> where Label : View, ActionLabel : View
```

<a id="overview"></a>

## Overview

Buttons don’t have state; use them for fire-and-forget actions such as playing a sound or launching an app.

## Topics

### Initializers

- [init(action:label:)](controlwidgetbutton/init%28action_label_%29-77p8j.md): Conforms when `Label` conforms to `View` and `ActionLabel` conforms to `View`. Creates a button template for a control.
- [init(action:label:)](controlwidgetbutton/init%28action_label_%29-8oxxp.md): Conforms when `Label` conforms to `View` and `ActionLabel` conforms to `View`. Creates a button template for a control that launches an app.
- [init(action:label:actionLabel:)](controlwidgetbutton/init%28action_label_actionlabel_%29.md): Conforms when `Label` conforms to `View` and `ActionLabel` conforms to `View`. Creates a button template for a control.
- [init(action:label:actionLabel:)](controlwidgetbutton/init%28action_label_actionlabel_%29.md): Conforms when `Label` conforms to `View` and `ActionLabel` conforms to `View`. Creates a button template for a control.
- [init(\_:action:actionLabel:)](controlwidgetbutton/init%28__action_actionlabel_%29-4sgji.md): Conforms when `Label` is `Text` and `ActionLabel` conforms to `View`. Creates a button template for a control.
- [init(\_:action:actionLabel:)](controlwidgetbutton/init%28__action_actionlabel_%29-67uvw.md): Conforms when `Label` is `Text` and `ActionLabel` conforms to `View`. Creates a button template for a control.
- [init(\_:action:actionLabel:)](controlwidgetbutton/init%28__action_actionlabel_%29-1kxch.md): Conforms when `Label` is `Text` and `ActionLabel` conforms to `View`. Creates a button template for a control.

### Default action label

- [ControlWidgetButtonDefaultActionLabel](controlwidgetbuttondefaultactionlabel.md): A view representing the default action label for a `ControlWidgetButton` if none is specified.

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
- [ControlWidgetToggle](controlwidgettoggle.md): A control template representing a toggle.
