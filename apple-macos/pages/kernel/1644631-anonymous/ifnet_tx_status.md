> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1644631-anonymous/ifnet_tx_status

# IFNET_TX_STATUS

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
IFNET_TX_STATUS = 0x00800000
```

<a id="discussion"></a>

## Discussion

Driver supports returning a per packet transmission status (pass, fail or other errors) of whether the packet was successfully transmitted on the link, or the transmission was aborted, or transmission failed.
