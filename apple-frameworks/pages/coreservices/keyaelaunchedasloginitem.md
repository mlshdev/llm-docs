> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/keyaelaunchedasloginitem](https://developer.apple.com/documentation/coreservices/keyaelaunchedasloginitem)

# keyAELaunchedAsLogInItem

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

If present in a `kAEOpenApplication` event, the receiving application was launched as a login item and should only perform actions suitable to that environment—for example, it probably shouldn't open an untitled document.

## Declaration

```swift
var keyAELaunchedAsLogInItem: AEKeyword { get }
```
