> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1646687-anonymous/kionetworkinterfacedisabledstate](https://developer.apple.com/documentation/kernel/1646687-anonymous/kionetworkinterfacedisabledstate)

# kIONetworkInterfaceDisabledState

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kIONetworkInterfaceDisabledState = 0x4
```

<a id="discussion"></a>

## Discussion

The interface is temporarily unable to service its clients. This will occur when the network controller that is servicing the interface has entered a low power state that renders it unusable.
