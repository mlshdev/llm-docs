> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1542914-anonymous/kaealwaysinteract](https://developer.apple.com/documentation/coreservices/1542914-anonymous/kaealwaysinteract)

# kAEAlwaysInteract

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
kAEAlwaysInteract = 0x00000030
```

<a id="discussion"></a>

## Discussion

The user interaction preference—the server application should always interact with the user in response to the Apple event. By convention, you set the bit specified by this constant whenever the server application normally asks a user to confirm a decision or interact in any other way, even if no additional information is needed from the user. If you set the bit specified by this constant, the `AEInteractWithUser` function either brings the server application to the foreground or posts a notification request.
