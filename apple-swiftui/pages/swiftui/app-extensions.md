> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/app-extensions](https://developer.apple.com/documentation/swiftui/app-extensions)

# App extensions

**Framework:** SwiftUI  
**Kind:** API Collection

Extend your app’s basic functionality to other parts of the system, like by adding a Widget.

<a id="Overview"></a>

## Overview

Use SwiftUI along with [WidgetKit](https://developer.apple.com/documentation/widgetkit) to add widgets to your app.

![](https://developer.apple.com/images/com.apple.SwiftUI/app-extensions-hero@2x.png)

Widgets provide quick access to relevant content from your app. Define a structure that conforms to the [Widget](widget.md) protocol, and declare a view hierarchy for the widget. Configure the views inside the widget as you do other SwiftUI views, using view modifiers, including a few widget-specific modifiers.

For design guidance, see [Widgets](https://developer.apple.com/design/human-interface-guidelines/widgets) in the Human Interface Guidelines.

## Topics

### Creating widgets

- [Building Widgets Using WidgetKit and SwiftUI](https://developer.apple.com/documentation/widgetkit/building-widgets-using-widgetkit-and-swiftui): Create widgets to show your app’s content on the Home screen, with custom intents for user-customizable settings.
- [Creating a widget extension](https://developer.apple.com/documentation/widgetkit/creating-a-widget-extension): Display your app’s content in a convenient, informative widget on various devices.
- [Keeping a widget up to date](https://developer.apple.com/documentation/widgetkit/keeping-a-widget-up-to-date): Plan your widget’s timeline to show timely, relevant information using dynamic views, and update the timeline when things change.
- [Making a configurable widget](https://developer.apple.com/documentation/widgetkit/making-a-configurable-widget): Give people the option to customize their widgets by adding a custom app intent to your project.
- [Widget](widget.md): The configuration and content of a widget to display on the Home screen or in Notification Center.
- [WidgetBundle](widgetbundle.md): A container used to expose multiple widgets from a single widget extension.
- [LimitedAvailabilityConfiguration](limitedavailabilityconfiguration.md): A type-erased widget configuration.
- [WidgetConfiguration](widgetconfiguration.md): A type that describes a widget’s content.
- [EmptyWidgetConfiguration](emptywidgetconfiguration.md): An empty widget configuration.

### Composing control widgets

- [ControlWidget](controlwidget.md): The configuration and content of a control widget to display in system spaces such as Control Center, the Lock Screen, and the Action Button.
- [ControlWidgetConfiguration](controlwidgetconfiguration.md): A type that describes a control widget’s content.
- [EmptyControlWidgetConfiguration](emptycontrolwidgetconfiguration.md): An empty control widget configuration.
- [ControlWidgetConfigurationBuilder](controlwidgetconfigurationbuilder.md): A custom attribute that constructs a control widget’s body.
- [ControlWidgetTemplate](controlwidgettemplate.md): A type that describes a control widget’s content.
- [EmptyControlWidgetTemplate](emptycontrolwidgettemplate.md): An empty control widget template.
- [ControlWidgetTemplateBuilder](controlwidgettemplatebuilder.md): A custom attribute that constructs a control widget template’s body.
- [controlWidgetActionHint(\_:)](view/controlwidgetactionhint%28__%29.md): The action hint of the control described by the modified label.
- [controlWidgetStatus(\_:)](view/controlwidgetstatus%28__%29.md): The status of the control described by the modified label.

### Labeling a widget

- [widgetLabel(\_:)](view/widgetlabel%28__%29.md): Returns a localized text label that displays additional content outside the accessory family widget’s main SwiftUI view.
- [widgetLabel(label:)](view/widgetlabel%28label_%29.md): Creates a label for displaying additional content outside an accessory family widget’s main SwiftUI view.

### Styling a widget group

- [accessoryWidgetGroupStyle(\_:)](view/accessorywidgetgroupstyle%28__%29.md): The view modifier that can be applied to `AccessoryWidgetGroup` to specify the shape the three content views will be masked with. The value of `style` is set to `.automatic`, which is `.circular` by default.

### Controlling the accented group

- [widgetAccentable(\_:)](view/widgetaccentable%28__%29.md): Adds the view and all of its subviews to the accented group.

### Managing placement in the Dynamic Island

- [dynamicIsland(verticalPlacement:)](view/dynamicisland%28verticalplacement_%29.md): Specifies the vertical placement for a view of an expanded Live Activity that appears in the Dynamic Island.

## See Also

### App structure

- [App organization](app-organization.md): Define the entry point and top-level structure of your app.
- [Scenes](scenes.md): Declare the user interface groupings that make up the parts of your app.
- [Windows](windows.md): Display user interface content in a window or a collection of windows.
- [Immersive spaces](immersive-spaces.md): Display unbounded content in a person’s surroundings.
- [Documents](documents.md): Enable people to open and manage documents.
- [Navigation](navigation.md): Enable people to move between different parts of your app’s view hierarchy within a scene.
- [Modal presentations](modal-presentations.md): Present content in a separate view that offers focused interaction.
- [Toolbars](toolbars.md): Provide immediate access to frequently used commands and controls.
- [Search](search.md): Enable people to search for text or other content within your app.
