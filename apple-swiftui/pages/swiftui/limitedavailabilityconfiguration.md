> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/limitedavailabilityconfiguration](https://developer.apple.com/documentation/swiftui/limitedavailabilityconfiguration)

# LimitedAvailabilityConfiguration

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.1+

A type-erased widget configuration.

## Declaration

```swift
@MainActor @frozen @preconcurrency struct LimitedAvailabilityConfiguration
```

<a id="overview"></a>

## Overview

You don’t use this type directly. Instead SwiftUI creates this type on your behalf.

## Relationships

### Conforms To

- [WidgetConfiguration](widgetconfiguration.md)

## See Also

### Creating widgets

- [Building Widgets Using WidgetKit and SwiftUI](https://developer.apple.com/documentation/widgetkit/building-widgets-using-widgetkit-and-swiftui): Create widgets to show your app’s content on the Home screen, with custom intents for user-customizable settings.
- [Creating a widget extension](https://developer.apple.com/documentation/widgetkit/creating-a-widget-extension): Display your app’s content in a convenient, informative widget on various devices.
- [Keeping a widget up to date](https://developer.apple.com/documentation/widgetkit/keeping-a-widget-up-to-date): Plan your widget’s timeline to show timely, relevant information using dynamic views, and update the timeline when things change.
- [Making a configurable widget](https://developer.apple.com/documentation/widgetkit/making-a-configurable-widget): Give people the option to customize their widgets by adding a custom app intent to your project.
- [Widget](widget.md): The configuration and content of a widget to display on the Home screen or in Notification Center.
- [WidgetBundle](widgetbundle.md): A container used to expose multiple widgets from a single widget extension.
- [WidgetConfiguration](widgetconfiguration.md): A type that describes a widget’s content.
- [EmptyWidgetConfiguration](emptywidgetconfiguration.md): An empty widget configuration.
