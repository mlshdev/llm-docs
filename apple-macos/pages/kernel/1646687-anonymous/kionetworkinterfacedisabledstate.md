> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1646687-anonymous/kionetworkinterfacedisabledstate

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
