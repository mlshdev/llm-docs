> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/notificationcenter/publisher(for:object:)

# publisher(for:object:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a publisher that emits events when broadcasting notifications.

## Declaration

```swift
func publisher(for name: Notification.Name, object: AnyObject? = nil) -> NotificationCenter.Publisher
```

## Parameters

- `name`: The name of the notification to publish.
- `object`: The object posting the named notification. If `nil`, the publisher emits elements for any object producing a notification with the given name.

<a id="return-value"></a>

## Return Value

A [Publisher](../../combine/publisher.md) that emits events when broadcasting notifications.

## See Also

### Receiving notifications as a Combine publisher

- [NotificationCenter.Publisher](publisher.md): A publisher that emits elements when broadcasting notifications.
