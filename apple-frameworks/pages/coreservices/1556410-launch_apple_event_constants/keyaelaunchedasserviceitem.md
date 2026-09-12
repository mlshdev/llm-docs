> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1556410-launch_apple_event_constants/keyaelaunchedasserviceitem](https://developer.apple.com/documentation/coreservices/1556410-launch_apple_event_constants/keyaelaunchedasserviceitem)

# keyAELaunchedAsServiceItem

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

## Declaration

```objectivec
keyAELaunchedAsServiceItem = 'svit'
```

<a id="discussion"></a>

## Discussion

If present in a `kAEOpenApplication` event, the receiving application was launched as a service item and should only perform actions suitable to that environment—for example, it probably shouldn't open an untitled document.
