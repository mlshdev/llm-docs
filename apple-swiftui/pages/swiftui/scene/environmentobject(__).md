> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scene/environmentobject(_:)](https://developer.apple.com/documentation/swiftui/scene/environmentobject(_:))

# environmentObject(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Supplies an `ObservableObject` to a view subhierarchy.

## Declaration

```swift
nonisolated func environmentObject<T>(_ object: T) -> some Scene where T : ObservableObject

```

## Parameters

- `object`: The object to store and make available to the scene’s subhierarchy.

<a id="discussion"></a>

## Discussion

The object can be read by any child by using `EnvironmentObject`:

```swift
final class Profile: ObservableObject { ... }

@main
struct MyApp: App {
    var body: some View {
        WindowGroup {
            ContentView()
        }
        .environment(ProfileService.currentProfile)
    }
}
```

You then read the object inside `ContentView` or one of its descendants using the [EnvironmentObject](../environmentobject.md) property wrapper:

```swift
struct ContentView: View {
    @EnvironmentObject private var currentAccount: Account

    var body: some View { ... }
}
```

## See Also

### Distributing model data throughout your app

- [environmentObject(\_:)](../view/environmentobject%28__%29.md): Supplies an observable object to a view’s hierarchy.
- [EnvironmentObject](../environmentobject.md): A property wrapper type for an observable object that a parent or ancestor view supplies.
