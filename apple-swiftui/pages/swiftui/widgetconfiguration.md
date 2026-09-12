> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/widgetconfiguration](https://developer.apple.com/documentation/swiftui/widgetconfiguration)

# WidgetConfiguration

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 9.0+

A type that describes a widget’s content.

## Declaration

```swift
@MainActor @preconcurrency protocol WidgetConfiguration
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

### Implementing a widget

- [body](widgetconfiguration/body-swift.property.md): The content and behavior of this widget.
- [Body](widgetconfiguration/body-swift.associatedtype.md): The type of widget configuration representing the body of this configuration.

### Setting a name

- [configurationDisplayName(\_:)](widgetconfiguration/configurationdisplayname%28__%29.md): Sets the localized name shown for a widget when a user adds or edits the widget.

### Setting a description

- [description(\_:)](widgetconfiguration/description%28__%29.md): Sets the description shown for a widget when a user adds or edits it using the contents of a text view.

### Setting the appearance

- [supportedFamilies(\_:)](widgetconfiguration/supportedfamilies%28__%29.md): Sets the sizes that a widget supports.
- [contentMarginsDisabled()](widgetconfiguration/contentmarginsdisabled%28%29.md): Disable default content margins.
- [disfavoredLocations(\_:for:)](widgetconfiguration/disfavoredlocations%28__for_%29.md): Sets the disfavored locations for a widget.
- [containerBackgroundRemovable(\_:)](widgetconfiguration/containerbackgroundremovable%28__%29.md): A modifier that marks the background of a widget as removable.

### Managing background tasks

- [backgroundTask(\_:action:)](widgetconfiguration/backgroundtask%28__action_%29.md): Runs the given action when the system provides a background task.
- [onBackgroundURLSessionEvents(matching:\_:)](widgetconfiguration/onbackgroundurlsessionevents%28matching___%29.md): Adds an action to perform when events related to a URL session identified by a closure are waiting to be processed.

### Instance Methods

- [associatedKind(\_:)](widgetconfiguration/associatedkind%28__%29.md): Tells the system that a relevance-based widget can replace a timeline-based widget.
- [promptsForUserConfiguration()](widgetconfiguration/promptsforuserconfiguration%28%29.md): Specifies that a widget’s configuration UI should be automatically presented after the widget is added.
- [pushHandler(\_:)](widgetconfiguration/pushhandler%28__%29.md): Register a type that can handle push tokens changing for widgets.
- [supplementalActivityFamilies(\_:)](widgetconfiguration/supplementalactivityfamilies%28__%29.md): Sets the sizes that a Live Activity supports.
- [supportedMountingStyles(\_:)](widgetconfiguration/supportedmountingstyles%28__%29.md): Specifies the mounting style for this widget.
- [widgetTexture(\_:)](widgetconfiguration/widgettexture%28__%29.md): Specifies the widget texture for this widget.

## Relationships

### Conforming Types

- [EmptyWidgetConfiguration](emptywidgetconfiguration.md)
- [LimitedAvailabilityConfiguration](limitedavailabilityconfiguration.md)

## See Also

### Creating widgets

- [Building Widgets Using WidgetKit and SwiftUI](https://developer.apple.com/documentation/widgetkit/building-widgets-using-widgetkit-and-swiftui): Create widgets to show your app’s content on the Home screen, with custom intents for user-customizable settings.
- [Creating a widget extension](https://developer.apple.com/documentation/widgetkit/creating-a-widget-extension): Display your app’s content in a convenient, informative widget on various devices.
- [Keeping a widget up to date](https://developer.apple.com/documentation/widgetkit/keeping-a-widget-up-to-date): Plan your widget’s timeline to show timely, relevant information using dynamic views, and update the timeline when things change.
- [Making a configurable widget](https://developer.apple.com/documentation/widgetkit/making-a-configurable-widget): Give people the option to customize their widgets by adding a custom app intent to your project.
- [Widget](widget.md): The configuration and content of a widget to display on the Home screen or in Notification Center.
- [WidgetBundle](widgetbundle.md): A container used to expose multiple widgets from a single widget extension.
- [LimitedAvailabilityConfiguration](limitedavailabilityconfiguration.md): A type-erased widget configuration.
- [EmptyWidgetConfiguration](emptywidgetconfiguration.md): An empty widget configuration.
