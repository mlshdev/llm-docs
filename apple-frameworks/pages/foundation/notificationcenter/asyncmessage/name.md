> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/notificationcenter/asyncmessage/name

# name

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A optional name corresponding to this type, used to interoperate with notification posters and observers.

## Declaration

```swift
static var name: Notification.Name { get }
```

## Default Implementations

### NotificationCenter.AsyncMessage Implementations

- [name](name-6jusd.md): A optional name corresponding to this type, used to interoperate with notification posters and observers.

## See Also

### Declaring the message name and subject

- [Subject](subject.md): A type which you can optionally post and observe along with this `AsyncMessage`.
