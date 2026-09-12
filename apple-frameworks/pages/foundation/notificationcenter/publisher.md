> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/publisher](https://developer.apple.com/documentation/foundation/notificationcenter/publisher)

# NotificationCenter.Publisher

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that emits elements when broadcasting notifications.

## Declaration

```swift
struct Publisher
```

## Topics

### Declaring Publisher Topography

- [NotificationCenter.Publisher.Output](publisher/output.md): The kind of values published by this publisher.
- [NotificationCenter.Publisher.Failure](publisher/failure.md): The kind of errors this publisher might publish.

### Creating a Notification Publisher

- [init(center:name:object:)](publisher/init%28center_name_object_%29.md): Creates a publisher that emits events when broadcasting notifications.

### Inspecting Notification Center Properties

- [center](publisher/center.md): The notification center this publisher uses as a source.
- [name](publisher/name.md): The name of notifications published by this publisher.
- [object](publisher/object.md): The object posting the named notfication.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Publisher](../../combine/publisher.md)

## See Also

### Receiving notifications as a Combine publisher

- [publisher(for:object:)](publisher%28for_object_%29.md): Returns a publisher that emits events when broadcasting notifications.
