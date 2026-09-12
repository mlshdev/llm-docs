> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkpacket/getvlantag](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkpacket/getvlantag)

# getVlanTag

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 24.0+

## Declaration

```objectivec
bool getVlanTag(uint16_t *vlanTag) const;
```

## Parameters

- `vlanTag`: Pointer to return vlanTag from the packet.

<a id="return-value"></a>

## Return Value

True if the tag is present, false otherwise.

<a id="discussion"></a>

## Discussion

Get the Vlan Tag from the packet, where the driver has enabled the kFeatureHardwareVlan capability, for the case that feature is not enabled, this method will return false.
