> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/widgetinfo](https://developer.apple.com/documentation/widgetkit/widgetinfo)

# WidgetInfo

**Framework:** WidgetKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 26.0+ · watchOS 9.0+

A structure that contains information about user-configured widgets.

## Declaration

```swift
@preconcurrency struct WidgetInfo
```

## Mentioned In

- [Making a configurable widget](making-a-configurable-widget.md)
- [Updating widgets with WidgetKit push notifications](updating-widgets-with-widgetkit-push-notifications.md)

## Topics

### Getting Configured Widget Information

- [kind](widgetinfo/kind.md): The string specified during creation of the widget’s configuration.
- [family](widgetinfo/family.md): The size of the widget: small, medium, or large.
- [configuration](widgetinfo/configuration.md): A SiriKit intent that contains user-edited values.

### Identifying Widget Information

- [id](widgetinfo/id.md): The stable identity of the widget.

### Instance Methods

- [widgetConfigurationIntent(of:)](widgetinfo/widgetconfigurationintent%28of_%29.md): Gets the associated App Intent.

### Default Implementations

- [Identifiable Implementations](widgetinfo/identifiable-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configurable widgets

- [Making a configurable widget](making-a-configurable-widget.md): Give people the option to customize their widgets by adding a custom app intent to your project.
- [Migrating widgets from SiriKit Intents to App Intents](migrating-from-sirikit-intents-to-app-intents.md): Configure your widgets for backward compatibility.
- [AppIntentConfiguration](appintentconfiguration.md): An object describing the content of a widget that uses a custom intent to provide user-configurable options.
