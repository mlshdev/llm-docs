> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1542914-anonymous/kaecaninteract](https://developer.apple.com/documentation/coreservices/1542914-anonymous/kaecaninteract)

# kAECanInteract

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
kAECanInteract = 0x00000020
```

<a id="discussion"></a>

## Discussion

The user interaction preference—the server application can interact with the user in response to the Apple event. By convention, you set the bit specified by this constant if the user needs to supply information to the server. If you set the bit and the server allows interaction, the `AEInteractWithUser` function either brings the server application to the foreground or posts a notification request. When you send an Apple event to a local application, the default is to set this bit.
