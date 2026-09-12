> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/setfocusfilterintent](https://developer.apple.com/documentation/appintents/setfocusfilterintent)

# SetFocusFilterIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

An interface for providing an app intent that you use to adapt your app’s behavior when Focus changes.

## Declaration

```swift
protocol SetFocusFilterIntent : AppIntent, InstanceDisplayRepresentable
```

<a id="overview"></a>

## Overview

> **Related sessions from WWDC22**

>  Session 10121: [Meet Focus filters](https://developer.apple.com/videos/play/wwdc2022/10121).

## Topics

### Getting the current app configuration

- [current](setfocusfilterintent/current.md)
- [suggestedFocusFilters(for:)](setfocusfilterintent/suggestedfocusfilters%28for_%29.md): You can implement this method to return a list of suggested focus configurations. This is useful when the suggested focus configurations are different from the configuration when the focus is turned off.

### Configuring app context for the Focus

- [appContext](setfocusfilterintent/appcontext.md): An app context that is associated with the focus configuration. The system will retrieve this app context and adapt the system behavior based on the context provided.
- [invalidateFocusFilterAppContext()](setfocusfilterintent/invalidatefocusfilterappcontext%28%29.md)

## Relationships

### Inherits From

- [AppIntent](appintent.md)
- [CustomLocalizedStringResourceConvertible](../foundation/customlocalizedstringresourceconvertible.md)
- [InstanceDisplayRepresentable](instancedisplayrepresentable.md)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Focus filters

- [Defining your app’s Focus filter](defining-your-app-s-focus-filter.md): Customize your app’s behavior to reflect the device’s current Focus.
- [FocusFilterAppContext](focusfilterappcontext.md): A type that contains app-specific contextual information for a particular Focus, such as the notification filter criteria to apply.
- [FocusFilterSuggestionContext](focusfiltersuggestioncontext.md): A type you use to suggest app configurations for a given Focus.
