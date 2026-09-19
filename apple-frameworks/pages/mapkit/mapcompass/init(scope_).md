> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mapcompass/init(scope:)

# init(scope:)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Creates a new map compass with the scope you specify.

## Declaration

```swift
@MainActor @preconcurrency init(scope: Namespace.ID? = nil)
```

## Parameters

- `scope`: A [Namespace.ID](https://developer.apple.com/documentation/swiftui/namespace/id) value that identifies a namespace and that you use to associate this control with a map instance.
