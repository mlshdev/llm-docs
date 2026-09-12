> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecord/id/recordname](https://developer.apple.com/documentation/cloudkit/ckrecord/id/recordname)

# recordName (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The unique name of the record.

## Declaration

```swift
var recordName: String { get }
```

<a id="discussion"></a>

## Discussion

For share records that manage a shared record zone, this property’s value is always [CKRecordNameZoneWideShare](../../ckrecordnamezonewideshare.md).

# recordName (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The unique name of the record.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * recordName;
```

<a id="discussion"></a>

## Discussion

For share records that manage a shared record zone, this property’s value is always [CKRecordNameZoneWideShare](../../ckrecordnamezonewideshare.md).
