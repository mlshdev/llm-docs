> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kiomulticastaddresslist

# kIOMulticastAddressList

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A property of IOEthernetInterface objects.

## Declaration

```objectivec
#define kIOMulticastAddressList
```

<a id="discussion"></a>

## Discussion

The kIOMulticastAddressList property is an OSData object that describes the list of multicast addresses that are being used by the controller to match against the destination address of an incoming frame.
