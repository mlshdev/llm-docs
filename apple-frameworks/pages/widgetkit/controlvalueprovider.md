> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/controlvalueprovider](https://developer.apple.com/documentation/widgetkit/controlvalueprovider)

# ControlValueProvider

**Framework:** WidgetKit  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

A type that provides a value to a control template.

## Declaration

```swift
protocol ControlValueProvider
```

<a id="overview"></a>

## Overview

The provider quickly and cheaply prepares a synchronous value to be shown while previewing the control in the add sheet. When the actual control needs to be rendered, the actual, current value will be fetched asynchronously.

For instance, a control that opens and closes a garage door may show a preview of the door being closed. When the actual control is rendered, the control may fetch the door’s status from the cloud:

```swift
struct GarageDoorValueProvider: ControlValueProvider {
    var previewValue: Bool { false }

    func currentValue() async -> Bool {
        await GarageDoorManager.shared.doorStatus()
    }
}
```

## Topics

### Associated Types

- [Value](controlvalueprovider/value.md): The type of value provided to the template.

### Instance Properties

- [previewValue](controlvalueprovider/previewvalue.md): A value to be shown while previewing the control in the add sheet.

### Instance Methods

- [currentValue()](controlvalueprovider/currentvalue%28%29.md): The current value of the control.

## See Also

### Previews

- [AppIntentControlValueProvider](appintentcontrolvalueprovider.md): A type that uses a custom intent to provide a value to a control template.
