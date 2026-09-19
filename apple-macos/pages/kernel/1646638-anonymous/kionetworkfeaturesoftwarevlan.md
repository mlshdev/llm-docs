> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1646638-anonymous/kionetworkfeaturesoftwarevlan

# kIONetworkFeatureSoftwareVlan

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kIONetworkFeatureSoftwareVlan = 0x004
```

<a id="discussion"></a>

## Discussion

Set this bit in the value returned by getFeatures() to indicate that the controller can support software based vlan by transmitting and receiving packets 4 bytes longer that normal.
