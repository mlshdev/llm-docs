> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecordzone/init(zonename:)](https://developer.apple.com/documentation/cloudkit/ckrecordzone/init(zonename:))

# init(zoneName:) (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates a record zone object with the specified zone name.

## Declaration

```swift
init(zoneName: String)
```

## Parameters

- `zoneName`: The name of the new zone. Zone names inside a user’s private database are unique, consist of up to 255 ASCII characters, and don’t start with an underscore. One way to satisfy the uniqueness of zone names is to create a string from a Universally Unique Identifier (UUID), but you can also use other techniques.

  If this parameter is `nil` or is an empty string, the method throws an exception.

<a id="return-value"></a>

## Return Value

The new custom zone.

<a id="discussion"></a>

## Discussion

Use this method to create a new record zone. The new zone has the name you provide and the zone’s owner is the current user. After creating the zone, save it to the server using a [CKModifyRecordZonesOperation](../ckmodifyrecordzonesoperation.md) object or the [save(\_:completionHandler:)](../ckdatabase/save%28__completionhandler_%29-32ffr.md) method of [CKDatabase](../ckdatabase.md). You must save the zone to the server before you attempt to save any records to that zone.

Don’t use this method to create a `CKRecordZone` object that corresponds to a zone that already exists in the database. If the zone exists, fetch it using a [CKFetchRecordZonesOperation](../ckfetchrecordzonesoperation.md) object or the [fetch(withRecordZoneID:completionHandler:)](../ckdatabase/fetch%28withrecordzoneid_completionhandler_%29.md) method of [CKDatabase](../ckdatabase.md).

## See Also

### Creating a Record Zone

- [init(zoneID:)](init%28zoneid_%29.md): Creates a record zone object with the specified zone ID.
- [CKRecordZone.ID](id.md): An object that uniquely identifies a record zone in a database.

# initWithZoneName: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates a record zone object with the specified zone name.

## Declaration

```objectivec
- (instancetype) initWithZoneName:(NSString *) zoneName;
```

## Parameters

- `zoneName`: The name of the new zone. Zone names inside a user’s private database are unique, consist of up to 255 ASCII characters, and don’t start with an underscore. One way to satisfy the uniqueness of zone names is to create a string from a Universally Unique Identifier (UUID), but you can also use other techniques.

  If this parameter is `nil` or is an empty string, the method throws an exception.

<a id="return-value"></a>

## Return Value

The new custom zone.

<a id="discussion"></a>

## Discussion

Use this method to create a new record zone. The new zone has the name you provide and the zone’s owner is the current user. After creating the zone, save it to the server using a [CKModifyRecordZonesOperation](../ckmodifyrecordzonesoperation.md) object or the [saveRecordZone:completionHandler:](../ckdatabase/save%28__completionhandler_%29-32ffr.md) method of [CKDatabase](../ckdatabase.md). You must save the zone to the server before you attempt to save any records to that zone.

Don’t use this method to create a `CKRecordZone` object that corresponds to a zone that already exists in the database. If the zone exists, fetch it using a [CKFetchRecordZonesOperation](../ckfetchrecordzonesoperation.md) object or the [fetchRecordZoneWithID:completionHandler:](../ckdatabase/fetch%28withrecordzoneid_completionhandler_%29.md) method of [CKDatabase](../ckdatabase.md).

## See Also

### Creating a Record Zone

- [initWithZoneID:](init%28zoneid_%29.md): Creates a record zone object with the specified zone ID.
- [CKRecordZoneID](id.md): An object that uniquely identifies a record zone in a database.
