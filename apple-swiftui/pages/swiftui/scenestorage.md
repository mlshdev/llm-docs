> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scenestorage](https://developer.apple.com/documentation/swiftui/scenestorage)

# SceneStorage

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A property wrapper type that reads and writes to persisted, per-scene storage.

## Declaration

```swift
@frozen @propertyWrapper struct SceneStorage<Value>
```

<a id="overview"></a>

## Overview

You use `SceneStorage` when you need automatic state restoration of the value.  `SceneStorage` works very similar to `State`, except its initial value is restored by the system if it was previously saved, and the value is shared with other `SceneStorage` variables in the same scene.

The system manages the saving and restoring of `SceneStorage` on your behalf. The underlying data that backs `SceneStorage` is not available to you, so you must access it via the `SceneStorage` property wrapper. The system makes no guarantees as to when and how often the data will be persisted.

Each `Scene` has its own notion of `SceneStorage`, so data is not shared between scenes.

Ensure that the data you use with `SceneStorage` is lightweight. Data of a large size, such as model data, should not be stored in `SceneStorage`, as poor performance may result.

If the `Scene` is explicitly destroyed (e.g. the switcher snapshot is destroyed on iPadOS or the window is closed on macOS), the data is also destroyed. Do not use `SceneStorage` with sensitive data.

## Topics

### Storing a value

- [init(wrappedValue:\_:)](scenestorage/init%28wrappedvalue___%29.md): Creates a property that can save and restore an integer, transforming it to a `RawRepresentable` data type.
- [init(\_:)](scenestorage/init%28__%29.md): Conforms when `Value` conforms to `ExpressibleByNilLiteral`. Creates a property that can save and restore an Optional boolean.

### Getting the value

- [wrappedValue](scenestorage/wrappedvalue.md): The underlying value referenced by the state variable.
- [projectedValue](scenestorage/projectedvalue.md): A binding to the state value.

### Initializers

- [init(wrappedValue:\_:store:)](scenestorage/init%28wrappedvalue___store_%29.md): Creates a property that can save and restore tab sidebar customizations.

## Relationships

### Conforms To

- [DynamicProperty](dynamicproperty.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Saving state across app launches

- [Restoring your app’s state with SwiftUI](restoring-your-app-s-state-with-swiftui.md): Provide app continuity for users by preserving their current activities.
- [defaultAppStorage(\_:)](view/defaultappstorage%28__%29.md): The default store used by `AppStorage` contained within the view.
- [AppStorage](appstorage.md): A property wrapper type that reflects a value from `UserDefaults` and invalidates a view on a change in value in that user default.
