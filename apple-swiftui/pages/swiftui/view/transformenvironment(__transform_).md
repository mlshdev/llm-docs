> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/transformenvironment(_:transform:)](https://developer.apple.com/documentation/swiftui/view/transformenvironment(_:transform:))

# transformEnvironment(\_:transform:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Transforms the environment value of the specified key path with the given function.

## Declaration

```swift
nonisolated func transformEnvironment<V>(_ keyPath: WritableKeyPath<EnvironmentValues, V>, transform: @escaping (inout V) -> Void) -> some View

```

## See Also

### Modifying the environment of a view

- [environment(\_:)](environment%28__%29.md): Places an observable object in the view’s environment.
- [environment(\_:\_:)](environment%28____%29.md): Sets the environment value of the specified key path to the given value.
