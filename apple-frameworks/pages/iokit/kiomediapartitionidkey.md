> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiomediapartitionidkey](https://developer.apple.com/documentation/iokit/kiomediapartitionidkey)

# kIOMediaPartitionIDKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A property of IOMedia objects.

## Declaration

```objectivec
#define kIOMediaPartitionIDKey
```

<a id="discussion"></a>

## Discussion

The kIOMediaPartitionIDKey property has an OSNumber value and is placed into an IOMedia instance created via the partition scheme. It is an ID that differentiates one partition from the other (within a given scheme). It is typically an index into the on-disk partition table.
