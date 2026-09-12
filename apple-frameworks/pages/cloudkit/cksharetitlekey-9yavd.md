> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksharetitlekey-9yavd](https://developer.apple.com/documentation/cloudkit/cksharetitlekey-9yavd)

# CKShareTitleKey

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The system field key for the share’s title.

## Declaration

```objectivec
extern CKRecordFieldKey const CKShareTitleKey;
```

<a id="discussion"></a>

## Discussion

This predefined key is part of the `CKRecordTypeShare` schema. The out of process UI flow uses this key to send a share, and as part of the share acceptance flow. It is an optional value on a `CKShare` record.

## See Also

### Subscripting

- [CKShareTypeKey](cksharetypekey-204gl.md): The system field key for the share’s type.
- [CKShareThumbnailImageDataKey](cksharethumbnailimagedatakey-1rxdx.md): The system field key for the share’s thumbnail image data.
