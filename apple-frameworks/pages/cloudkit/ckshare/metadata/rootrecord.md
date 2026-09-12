> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckshare/metadata/rootrecord](https://developer.apple.com/documentation/cloudkit/ckshare/metadata/rootrecord)

# rootRecord (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The share’s root record.

## Declaration

```swift
@NSCopying var rootRecord: CKRecord? { get }
```

<a id="discussion"></a>

## Discussion

This property contains the root record of the shared record hierarchy if you set the [shouldFetchRootRecord](../../ckfetchsharemetadataoperation/shouldfetchrootrecord.md) property of the operation that fetches the metadata to [true](https://developer.apple.com/documentation/swift/true). You can specify which fields CloudKit returns by setting the same operation’s [rootRecordDesiredKeys](../../ckfetchsharemetadataoperation/rootrecorddesiredkeys-3xrex.md) property.

The operation ignores the [shouldFetchRootRecord](../../ckfetchsharemetadataoperation/shouldfetchrootrecord.md) and [rootRecordDesiredKeys](../../ckfetchsharemetadataoperation/rootrecorddesiredkeys-3xrex.md) properties when fetching a shared record zone’s metadata because, unlike a shared record hierarchy, a record zone doesn’t have a nominated root record.

## See Also

### Accessing the Root Record

- [hierarchicalRootRecordID](hierarchicalrootrecordid.md): The record ID of the shared hierarchy’s root record.
- [rootRecordID](rootrecordid.md): Deprecated. The record ID of the share’s root record.

# rootRecord (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The share’s root record.

## Declaration

```objectivec
@property (copy, readonly, nullable) CKRecord * rootRecord;
```

<a id="discussion"></a>

## Discussion

This property contains the root record of the shared record hierarchy if you set the [shouldFetchRootRecord](../../ckfetchsharemetadataoperation/shouldfetchrootrecord.md) property of the operation that fetches the metadata to [true](https://developer.apple.com/documentation/swift/true). You can specify which fields CloudKit returns by setting the same operation’s [rootRecordDesiredKeys](../../ckfetchsharemetadataoperation/rootrecorddesiredkeys-3xrex.md) property.

The operation ignores the [shouldFetchRootRecord](../../ckfetchsharemetadataoperation/shouldfetchrootrecord.md) and [rootRecordDesiredKeys](../../ckfetchsharemetadataoperation/rootrecorddesiredkeys-3xrex.md) properties when fetching a shared record zone’s metadata because, unlike a shared record hierarchy, a record zone doesn’t have a nominated root record.

## See Also

### Accessing the Root Record

- [hierarchicalRootRecordID](hierarchicalrootrecordid.md): The record ID of the shared hierarchy’s root record.
- [rootRecordID](rootrecordid.md): Deprecated. The record ID of the share’s root record.
