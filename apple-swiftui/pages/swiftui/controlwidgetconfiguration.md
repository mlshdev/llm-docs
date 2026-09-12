> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/controlwidgetconfiguration](https://developer.apple.com/documentation/swiftui/controlwidgetconfiguration)

# ControlWidgetConfiguration

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

A type that describes a control widget’s content.

## Declaration

```swift
@MainActor @preconcurrency protocol ControlWidgetConfiguration
```

<a id="overview"></a>

## Overview

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

- [Body](controlwidgetconfiguration/body-swift.associatedtype.md): The type of control widget configuration representing the body of this configuration.

### Instance Properties

- [body](controlwidgetconfiguration/body-swift.property.md): The content and behavior of the control.

### Instance Methods

- [description(\_:)](controlwidgetconfiguration/description%28__%29.md): Sets the description shown for the control when a user adds or edits it, using the specified string.
- [displayName(\_:)](controlwidgetconfiguration/displayname%28__%29.md): Sets the name shown for the control when a user adds or edits it, using the specified string.
- [promptsForUserConfiguration()](controlwidgetconfiguration/promptsforuserconfiguration%28%29.md): Specifies that a control’s configuration UI should be automatically presented after the widget is added.
- [pushHandler(\_:)](controlwidgetconfiguration/pushhandler%28__%29.md): Register a type that can handle push tokens changing for controls of this type.

## Relationships

### Conforming Types

- [EmptyControlWidgetConfiguration](emptycontrolwidgetconfiguration.md)

## See Also

### Composing control widgets

- [ControlWidget](controlwidget.md): The configuration and content of a control widget to display in system spaces such as Control Center, the Lock Screen, and the Action Button.
- [EmptyControlWidgetConfiguration](emptycontrolwidgetconfiguration.md): An empty control widget configuration.
- [ControlWidgetConfigurationBuilder](controlwidgetconfigurationbuilder.md): A custom attribute that constructs a control widget’s body.
- [ControlWidgetTemplate](controlwidgettemplate.md): A type that describes a control widget’s content.
- [EmptyControlWidgetTemplate](emptycontrolwidgettemplate.md): An empty control widget template.
- [ControlWidgetTemplateBuilder](controlwidgettemplatebuilder.md): A custom attribute that constructs a control widget template’s body.
- [controlWidgetActionHint(\_:)](view/controlwidgetactionhint%28__%29.md): The action hint of the control described by the modified label.
- [controlWidgetStatus(\_:)](view/controlwidgetstatus%28__%29.md): The status of the control described by the modified label.
