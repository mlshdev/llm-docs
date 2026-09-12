> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kionetworkdatabytes](https://developer.apple.com/documentation/iokit/kionetworkdatabytes)

# kIONetworkDataBytes

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A property of IONetworkData objects.

## Declaration

```objectivec
#define kIONetworkDataBytes
```

<a id="discussion"></a>

## Discussion

The kIONetworkDataBytes property is an OSData that describes the data buffer of an IONetworkData object. This property is present only if kIONetworkDataAccessTypeSerialize access is supported.
