> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/trackedobject](https://developer.apple.com/documentation/dockkit/dockaccessory/trackedobject)

# DockAccessory.TrackedObject

**Framework:** DockKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

The state of a tracked object in the active tracking session.

## Declaration

```swift
struct TrackedObject
```

## Topics

### Instance Properties

- [identifier](trackedobject/identifier.md): A unique identifier for the tracked object. This identifier persists as long as the dock tracks the object. The value is random and doesn’t persist across sessions.
- [rect](trackedobject/rect.md): The bounding box rectangle of the tracked object in the frame.
- [saliencyRank](trackedobject/saliencyrank.md): The saliency rank of the object the dock is tracking. A lower rank indicates higher importance of the object. This property is `nil` if the saliency ranking isn’t set or the object isn’t salient.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
