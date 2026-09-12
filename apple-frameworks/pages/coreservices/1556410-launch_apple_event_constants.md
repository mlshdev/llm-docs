> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1556410-launch_apple_event_constants](https://developer.apple.com/documentation/coreservices/1556410-launch_apple_event_constants)

# Launch Apple Event Constants

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

In a `kAEOpenApplication` event, specify information about how the receiving application was launched.

## Declaration

```objectivec
enum : AEKeyword {
    ...
};
```

## Topics

### Constants

- [keyAELaunchedAsLogInItem](1556410-launch_apple_event_constants/keyaelaunchedasloginitem.md): If present in a `kAEOpenApplication` event, the receiving application was launched as a login item and should only perform actions suitable to that environment—for example, it probably shouldn't open an untitled document.
- [keyAELaunchedAsServiceItem](1556410-launch_apple_event_constants/keyaelaunchedasserviceitem.md)
