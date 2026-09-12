> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsitaggedtaskidentifier](https://developer.apple.com/documentation/iokit/scsitaggedtaskidentifier)

# SCSITaggedTaskIdentifier

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

64-bit number to represent a unique task identifier.

## Declaration

```objectivec
typedef UInt64 SCSITaggedTaskIdentifier;
```

<a id="discussion"></a>

## Discussion

The Tagged Task Identifier is used when a Task has a Task Attribute other than SIMPLE. The SCSI Application Layer client that controls the Logical Unit for which a Task is intended is required to guarantee that the Task Tag Identifier is unique. Zero cannot be used a a Tag value as this is used to when a Tagged Task Identifier value is needed for a Task with a SIMPLE attribute.
