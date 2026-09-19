> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kiorequiredpacketfilters

# kIORequiredPacketFilters

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A property of IOEthernetInterface objects.

## Declaration

```objectivec
#define kIORequiredPacketFilters
```

<a id="discussion"></a>

## Discussion

The kIORequiredPacketFilters property has an OSDictionary value that describes the current set of required packet filters. Each entry in the dictionary is a key/value pair consisting of the filter group name, and an OSNumber describing the set of required filters for that group.
