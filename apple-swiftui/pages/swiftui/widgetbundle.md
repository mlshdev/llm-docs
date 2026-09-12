> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/widgetbundle](https://developer.apple.com/documentation/swiftui/widgetbundle)

# WidgetBundle

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 9.0+

A container used to expose multiple widgets from a single widget extension.

## Declaration

```swift
@MainActor @preconcurrency protocol WidgetBundle
```

<a id="overview"></a>

## Overview

To support multiple types of widgets, add the `@main` attribute to a structure that conforms to `WidgetBundle`. For example, a game might have one widget to display summary information about the game and a second widget to display detailed information about individual characters.

```swift
@main
struct GameWidgets: WidgetBundle {
   var body: some Widget {
       GameStatusWidget()
       CharacterDetailWidget()
   }
}
```

## Topics

### Implementing a widget bundle

- [body](widgetbundle/body-swift.property.md): Declares the group of widgets that an app supports.
- [Body](widgetbundle/body-swift.associatedtype.md): The type of widget that represents the content of the bundle.
- [WidgetBundleBuilder](widgetbundlebuilder.md): A custom attribute that constructs a widget bundle’s body.

### Running a widget bundle

- [init()](widgetbundle/init%28%29.md): Creates a widget bundle using the bundle’s body as its content.
- [main()](widgetbundle/main%28%29.md): Initializes and runs the widget bundle.

## See Also

### Creating widgets

- [Building Widgets Using WidgetKit and SwiftUI](https://developer.apple.com/documentation/widgetkit/building-widgets-using-widgetkit-and-swiftui): Create widgets to show your app’s content on the Home screen, with custom intents for user-customizable settings.
- [Creating a widget extension](https://developer.apple.com/documentation/widgetkit/creating-a-widget-extension): Display your app’s content in a convenient, informative widget on various devices.
- [Keeping a widget up to date](https://developer.apple.com/documentation/widgetkit/keeping-a-widget-up-to-date): Plan your widget’s timeline to show timely, relevant information using dynamic views, and update the timeline when things change.
- [Making a configurable widget](https://developer.apple.com/documentation/widgetkit/making-a-configurable-widget): Give people the option to customize their widgets by adding a custom app intent to your project.
- [Widget](widget.md): The configuration and content of a widget to display on the Home screen or in Notification Center.
- [LimitedAvailabilityConfiguration](limitedavailabilityconfiguration.md): A type-erased widget configuration.
- [WidgetConfiguration](widgetconfiguration.md): A type that describes a widget’s content.
- [EmptyWidgetConfiguration](emptywidgetconfiguration.md): An empty widget configuration.
