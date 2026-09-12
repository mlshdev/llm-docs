> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/controlwidgettemplate](https://developer.apple.com/documentation/swiftui/controlwidgettemplate)

# ControlWidgetTemplate

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

A type that describes a control widget’s content.

## Declaration

```swift
@MainActor @preconcurrency protocol ControlWidgetTemplate
```

<a id="overview"></a>

## Overview

Controls are defined using templates in order to ensure that they control will work at all sizes and in all system spaces in which they might be displayed. These templates define images (specifically, symbol images) and text using simple SwiftUI views like [Label](label.md), [Text](text.md), and [Image](image.md); and tint colors using the [tint(\_:)](controlwidgettemplate/tint%28__%29.md) modifier.

A type conforming to this protocol inherits `@preconcurrency @MainActor` isolation from the protocol if the conformance is included in the type’s base declaration:

```swift
struct MyCustomType: Transition {
    // `@preconcurrency @MainActor` isolation by default
}
```

Isolation to the main actor is the default, but it’s not required. Declare the conformance in an extension to opt out of main actor isolation:

```swift
extension MyCustomType: Transition {
    // `nonisolated` by default
}
```

## Topics

### Associated Types

- [Body](controlwidgettemplate/body-swift.associatedtype.md): The type of control widget template representing the body of this template.

### Instance Properties

- [body](controlwidgettemplate/body-swift.property.md): The content and behavior of this control widget.

### Instance Methods

- [disabled(\_:)](controlwidgettemplate/disabled%28__%29.md): Determines whether people can interact with this control.
- [privacySensitive(\_:)](controlwidgettemplate/privacysensitive%28__%29.md): Marks the control template as containing sensitive, private user data.
- [tint(\_:)](controlwidgettemplate/tint%28__%29.md): Sets the tint color within this control template.

## Relationships

### Conforming Types

- [EmptyControlWidgetTemplate](emptycontrolwidgettemplate.md)

## See Also

### Composing control widgets

- [ControlWidget](controlwidget.md): The configuration and content of a control widget to display in system spaces such as Control Center, the Lock Screen, and the Action Button.
- [ControlWidgetConfiguration](controlwidgetconfiguration.md): A type that describes a control widget’s content.
- [EmptyControlWidgetConfiguration](emptycontrolwidgetconfiguration.md): An empty control widget configuration.
- [ControlWidgetConfigurationBuilder](controlwidgetconfigurationbuilder.md): A custom attribute that constructs a control widget’s body.
- [EmptyControlWidgetTemplate](emptycontrolwidgettemplate.md): An empty control widget template.
- [ControlWidgetTemplateBuilder](controlwidgettemplatebuilder.md): A custom attribute that constructs a control widget template’s body.
- [controlWidgetActionHint(\_:)](view/controlwidgetactionhint%28__%29.md): The action hint of the control described by the modified label.
- [controlWidgetStatus(\_:)](view/controlwidgetstatus%28__%29.md): The status of the control described by the modified label.
