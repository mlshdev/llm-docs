> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/environmentobject(_:)](https://developer.apple.com/documentation/swiftui/view/environmentobject(_:))

# environmentObject(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Supplies an observable object to a view’s hierarchy.

## Declaration

```swift
nonisolated func environmentObject<T>(_ object: T) -> some View where T : ObservableObject

```

## Parameters

- `object`: The object to store and make available to the view’s hierarchy.

<a id="discussion"></a>

## Discussion

Use this modifier to add an observable object to a view’s environment. The object must conform to the [ObservableObject](https://developer.apple.com/documentation/combine/observableobject) protocol.

Adding an object to a view’s environment makes the object available to subviews in the view’s hierarchy. To retrieve the object in a subview, use the [EnvironmentObject](../environmentobject.md) property wrapper.

> **Note**

> If the observable object conforms to the [Observable](https://developer.apple.com/documentation/observation/observable) protocol, use either [environment(\_:)](environment%28__%29.md) or the [environment(\_:\_:)](environment%28____%29.md) modifier to add the object to the view’s environment.

## See Also

### Distributing model data throughout your app

- [environmentObject(\_:)](../scene/environmentobject%28__%29.md): Supplies an `ObservableObject` to a view subhierarchy.
- [EnvironmentObject](../environmentobject.md): A property wrapper type for an observable object that a parent or ancestor view supplies.
