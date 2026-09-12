> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/staticcontrolconfiguration](https://developer.apple.com/documentation/widgetkit/staticcontrolconfiguration)

# StaticControlConfiguration

**Framework:** WidgetKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

The description of a control that has no user-configurable options.

## Declaration

```swift
@MainActor @preconcurrency struct StaticControlConfiguration<Content> where Content : ControlWidgetTemplate
```

<a id="overview"></a>

## Overview

The following example shows the configuration for a garage door opener control.

```swift
struct GarageDoorOpener: ControlWidget {
    var body: some ControlWidgetConfiguration {
        StaticControlConfiguration(
            kind: "com.yourcompany.GarageDoorOpener",
            provider: GarageDoorValueProvider()
        ) { isOpen in
            ControlWidgetToggle(
                "Garage Door",
                isOn: isOpen,
                action: ToggleGarageDoor()
            ) {
                Label(
                    $0 ? "Open" : "Closed",
                    systemImage: $0 ? "door.garage.open" : "door.garage.closed"
                )
            }
        }
    }
}
```

Every control has a unique `kind`, a string that you choose to uniquely identify the type of control. You use this string to identify your control when reloading its template with [ControlCenter](controlcenter.md).

The value provider is an object that determines a value to use to render your template.

The content closure defines the template that WidgetKit needs to render the control. If you create the configuration using a value provider, when WidgetKit invokes the content closure, it passes a value created by the provider’s [previewValue](controlvalueprovider/previewvalue.md) property or [currentValue()](controlvalueprovider/currentvalue%28%29.md) function.

## Topics

### Initializers

- [init(kind:content:)](staticcontrolconfiguration/init%28kind_content_%29.md): Conforms when `Content` conforms to `ControlWidgetTemplate`. Creates a configuration for a control, with no user-configurable options.
- [init(kind:provider:content:)](staticcontrolconfiguration/init%28kind_provider_content_%29.md): Conforms when `Content` conforms to `ControlWidgetTemplate`. Creates a configuration for a control, with no user-configurable options.

## Relationships

### Conforms To

- [ControlWidgetConfiguration](https://developer.apple.com/documentation/swiftui/controlwidgetconfiguration)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setup and configuration

- [Creating controls to perform actions across the system](creating-controls-to-perform-actions-across-the-system.md): Perform your app’s actions from Control Center, the Lock Screen, and the Action button.
- [Adding refinements and configuration to controls](adding-refinements-and-configuration-to-controls.md): Customize the way controls display across the system and offer people the ability to configure them.
- [AppIntentControlConfiguration](appintentcontrolconfiguration.md): The description of a control that uses a custom app intent to provide user-configurable options.
- [ControlCenter](controlcenter.md): An object you use to access configuration information for controls and reload them.
- [ControlInfo](controlinfo.md): A structure that contains information about user-configured controls.
- [ControlWidgetButton](controlwidgetbutton.md): A control template representing a button.
- [ControlWidgetToggle](controlwidgettoggle.md): A control template representing a toggle.
