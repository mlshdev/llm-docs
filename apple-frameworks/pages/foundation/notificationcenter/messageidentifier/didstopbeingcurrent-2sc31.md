> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/didstopbeingcurrent-2sc31

# didStopBeingCurrent

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The identifier of the message that posts after a mouse stops being longer the most recently used mouse.

## Declaration

```swift
static var didStopBeingCurrent: NotificationCenter.BaseMessageIdentifier<GCMouse.DidStopBeingCurrentMessage> { get }
```
