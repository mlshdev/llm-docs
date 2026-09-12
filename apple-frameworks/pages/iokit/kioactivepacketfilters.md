> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kioactivepacketfilters](https://developer.apple.com/documentation/iokit/kioactivepacketfilters)

# kIOActivePacketFilters

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A property of IOEthernetInterface objects.

## Declaration

```objectivec
#define kIOActivePacketFilters
```

<a id="discussion"></a>

## Discussion

The kIOActivePacketFilters property has an OSDictionary value that describes the current set of packet filters that have been successfully activated. Each entry in the dictionary is a key/value pair consisting of the filter group name, and an OSNumber describing the set of active filters for that group. Entries in this dictionary will mirror those in kIORequiredPacketFilters if the controller has reported success for all filter change requests from the IOEthernetInterface object.
