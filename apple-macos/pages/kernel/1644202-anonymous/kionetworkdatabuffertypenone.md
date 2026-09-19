> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1644202-anonymous/kionetworkdatabuffertypenone

# kIONetworkDataBufferTypeNone

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kIONetworkDataBufferTypeNone
```

<a id="discussion"></a>

## Discussion

No data buffer. The only useful action perfomed by an IONetworkData object with this buffer type is to call the access notification handler.
