> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/1551508-network/kionetworkfeaturetransmitcompletionstatus

# kIONetworkFeatureTransmitCompletionStatus

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+

## Declaration

```objectivec
kIONetworkFeatureTransmitCompletionStatus = 0x040
```

<a id="discussion"></a>

## Discussion

Set this bit to advertise the capability to report per-packet transmit completion status. See `IONetworkInterface::reportTransmitCompletionStatus`.
