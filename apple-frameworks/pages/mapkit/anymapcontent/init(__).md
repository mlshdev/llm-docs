> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/anymapcontent/init(_:)

# init(\_:)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · macOS 14.5+ · tvOS 17.5+ · visionOS 1.2+ · watchOS 10.5+

Create an instance that type-erases `base`.

## Declaration

```swift
@MainActor @preconcurrency init<Content>(_ base: Content) where Content : MapContent
```
