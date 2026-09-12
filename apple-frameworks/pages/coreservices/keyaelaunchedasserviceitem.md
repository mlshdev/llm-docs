> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/keyaelaunchedasserviceitem](https://developer.apple.com/documentation/coreservices/keyaelaunchedasserviceitem)

# keyAELaunchedAsServiceItem

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

## Declaration

```swift
var keyAELaunchedAsServiceItem: AEKeyword { get }
```

<a id="discussion"></a>

## Discussion

If present in a `kAEOpenApplication` event, the receiving application was launched as a service item and should only perform actions suitable to that environment—for example, it probably shouldn't open an untitled document.
