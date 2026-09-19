> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkingdriverkit/iousernetworkpacket/setvlantag

# setVlanTag

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 24.0+

## Declaration

```objectivec
void setVlanTag(uint16_t vlanTag);
```

## Parameters

- `vlanTag`: To be stored in the packet.

<a id="discussion"></a>

## Discussion

Set the Vlan Tag for the packet.

Set the Vlan Tag for the packet, where the driver has enabled the kFeatureHardwareVlan capability, or the case that feature is not enabled, this method should not be used.
