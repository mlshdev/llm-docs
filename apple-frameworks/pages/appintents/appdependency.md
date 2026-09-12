> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appdependency](https://developer.apple.com/documentation/appintents/appdependency)

# AppDependency

**Framework:** App Intents  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A property wrapper that resolves a registered dependency at runtime.

## Declaration

```swift
@propertyWrapper final class AppDependency<Value> where Value : Sendable
```

## Mentioned In

- [Responding to the Action button on Apple Watch Ultra](actionbuttonarticle.md)
- [Displaying static and interactive snippets](displaying-static-and-interactive-snippets.md)

## Topics

### Initializers

- [init(key:manager:)](appdependency/init%28key_manager_%29.md)
- [init(key:manager:default:)](appdependency/init%28key_manager_default_%29-226je.md)
- [init(key:manager:default:)](appdependency/init%28key_manager_default_%29-wvhz.md)

### Instance Properties

- [projectedValue](appdependency/projectedvalue.md)
- [wrappedValue](appdependency/wrappedvalue.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Dependency management

- [AppDependencyManager](appdependencymanager.md): An object that manages the registration and initialization of an app intent’s dependencies.
