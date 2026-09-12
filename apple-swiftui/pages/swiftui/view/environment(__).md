> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/environment(_:)](https://developer.apple.com/documentation/swiftui/view/environment(_:))

# environment(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Places an observable object in the view’s environment.

## Declaration

```swift
nonisolated func environment<T>(_ object: T?) -> some View where T : AnyObject, T : Observable

```

## Parameters

- `object`: The object to set for this object’s type in the environment, or `nil` to clear an object of this type from the environment.

<a id="return-value"></a>

## Return Value

A view that has the specified object in its environment.

<a id="discussion"></a>

## Discussion

Use this modifier to place an object that you declare with the [Observable()](https://developer.apple.com/documentation/observation/observable%28%29) macro into a view’s environment. For example, you can add an instance of a custom observable `Profile` class to the environment of a `ContentView`:

```swift
@Observable class Profile { ... }

struct RootView: View {
    @State private var currentProfile: Profile?

    var body: some View {
        ContentView()
            .environment(currentProfile)
    }
}
```

You then read the object inside `ContentView` or one of its descendants using the [Environment](../environment.md) property wrapper:

```swift
struct ContentView: View {
    @Environment(Profile.self) private var currentProfile: Profile

    var body: some View { ... }
}
```

This modifier affects the given view, as well as that view’s descendant views. It has no effect outside the view hierarchy on which you call it. The environment of a given view hierarchy holds only one observable object of a given type.

> **Note**

> This modifier takes an object that conforms to the [Observable](https://developer.apple.com/documentation/observation/observable) protocol. To add environment objects that conform to the [ObservableObject](https://developer.apple.com/documentation/combine/observableobject) protocol, use [environmentObject(\_:)](environmentobject%28__%29.md) instead.

## See Also

### Modifying the environment of a view

- [environment(\_:\_:)](environment%28____%29.md): Sets the environment value of the specified key path to the given value.
- [transformEnvironment(\_:transform:)](transformenvironment%28__transform_%29.md): Transforms the environment value of the specified key path with the given function.
