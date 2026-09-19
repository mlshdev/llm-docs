> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/1547636-networkdatabuffertypes/kionetworkdatabuffertypenone

# kIONetworkDataBufferTypeNone

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
kIONetworkDataBufferTypeNone
```

<a id="discussion"></a>

## Discussion

No data buffer. The only useful action perfomed by an IONetworkData object with this buffer type is to call the access notification handler.
