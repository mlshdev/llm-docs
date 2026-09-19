> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1646638-anonymous/kionetworkfeaturehardwarevlan

# kIONetworkFeatureHardwareVlan

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kIONetworkFeatureHardwareVlan = 0x002
```

<a id="discussion"></a>

## Discussion

Set this bit in the value returned by getFeatures() to indicate the controller supports hardware stripping and stuffing of 802.1q vlan tags. If the controller supports this feature it must enable it when initializing so that all received packets delivered to higher layers have the tag stripped. The controller should use setVlanTag() to provide the tag information out of band.
