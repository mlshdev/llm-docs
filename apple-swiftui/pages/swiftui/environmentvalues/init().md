> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/init()](https://developer.apple.com/documentation/swiftui/environmentvalues/init())

# init()

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an environment values instance.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

You don’t typically create an instance of [EnvironmentValues](../environmentvalues.md) directly. Doing so would provide access only to default values that don’t update based on system settings or device characteristics. Instead, you rely on an environment values’ instance that SwiftUI manages for you when you use the [Environment](../environment.md) property wrapper and the [environment(\_:\_:)](../view/environment%28____%29.md) view modifier.

## See Also

### Creating and accessing values

- [subscript(\_:)](subscript%28__%29.md): Accesses the environment value associated with a custom key.
- [description](description.md): A string that represents the contents of the environment values instance.
