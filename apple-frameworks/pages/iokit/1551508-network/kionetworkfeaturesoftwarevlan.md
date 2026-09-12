> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1551508-network/kionetworkfeaturesoftwarevlan](https://developer.apple.com/documentation/iokit/1551508-network/kionetworkfeaturesoftwarevlan)

# kIONetworkFeatureSoftwareVlan

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

## Declaration

```objectivec
kIONetworkFeatureSoftwareVlan = 0x004
```

<a id="discussion"></a>

## Discussion

Set this bit in the value returned by getFeatures() to indicate that the controller can support software based vlan by transmitting and receiving packets 4 bytes longer that normal.
