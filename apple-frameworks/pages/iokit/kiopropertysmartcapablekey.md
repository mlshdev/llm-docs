> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kiopropertysmartcapablekey

# kIOPropertySMARTCapableKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

## Declaration

```objectivec
#define kIOPropertySMARTCapableKey
```

<a id="discussion"></a>

## Discussion

Property to search for in IORegistry to find SMART capable devices without hardcoding the search to a particular device class.
