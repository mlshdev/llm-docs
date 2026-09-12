> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1646638-anonymous/kionetworkfeaturesoftwarevlan](https://developer.apple.com/documentation/kernel/1646638-anonymous/kionetworkfeaturesoftwarevlan)

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
