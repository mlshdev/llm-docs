> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecordzone/init(zoneid:)](https://developer.apple.com/documentation/cloudkit/ckrecordzone/init(zoneid:))

# init(zoneID:) (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates a record zone object with the specified zone ID.

## Declaration

```swift
init(zoneID: CKRecordZone.ID)
```

## Parameters

- `zoneID`: The ID for the new zone. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

The custom record zone.

<a id="discussion"></a>

## Discussion

Use this method when you want to create a new record zone from the information in a zone ID. After creating the zone, save it to the server using a [CKModifyRecordZonesOperation](../ckmodifyrecordzonesoperation.md) object or the [save(\_:completionHandler:)](../ckdatabase/save%28__completionhandler_%29-32ffr.md) method of [CKDatabase](../ckdatabase.md).

Don’t use this method to create a [CKRecordZone](../ckrecordzone.md) object that corresponds to a zone that already exists in the database. If the zone exists, fetch it using a [CKFetchRecordZonesOperation](../ckfetchrecordzonesoperation.md) object or the [fetch(withRecordZoneID:completionHandler:)](../ckdatabase/fetch%28withrecordzoneid_completionhandler_%29.md) method of [CKDatabase](../ckdatabase.md).

## See Also

### Creating a Record Zone

- [init(zoneName:)](init%28zonename_%29.md): Creates a record zone object with the specified zone name.
- [CKRecordZone.ID](id.md): An object that uniquely identifies a record zone in a database.

# initWithZoneID: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates a record zone object with the specified zone ID.

## Declaration

```objectivec
- (instancetype) initWithZoneID:(CKRecordZoneID *) zoneID;
```

## Parameters

- `zoneID`: The ID for the new zone. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

The custom record zone.

<a id="discussion"></a>

## Discussion

Use this method when you want to create a new record zone from the information in a zone ID. After creating the zone, save it to the server using a [CKModifyRecordZonesOperation](../ckmodifyrecordzonesoperation.md) object or the [saveRecordZone:completionHandler:](../ckdatabase/save%28__completionhandler_%29-32ffr.md) method of [CKDatabase](../ckdatabase.md).

Don’t use this method to create a [CKRecordZone](../ckrecordzone.md) object that corresponds to a zone that already exists in the database. If the zone exists, fetch it using a [CKFetchRecordZonesOperation](../ckfetchrecordzonesoperation.md) object or the [fetchRecordZoneWithID:completionHandler:](../ckdatabase/fetch%28withrecordzoneid_completionhandler_%29.md) method of [CKDatabase](../ckdatabase.md).

## See Also

### Creating a Record Zone

- [initWithZoneName:](init%28zonename_%29.md): Creates a record zone object with the specified zone name.
- [CKRecordZoneID](id.md): An object that uniquely identifies a record zone in a database.
