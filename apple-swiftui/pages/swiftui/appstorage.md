> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/appstorage](https://developer.apple.com/documentation/swiftui/appstorage)

# AppStorage

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A property wrapper type that reflects a value from `UserDefaults` and invalidates a view on a change in value in that user default.

## Declaration

```swift
@frozen @propertyWrapper struct AppStorage<Value>
```

## Topics

### Storing a value

- [init(wrappedValue:\_:store:)](appstorage/init%28wrappedvalue___store_%29.md): Creates a property that can save and restore tab sidebar customizations.
- [init(\_:store:)](appstorage/init%28__store_%29.md): Conforms when `Value` conforms to `ExpressibleByNilLiteral`. Creates a property that can read and write an Optional boolean user default.

### Getting the value

- [wrappedValue](appstorage/wrappedvalue.md)
- [projectedValue](appstorage/projectedvalue.md)

## Relationships

### Conforms To

- [DynamicProperty](dynamicproperty.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Saving state across app launches

- [Restoring your app’s state with SwiftUI](restoring-your-app-s-state-with-swiftui.md): Provide app continuity for users by preserving their current activities.
- [defaultAppStorage(\_:)](view/defaultappstorage%28__%29.md): The default store used by `AppStorage` contained within the view.
- [SceneStorage](scenestorage.md): A property wrapper type that reads and writes to persisted, per-scene storage.
