> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/dockkit/dockaccessory/trackedobject/identifier

# identifier

**Framework:** DockKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

A unique identifier for the tracked object. This identifier persists as long as the dock tracks the object. The value is random and doesn’t persist across sessions.

## Declaration

```swift
var identifier: UUID
```
