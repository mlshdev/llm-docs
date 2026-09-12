> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordzonechangesoperation/optionsbyrecordzoneid](https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoperation/optionsbyrecordzoneid)

# optionsByRecordZoneID (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 5.0)

Configuration options for each record zone that the operation retrieves.

> Use [configurationsByRecordZoneID](configurationsbyrecordzoneid.md) instead.

## Declaration

```swift
var optionsByRecordZoneID: [CKRecordZone.ID : CKFetchRecordZoneChangesOperation.ZoneOptions]? { get set }
```

<a id="discussion"></a>

## Discussion

You can associate each record zone ID with options that define what CloudKit fetches for that record zone.  See [CKFetchRecordZoneChangesOperation.ZoneOptions](zoneoptions.md) for more information.

# optionsByRecordZoneID (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 5.0)

Configuration options for each record zone that the operation retrieves.

> Use [configurationsByRecordZoneID](configurationsbyrecordzoneid.md) instead.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDictionary<CKRecordZoneID *,CKFetchRecordZoneChangesOptions *> * optionsByRecordZoneID;
```

<a id="discussion"></a>

## Discussion

You can associate each record zone ID with options that define what CloudKit fetches for that record zone.  See [CKFetchRecordZoneChangesOptions](zoneoptions.md) for more information.
