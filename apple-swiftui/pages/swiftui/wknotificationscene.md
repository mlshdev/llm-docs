> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/wknotificationscene

# WKNotificationScene

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** watchOS 7.0+

A scene which appears in response to receiving the specified category of remote or local notifications.

## Declaration

```swift
nonisolated struct WKNotificationScene<Content, Controller> where Content : View, Controller : WKUserNotificationHostingController<Content>
```

## Mentioned In

- [Declaring a custom view](declaring-a-custom-view.md)

## Topics

### Creating a notification scene

- [init(controller:category:)](wknotificationscene/init%28controller_category_%29.md): Creates a scene that appears in response to receiving a specific category of remote or local notifications.

## Relationships

### Conforms To

- [Scene](scene.md)
