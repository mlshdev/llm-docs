> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scene/transformenvironment(_:transform:)](https://developer.apple.com/documentation/swiftui/scene/transformenvironment(_:transform:))

# transformEnvironment(\_:transform:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Transforms the environment value of the specified key path with the given function.

## Declaration

```swift
nonisolated func transformEnvironment<V>(_ keyPath: WritableKeyPath<EnvironmentValues, V>, transform: @escaping (inout V) -> Void) -> some Scene

```

## See Also

### Modifying the environment of a scene

- [environment(\_:)](environment%28__%29.md): Places an observable object in the scene’s environment.
- [environment(\_:\_:)](environment%28____%29.md): Sets the environment value of the specified key path to the given value.
