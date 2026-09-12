> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckshare/metadata/rootrecordid](https://developer.apple.com/documentation/cloudkit/ckshare/metadata/rootrecordid)

# rootRecordID (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 16.0) · iPadOS 10.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.12+ (deprecated in 13.0) · tvOS 10.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 9.0)

The record ID of the share’s root record.

> Use [hierarchicalRootRecordID](hierarchicalrootrecordid.md) instead.

## Declaration

```swift
@NSCopying var rootRecordID: CKRecord.ID { get }
```

<a id="discussion"></a>

## Discussion

CloudKit populates this property only for metadata that belongs to a shared record hierarchy. If the metadata is part of a shared record zone, the property returns `nil`. This is because, unlike a shared record hierarchy, a shared record zone doesn’t have a nominated root record.

## See Also

### Accessing the Root Record

- [hierarchicalRootRecordID](hierarchicalrootrecordid.md): The record ID of the shared hierarchy’s root record.
- [rootRecord](rootrecord.md): The share’s root record.

# rootRecordID (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 16.0) · iPadOS 10.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.12+ (deprecated in 13.0) · tvOS 10.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 9.0)

The record ID of the share’s root record.

> Use [hierarchicalRootRecordID](hierarchicalrootrecordid.md) instead.

## Declaration

```objectivec
@property (copy, readonly) CKRecordID * rootRecordID;
```

<a id="discussion"></a>

## Discussion

CloudKit populates this property only for metadata that belongs to a shared record hierarchy. If the metadata is part of a shared record zone, the property returns `nil`. This is because, unlike a shared record hierarchy, a shared record zone doesn’t have a nominated root record.

## See Also

### Accessing the Root Record

- [hierarchicalRootRecordID](hierarchicalrootrecordid.md): The record ID of the shared hierarchy’s root record.
- [rootRecord](rootrecord.md): The share’s root record.
