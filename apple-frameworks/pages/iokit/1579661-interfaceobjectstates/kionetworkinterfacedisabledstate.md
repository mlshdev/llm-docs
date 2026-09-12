> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1579661-interfaceobjectstates/kionetworkinterfacedisabledstate](https://developer.apple.com/documentation/iokit/1579661-interfaceobjectstates/kionetworkinterfacedisabledstate)

# kIONetworkInterfaceDisabledState

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
kIONetworkInterfaceDisabledState = 0x4
```

<a id="discussion"></a>

## Discussion

The interface is temporarily unable to service its clients. This will occur when the network controller that is servicing the interface has entered a low power state that renders it unusable.
