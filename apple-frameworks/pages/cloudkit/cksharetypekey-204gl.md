> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksharetypekey-204gl](https://developer.apple.com/documentation/cloudkit/cksharetypekey-204gl)

# CKShareTypeKey

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The system field key for the share’s type.

## Declaration

```objectivec
extern CKRecordFieldKey const CKShareTypeKey;
```

<a id="discussion"></a>

## Discussion

This predefined key is part of the `CKRecordTypeShare` schema.  It is used by the out of process UI flow to send a share, and as part of the share acceptance flow.  It is an optional value on a `CKShare` record.

## See Also

### Subscripting

- [CKShareTitleKey](cksharetitlekey-9yavd.md): The system field key for the share’s title.
- [CKShareThumbnailImageDataKey](cksharethumbnailimagedatakey-1rxdx.md): The system field key for the share’s thumbnail image data.
