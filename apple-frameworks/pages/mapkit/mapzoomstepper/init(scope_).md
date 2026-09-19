> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mapzoomstepper/init(scope:)

# init(scope:)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** Mac Catalyst 14.0+ · macOS 14.0+

Creates a new zoom stepper with the scope you specify.

## Declaration

```swift
@MainActor @preconcurrency init(scope: Namespace.ID? = nil)
```

## Parameters

- `scope`: A [Namespace.ID](https://developer.apple.com/documentation/swiftui/namespace/id) value that identifies this namespace.
