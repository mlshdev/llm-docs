> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecordzone/encryptionscope-swift.property](https://developer.apple.com/documentation/cloudkit/ckrecordzone/encryptionscope-swift.property)

# encryptionScope (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The encryption scope determines the granularity at which CloudKit stores encryption keys within the zone.

## Declaration

```swift
var encryptionScope: CKRecordZone.EncryptionScope { get set }
```

<a id="discussion"></a>

## Discussion

Zone encryption scope defaults to `CKRecordZoneEncryptionScopePerRecord` and can only be modified before zone creation. Attempting to change the encryption scope of an existing zone is invalid and results in an error.

Zones using `CKRecordZoneEncryptionScopePerZone` can only use zone-wide sharing and are not compatible with older device OS versions. Refer to `CKRecordZoneEncryptionScope` for more info.

# encryptionScope (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The encryption scope determines the granularity at which CloudKit stores encryption keys within the zone.

## Declaration

```objectivec
@property (assign) CKRecordZoneEncryptionScope encryptionScope;
```

<a id="discussion"></a>

## Discussion

Zone encryption scope defaults to `CKRecordZoneEncryptionScopePerRecord` and can only be modified before zone creation. Attempting to change the encryption scope of an existing zone is invalid and results in an error.

Zones using `CKRecordZoneEncryptionScopePerZone` can only use zone-wide sharing and are not compatible with older device OS versions. Refer to `CKRecordZoneEncryptionScope` for more info.
