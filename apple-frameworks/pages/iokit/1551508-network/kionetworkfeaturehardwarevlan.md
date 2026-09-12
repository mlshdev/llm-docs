> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1551508-network/kionetworkfeaturehardwarevlan](https://developer.apple.com/documentation/iokit/1551508-network/kionetworkfeaturehardwarevlan)

# kIONetworkFeatureHardwareVlan

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

## Declaration

```objectivec
kIONetworkFeatureHardwareVlan = 0x002
```

<a id="discussion"></a>

## Discussion

Set this bit in the value returned by getFeatures() to indicate the controller supports hardware stripping and stuffing of 802.1q vlan tags. If the controller supports this feature it must enable it when initializing so that all received packets delivered to higher layers have the tag stripped. The controller should use setVlanTag() to provide the tag information out of band.
