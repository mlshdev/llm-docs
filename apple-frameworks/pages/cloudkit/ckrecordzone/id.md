> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecordzone/id](https://developer.apple.com/documentation/cloudkit/ckrecordzone/id)

# CKRecordZone.ID (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

An object that uniquely identifies a record zone in a database.

## Declaration

```swift
class ID
```

<a id="overview"></a>

## Overview

Zones are a mechanism for grouping related records together. You create zone ID objects when you want to fetch an existing zone object or create a new zone with a specific name.

A record zone ID distinguishes one zone from another by a name string and the ID of the user who creates the zone. You should specify ASCII strings that don’t exceed 255 characters. When creating your own record zone ID objects, you can use names that have more meaning to your app or to the user, providing each zone name is unique within the specified database. You should set the owner name to the current user name or the name of another user. Get the current user name from [CKCurrentUserDefaultName](../ckcurrentuserdefaultname.md) or by calling [fetchUserRecordID(completionHandler:)](../ckcontainer/fetchuserrecordid%28completionhandler_%29.md).

When creating new record zones, make the name string in the record zone ID unique in the target database. Public databases don’t support custom zones, and only the user who owns the database can create zones in private databases.

Don’t create subclasses of this class.

<a id="Interacting-with-Record-Zone-IDs"></a>

### Interacting with Record Zone IDs

After you create a record zone ID, interactions with it typically include:

- Creating a [CKRecord.ID](../ckrecord/id.md) object so that you can fetch or create records in that zone.
- Retrieving an existing [CKRecordZone](../ckrecordzone.md) object from the database.

You don’t need to create a record zone ID to create a record zone. The [CKRecordZone](../ckrecordzone.md) class has initialization methods that create a record zone ID using the name string you provide.

<a id="Creating-Record-Zone-IDs-for-Records"></a>

#### Creating Record Zone IDs for Records

To create a new record in a custom zone, create a record zone ID that specifies the zone name. Use the record zone ID to create a [CKRecord.ID](../ckrecord/id.md), and then use the record ID to create the record.

<a id="Fetching-a-Record-Zone-Object-from-the-Database"></a>

#### Fetching a Record Zone Object from the Database

To fetch a record zone from the database, use a [CKFetchRecordZonesOperation](../ckfetchrecordzonesoperation.md) object or the [fetch(withRecordZoneID:completionHandler:)](../ckdatabase/fetch%28withrecordzoneid_completionhandler_%29.md) method of [CKDatabase](../ckdatabase.md). Both techniques accept a record zone ID that you provide and retrieve the corresponding record zone object asynchronously. If you use the operation object, you can retrieve multiple record zones at the same time.

## Topics

### Creating a Record Zone ID

- [init(zoneName:ownerName:)](id/init%28zonename_ownername_%29-22irr.md): Creates a record zone ID with the specified name and owner.

### Getting the Record Zone ID Attributes

- [zoneName](id/zonename.md): The unique name of the record zone.
- [ownerName](id/ownername.md): The ID of the user who owns the record zone.

### Accessing the Default Zone

- [default](id/default.md): The default zone ID.
- [defaultZoneName](id/defaultzonename.md): The name of the default zone.

### Initializers

- [init(coder:)](id/init%28coder_%29.md)
- [init(zoneName:ownerName:)](id/init%28zonename_ownername_%29-2hzo4.md): Deprecated.

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

### Creating a Record Zone

- [init(zoneName:)](init%28zonename_%29.md): Creates a record zone object with the specified zone name.
- [init(zoneID:)](init%28zoneid_%29.md): Creates a record zone object with the specified zone ID.

# CKRecordZoneID (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

An object that uniquely identifies a record zone in a database.

## Declaration

```objectivec
@interface CKRecordZoneID : NSObject
```

<a id="overview"></a>

## Overview

Zones are a mechanism for grouping related records together. You create zone ID objects when you want to fetch an existing zone object or create a new zone with a specific name.

A record zone ID distinguishes one zone from another by a name string and the ID of the user who creates the zone. You should specify ASCII strings that don’t exceed 255 characters. When creating your own record zone ID objects, you can use names that have more meaning to your app or to the user, providing each zone name is unique within the specified database. You should set the owner name to the current user name or the name of another user. Get the current user name from [CKCurrentUserDefaultName](../ckcurrentuserdefaultname.md) or by calling [fetchUserRecordIDWithCompletionHandler:](../ckcontainer/fetchuserrecordid%28completionhandler_%29.md).

When creating new record zones, make the name string in the record zone ID unique in the target database. Public databases don’t support custom zones, and only the user who owns the database can create zones in private databases.

Don’t create subclasses of this class.

<a id="Interacting-with-Record-Zone-IDs"></a>

### Interacting with Record Zone IDs

After you create a record zone ID, interactions with it typically include:

- Creating a [CKRecordID](../ckrecord/id.md) object so that you can fetch or create records in that zone.
- Retrieving an existing [CKRecordZone](../ckrecordzone.md) object from the database.

You don’t need to create a record zone ID to create a record zone. The [CKRecordZone](../ckrecordzone.md) class has initialization methods that create a record zone ID using the name string you provide.

<a id="Creating-Record-Zone-IDs-for-Records"></a>

#### Creating Record Zone IDs for Records

To create a new record in a custom zone, create a record zone ID that specifies the zone name. Use the record zone ID to create a [CKRecordID](../ckrecord/id.md), and then use the record ID to create the record.

<a id="Fetching-a-Record-Zone-Object-from-the-Database"></a>

#### Fetching a Record Zone Object from the Database

To fetch a record zone from the database, use a [CKFetchRecordZonesOperation](../ckfetchrecordzonesoperation.md) object or the [fetchRecordZoneWithID:completionHandler:](../ckdatabase/fetch%28withrecordzoneid_completionhandler_%29.md) method of [CKDatabase](../ckdatabase.md). Both techniques accept a record zone ID that you provide and retrieve the corresponding record zone object asynchronously. If you use the operation object, you can retrieve multiple record zones at the same time.

## Topics

### Creating a Record Zone ID

- [initWithZoneName:ownerName:](../ckrecordzoneid/initwithzonename_ownername_.md): Creates a record zone ID with the specified name and owner.

### Getting the Record Zone ID Attributes

- [zoneName](id/zonename.md): The unique name of the record zone.
- [ownerName](id/ownername.md): The ID of the user who owns the record zone.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)

## See Also

### Creating a Record Zone

- [initWithZoneName:](init%28zonename_%29.md): Creates a record zone object with the specified zone name.
- [initWithZoneID:](init%28zoneid_%29.md): Creates a record zone object with the specified zone ID.
