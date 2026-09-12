> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environment/init(_:)](https://developer.apple.com/documentation/swiftui/environment/init(_:))

# init(\_:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an environment property to read the specified key path.

## Declaration

```swift
init(_ keyPath: KeyPath<EnvironmentValues, Value>)
```

## Parameters

- `keyPath`: A key path to a specific resulting value.

<a id="discussion"></a>

## Discussion

Don’t call this initializer directly. Instead, declare a property with the [Environment](../environment.md) property wrapper, and provide the key path of the environment value that the property should reflect:

```swift
struct MyView: View {
    @Environment(\.colorScheme) var colorScheme: ColorScheme

    // ...
}
```

SwiftUI automatically updates any parts of `MyView` that depend on the property when the associated environment value changes. You can’t modify the environment value using a property like this. Instead, use the [environment(\_:\_:)](../view/environment%28____%29.md) view modifier on a view to set a value for a view hierarchy.
