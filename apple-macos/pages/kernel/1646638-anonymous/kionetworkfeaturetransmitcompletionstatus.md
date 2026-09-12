> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1646638-anonymous/kionetworkfeaturetransmitcompletionstatus](https://developer.apple.com/documentation/kernel/1646638-anonymous/kionetworkfeaturetransmitcompletionstatus)

# kIONetworkFeatureTransmitCompletionStatus

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kIONetworkFeatureTransmitCompletionStatus = 0x040
```

<a id="discussion"></a>

## Discussion

Set this bit to advertise the capability to report per-packet transmit completion status. See `IONetworkInterface::reportTransmitCompletionStatus`.
