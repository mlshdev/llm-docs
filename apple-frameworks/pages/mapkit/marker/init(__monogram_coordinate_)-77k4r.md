> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/marker/init(_:monogram:coordinate:)-77k4r

# init(\_:monogram:coordinate:)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Creates a marker at the given location with a monogram displayed as the balloon’s icon.

## Declaration

```swift
@MainActor @preconcurrency init(_ titleResource: LocalizedStringResource, monogram: Text, coordinate: CLLocationCoordinate2D) where Label == Label<Text, Text>
```

## Parameters

- `titleResource`: The localized string for the title.
- `monogram`: Up to three characters to display on the marker’s balloon.
- `coordinate`: The coordinate to display the marker at.
