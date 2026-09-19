> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mappitchtoggle/init(scope:)

# init(scope:)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS

Creates a new map pitch toggle control with the provided scope.

## Declaration

```swift
@MainActor @preconcurrency init(scope: Namespace.ID? = nil)
```

## Parameters

- `scope`: The namespace the framework passes to the associated [Map](../map.md) and [mapScope(\_:)](https://developer.apple.com/documentation/swiftui/view/mapscope%28_:%29).
