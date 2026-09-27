> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/kaeapplicationdied

# kAEApplicationDied

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Event sent by the Process Manager to an application that launched another application when the launched application quits or terminates.

## Declaration

```swift
var kAEApplicationDied: AEEventID { get }
```
