> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecord/id](https://developer.apple.com/documentation/cloudkit/ckrecord/id)

# CKRecord.ID (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

An object that uniquely identifies a record in a database.

## Declaration

```swift
class ID
```

<a id="overview"></a>

## Overview

A record ID object consists of a name string and a zone ID. The name string is an ASCII string that doesn’t exceed 255 characters in length. When you create a record without specifying a record ID, the ID name string derives from a UUID and is, therefore, unique. When creating your own record ID objects, you can use names that have more meaning to your app or to the user, as long as each name is unique within the specified zone. For example, you might use a document name for the name string.

CloudKit uniques records by recordID within a specified database, but you can reuse record IDs in different databases. Each container has a public and a private database, and the private database is different for each unique user. This configuration provides for the reusing of record IDs in each user’s private database, but ensures that only one record uses a specific record ID in the public database.

CloudKit generally creates record IDs when it first saves a new record, but you might manually instantiate instances of `CKRecordID` in  specific situations. For example, you must create an instance when saving a record in a zone other than the default zone. You also instantiate instances of `CKRecordID` when retrieving specific records from a database.

Don’t subclass `CKRecordID`.

<a id="Interacting-with-Record-IDs"></a>

### Interacting with Record IDs

After you create a `CKRecordID` object, interactions with that object typically involve creating a new record or retrieving an existing record from a database.

You might also use record IDs when you can’t use a [CKRecord.Reference](reference.md) object to refer to a record. References are only valid within a single zone of a database. To refer to objects outside of the current zone or database, save the strings in the record’s `CKRecordID` and [CKRecordZone.ID](../ckrecordzone/id.md) objects. When you want to retrieve the record later, use those strings to recreate the record and zone ID objects so that you can fetch the record.

<a id="Creating-Record-IDs-for-New-Records"></a>

#### Creating Record IDs for New Records

To assign a custom record ID to a new record, you must create the `CKRecordID` object first. You need to know the intended name and zone information for that record, which might also require creating a [CKRecordZone.ID](../ckrecordzone/id.md) object. After creating the record ID object, initialize your new record using its [init(recordType:recordID:)](init%28recordtype_recordid_%29.md) method.

<a id="Using-Record-IDs-to-Fetch-Records"></a>

#### Using Record IDs to Fetch Records

Use a record ID to fetch the corresponding [CKRecord](../ckrecord.md) object from a database quickly. You perform the fetch operation using a [CKFetchRecordsOperation](../ckfetchrecordsoperation.md) object or the [fetch(withRecordID:completionHandler:)](../ckdatabase/fetch%28withrecordid_completionhandler_%29.md) method of the [CKDatabase](../ckdatabase.md) class. In both cases, CloudKit returns the record asynchronously using the handler you provide.

## Topics

### Creating a Record ID

- [init(recordName:)](id/init%28recordname_%29.md): Creates a new record ID with the specified name in the default zone.
- [init(recordName:zoneID:)](id/init%28recordname_zoneid_%29.md): Creates a new record ID with the specified name and zone information.
- [CKRecordNameZoneWideShare](../ckrecordnamezonewideshare.md): The name of a share record that manages a shared record zone.

### Getting the Record ID’s Name

- [recordName](id/recordname.md): The unique name of the record.

### Getting the Record ID’s Zone

- [zoneID](id/zoneid.md): The ID of the zone that contains the record.

### Initializers

- [init(coder:)](id/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../../foundation/nscoding.md)
- [NSCopying](../../foundation/nscopying.md)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the Record’s Metadata

- [recordID](recordid.md): The unique ID of the record.
- [recordType](recordtype-6v7au.md): The value that your app defines to identify the type of record.
- [CKRecord.SystemType](systemtype.md): Possible values for record types of system records.
- [creationDate](creationdate.md): The time when CloudKit first saves the record to the server.
- [creatorUserRecordID](creatoruserrecordid.md): The ID of the user who creates the record.
- [modificationDate](modificationdate.md): The most recent time that CloudKit saved the record to the server.
- [lastModifiedUserRecordID](lastmodifieduserrecordid.md): The ID of the user who most recently modified the record.
- [recordChangeTag](recordchangetag.md): The server change token for the record.

# CKRecordID (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

An object that uniquely identifies a record in a database.

## Declaration

```objectivec
@interface CKRecordID : NSObject
```

<a id="overview"></a>

## Overview

A record ID object consists of a name string and a zone ID. The name string is an ASCII string that doesn’t exceed 255 characters in length. When you create a record without specifying a record ID, the ID name string derives from a UUID and is, therefore, unique. When creating your own record ID objects, you can use names that have more meaning to your app or to the user, as long as each name is unique within the specified zone. For example, you might use a document name for the name string.

CloudKit uniques records by recordID within a specified database, but you can reuse record IDs in different databases. Each container has a public and a private database, and the private database is different for each unique user. This configuration provides for the reusing of record IDs in each user’s private database, but ensures that only one record uses a specific record ID in the public database.

CloudKit generally creates record IDs when it first saves a new record, but you might manually instantiate instances of `CKRecordID` in  specific situations. For example, you must create an instance when saving a record in a zone other than the default zone. You also instantiate instances of `CKRecordID` when retrieving specific records from a database.

Don’t subclass `CKRecordID`.

<a id="Interacting-with-Record-IDs"></a>

### Interacting with Record IDs

After you create a `CKRecordID` object, interactions with that object typically involve creating a new record or retrieving an existing record from a database.

You might also use record IDs when you can’t use a [CKReference](reference.md) object to refer to a record. References are only valid within a single zone of a database. To refer to objects outside of the current zone or database, save the strings in the record’s `CKRecordID` and [CKRecordZoneID](../ckrecordzone/id.md) objects. When you want to retrieve the record later, use those strings to recreate the record and zone ID objects so that you can fetch the record.

<a id="Creating-Record-IDs-for-New-Records"></a>

#### Creating Record IDs for New Records

To assign a custom record ID to a new record, you must create the `CKRecordID` object first. You need to know the intended name and zone information for that record, which might also require creating a [CKRecordZoneID](../ckrecordzone/id.md) object. After creating the record ID object, initialize your new record using its [init(recordType:recordID:)](init%28recordtype_recordid_%29.md) method.

<a id="Using-Record-IDs-to-Fetch-Records"></a>

#### Using Record IDs to Fetch Records

Use a record ID to fetch the corresponding [CKRecord](../ckrecord.md) object from a database quickly. You perform the fetch operation using a [CKFetchRecordsOperation](../ckfetchrecordsoperation.md) object or the [fetchRecordWithID:completionHandler:](../ckdatabase/fetch%28withrecordid_completionhandler_%29.md) method of the [CKDatabase](../ckdatabase.md) class. In both cases, CloudKit returns the record asynchronously using the handler you provide.

## Topics

### Creating a Record ID

- [initWithRecordName:](id/init%28recordname_%29.md): Creates a new record ID with the specified name in the default zone.
- [initWithRecordName:zoneID:](../ckrecordid/initwithrecordname_zoneid_.md): Creates a new record ID with the specified name and zone information.
- [CKRecordNameZoneWideShare](../ckrecordnamezonewideshare.md): The name of a share record that manages a shared record zone.

### Getting the Record ID’s Name

- [recordName](id/recordname.md): The unique name of the record.

### Getting the Record ID’s Zone

- [zoneID](id/zoneid.md): The ID of the zone that contains the record.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)

## See Also

### Accessing the Record’s Metadata

- [recordID](recordid.md): The unique ID of the record.
- [recordType](recordtype-9s09b.md): The value that your app defines to identify the type of record.
- [creationDate](creationdate.md): The time when CloudKit first saves the record to the server.
- [creatorUserRecordID](creatoruserrecordid.md): The ID of the user who creates the record.
- [modificationDate](modificationdate.md): The most recent time that CloudKit saved the record to the server.
- [lastModifiedUserRecordID](lastmodifieduserrecordid.md): The ID of the user who most recently modified the record.
- [recordChangeTag](recordchangetag.md): The server change token for the record.
