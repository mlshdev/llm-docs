> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/marker/init(_:coordinate:)-3bjj6

# init(\_:coordinate:)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Creates a marker at the given location.

## Declaration

```swift
@MainActor @preconcurrency init(_ titleResource: LocalizedStringResource, coordinate: CLLocationCoordinate2D) where Label == Text
```

## Parameters

- `titleResource`: The localized string for the title.
- `coordinate`: The coordinate to display the marker at.
