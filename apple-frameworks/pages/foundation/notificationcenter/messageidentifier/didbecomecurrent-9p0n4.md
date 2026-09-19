> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/didbecomecurrent-9p0n4

# didBecomeCurrent

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The identifier of the message that posts after a game controller becomes the most recently used controller.

## Declaration

```swift
static var didBecomeCurrent: NotificationCenter.BaseMessageIdentifier<GCController.DidBecomeCurrentMessage> { get }
```
