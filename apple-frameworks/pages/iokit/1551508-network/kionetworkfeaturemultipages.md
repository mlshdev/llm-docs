> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1551508-network/kionetworkfeaturemultipages](https://developer.apple.com/documentation/iokit/1551508-network/kionetworkfeaturemultipages)

# kIONetworkFeatureMultiPages

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

## Declaration

```objectivec
kIONetworkFeatureMultiPages = 0x008
```

<a id="discussion"></a>

## Discussion

Set this bit if the driver is capable of handling packets coming down from the network stack that reside in virtually, but not in physically contiguous span of the external mbuf clusters. In this case, the data area of a packet in the external mbuf cluster might cross one or more physical pages that are disjoint, depending on the interface MTU and the packet size. Such a use of larger than system page size clusters by the network stack is done for better system efficiency. Drivers that utilize the IOMbufNaturalMemoryCursor with the getPhysicalSegmentsWithCoalesce interfaces and enumerate the list of vectors should set this flag for possible gain in performance during bulk data transfer.
