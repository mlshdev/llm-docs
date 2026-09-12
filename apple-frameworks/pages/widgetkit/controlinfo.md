> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/controlinfo](https://developer.apple.com/documentation/widgetkit/controlinfo)

# ControlInfo

**Framework:** WidgetKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

A structure that contains information about user-configured controls.

## Declaration

```swift
struct ControlInfo
```

## Topics

### Instance Properties

- [kind](controlinfo/kind.md): The string specified during creation of the control’s configuration.
- [pushInfo](controlinfo/pushinfo.md): Push information about a control, if present.

### Instance Methods

- [configurationIntent(of:)](controlinfo/configurationintent%28of_%29.md): Gets the associated App Intent.

### Default Implementations

- [Identifiable Implementations](controlinfo/identifiable-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)

## See Also

### Setup and configuration

- [Creating controls to perform actions across the system](creating-controls-to-perform-actions-across-the-system.md): Perform your app’s actions from Control Center, the Lock Screen, and the Action button.
- [Adding refinements and configuration to controls](adding-refinements-and-configuration-to-controls.md): Customize the way controls display across the system and offer people the ability to configure them.
- [StaticControlConfiguration](staticcontrolconfiguration.md): The description of a control that has no user-configurable options.
- [AppIntentControlConfiguration](appintentcontrolconfiguration.md): The description of a control that uses a custom app intent to provide user-configurable options.
- [ControlCenter](controlcenter.md): An object you use to access configuration information for controls and reload them.
- [ControlWidgetButton](controlwidgetbutton.md): A control template representing a button.
- [ControlWidgetToggle](controlwidgettoggle.md): A control template representing a toggle.
