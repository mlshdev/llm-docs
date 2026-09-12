> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/controlwidgettemplatebuilder](https://developer.apple.com/documentation/swiftui/controlwidgettemplatebuilder)

# ControlWidgetTemplateBuilder

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

A custom attribute that constructs a control widget template’s body.

## Declaration

```swift
@resultBuilder struct ControlWidgetTemplateBuilder
```

<a id="overview"></a>

## Overview

The `@ControlWidgetTemplateBuilder` attribute allows your control template’s body closure to produce a control template after zero or more other statements:

```swift
struct GarageDoorOpener: ControlWidget {
    var body: some ControlWidgetConfiguration {
        let kind = "com.yourcompany.GarageDoorOpener"

        StaticControlConfiguration(
            kind: kind
        ) {
            let isOpen = ...

            ControlWidgetToggle(
                "Garage Door",
                isOn: isOpen,
                action: ToggleGarageDoor()
            ) {
                Label(
                    $0 ? "Open" : "Closed",
                    systemImage: $0 ?
                        "door.garage.open" : "door.garage.closed"
                )
            }
        }
    }
}
```

## Topics

### Type Methods

- [buildBlock(\_:)](controlwidgettemplatebuilder/buildblock%28__%29.md): Passes a single control widget template written as a child view through unmodified.
- [buildExpression(\_:)](controlwidgettemplatebuilder/buildexpression%28__%29.md): Builds an expression within the builder.

## See Also

### Composing control widgets

- [ControlWidget](controlwidget.md): The configuration and content of a control widget to display in system spaces such as Control Center, the Lock Screen, and the Action Button.
- [ControlWidgetConfiguration](controlwidgetconfiguration.md): A type that describes a control widget’s content.
- [EmptyControlWidgetConfiguration](emptycontrolwidgetconfiguration.md): An empty control widget configuration.
- [ControlWidgetConfigurationBuilder](controlwidgetconfigurationbuilder.md): A custom attribute that constructs a control widget’s body.
- [ControlWidgetTemplate](controlwidgettemplate.md): A type that describes a control widget’s content.
- [EmptyControlWidgetTemplate](emptycontrolwidgettemplate.md): An empty control widget template.
- [controlWidgetActionHint(\_:)](view/controlwidgetactionhint%28__%29.md): The action hint of the control described by the modified label.
- [controlWidgetStatus(\_:)](view/controlwidgetstatus%28__%29.md): The status of the control described by the modified label.
