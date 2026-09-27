> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/dockkit/dockaccessory/trackedperson/identifier

# identifier

**Framework:** DockKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

A unique identifier representing the tracked person. This identifier persists as long as the dock tracks the person. The value is random and doesn’t persist across sessions.

## Declaration

```swift
var identifier: UUID
```
