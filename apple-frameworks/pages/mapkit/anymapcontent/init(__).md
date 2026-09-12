> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/anymapcontent/init(_:)](https://developer.apple.com/documentation/mapkit/anymapcontent/init(_:))

# init(\_:)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · macOS 14.5+ · tvOS 17.5+ · visionOS 1.2+ · watchOS 10.5+

Create an instance that type-erases `base`.

## Declaration

```swift
@MainActor @preconcurrency init<Content>(_ base: Content) where Content : MapContent
```
