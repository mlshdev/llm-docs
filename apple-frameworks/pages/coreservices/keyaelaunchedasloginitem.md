> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/keyaelaunchedasloginitem

# keyAELaunchedAsLogInItem

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

If present in a `kAEOpenApplication` event, the receiving application was launched as a login item and should only perform actions suitable to that environment—for example, it probably shouldn't open an untitled document.

## Declaration

```swift
var keyAELaunchedAsLogInItem: AEKeyword { get }
```
