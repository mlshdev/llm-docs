> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/controlwidgetstatus(_:)](https://developer.apple.com/documentation/swiftui/view/controlwidgetstatus(_:))

# controlWidgetStatus(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

The status of the control described by the modified label.

## Declaration

```swift
@MainActor @preconcurrency func controlWidgetStatus(_ status: LocalizedStringResource) -> some View

```

## Parameters

- `status`: The localized string resource to display.

<a id="discussion"></a>

## Discussion

This text appears in Control Center when your control’s state changes. You can customize the text by applying this modifier to the control’s value label:

```swift
// Status Text: "Do Not Disturb Until This Evening" / "Do Not Disturb Disabled"
ControlWidgetToggle("Do Not Disturb", ...) { isOn in
    Image(systemName: "moon")
        .controlWidgetStatus(isOn ? "Do Not Disturb Until This Evening" : "Do Not Disturb Disabled")
}
```

## See Also

### Composing control widgets

- [ControlWidget](../controlwidget.md): The configuration and content of a control widget to display in system spaces such as Control Center, the Lock Screen, and the Action Button.
- [ControlWidgetConfiguration](../controlwidgetconfiguration.md): A type that describes a control widget’s content.
- [EmptyControlWidgetConfiguration](../emptycontrolwidgetconfiguration.md): An empty control widget configuration.
- [ControlWidgetConfigurationBuilder](../controlwidgetconfigurationbuilder.md): A custom attribute that constructs a control widget’s body.
- [ControlWidgetTemplate](../controlwidgettemplate.md): A type that describes a control widget’s content.
- [EmptyControlWidgetTemplate](../emptycontrolwidgettemplate.md): An empty control widget template.
- [ControlWidgetTemplateBuilder](../controlwidgettemplatebuilder.md): A custom attribute that constructs a control widget template’s body.
- [controlWidgetActionHint(\_:)](controlwidgetactionhint%28__%29.md): The action hint of the control described by the modified label.
