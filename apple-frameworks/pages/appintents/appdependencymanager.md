> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appdependencymanager](https://developer.apple.com/documentation/appintents/appdependencymanager)

# AppDependencyManager

**Framework:** App Intents  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

An object that manages the registration and initialization of an app intent’s dependencies.

## Declaration

```swift
final class AppDependencyManager
```

## Mentioned In

- [Creating your first app intent](creating-your-first-app-intent.md)
- [Responding to the Action button on Apple Watch Ultra](actionbuttonarticle.md)

## Topics

### Initializers

- [init()](appdependencymanager/init%28%29.md): Can be used to initialize a standalone `AppDependencyManager` for dependency injection during testing.

### Instance Methods

- [add(key:dependency:)](appdependencymanager/add%28key_dependency_%29-1hqkg.md)
- [add(key:dependency:)](appdependencymanager/add%28key_dependency_%29-2le3x.md)
- [add(key:dependency:)](appdependencymanager/add%28key_dependency_%29-gth5.md)

### Type Properties

- [shared](appdependencymanager/shared.md)

### Enumerations

- [AppDependencyManager.Error](appdependencymanager/error.md)

## See Also

### Dependency management

- [AppDependency](appdependency.md): A property wrapper that resolves a registered dependency at runtime.
