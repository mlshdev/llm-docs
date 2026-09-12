> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/controlconfigurationintent](https://developer.apple.com/documentation/appintents/controlconfigurationintent)

# ControlConfigurationIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

An interface for configuring a Control Center module.

## Declaration

```swift
protocol ControlConfigurationIntent : AppIntent
```

<a id="overview"></a>

## Overview

The parameters of your intent define all of the configuration options for your control.

```swift
struct SelectFocusIntent: ControlConfigurationIntent {
    static let title: LocalizedStringResource = "Select Focus"
    static let description: IntentDescription = "Turn Focus on to silence notifications and filter out distractions."

    struct FocusOptionsProvider: DynamicOptionsProvider {
        func results() async throws -> [Focus] {
            FocusManager.shared.allFocuses
        }
    }

    @Parameter(title: "Focus", default: .doNotDisturb, optionsProvider: FocusOptionsProvider())
    var focus: Focus
}
```

When using this protocol, you don’t need to provide an implementation for [perform()](appintent/perform%28%29.md). You can, however, still implement `perform()` to use the same implementation for both control configuration and as an actionable intent.

The example above provides a default value for the `focus` intent parameter. By providing a default value, you can use a non-optional value for the intent parameter. If you don’t provide a default value for the intent parameter, the parameter’s value must be optional, to allow the system to preview the control before someone configures it.

## Topics

### Associated Types

- [NeverResult](controlconfigurationintent/neverresult.md)

## Relationships

### Inherits From

- [AppIntent](appintent.md)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Controls (WidgetKit)

- [Controls](../widgetkit/controls-collection.md): Offer controls that people place in Control Center, on the Lock Screen, and on the Action button to quickly perform an action from your app.
