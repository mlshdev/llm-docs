> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/maplocationcompass/init(scope:)](https://developer.apple.com/documentation/mapkit/maplocationcompass/init(scope:))

# init(scope:)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** watchOS 10.0+

Creates a new map location compass with the provided scope.

## Declaration

```swift
@MainActor @preconcurrency init(scope: Namespace.ID? = nil)
```

## Parameters

- `scope`: The namespace the framework passes to the associated [Map](../map.md) and [mapScope(\_:)](https://developer.apple.com/documentation/swiftui/view/mapscope%28_:%29). For use outside of [mapControls(\_:)](https://developer.apple.com/documentation/swiftui/view/mapcontrols%28_:%29).
