> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabaseoperation](https://developer.apple.com/documentation/cloudkit/ckdatabaseoperation)

# CKDatabaseOperation (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The abstract base class for operations that act upon databases in CloudKit.

## Declaration

```swift
class CKDatabaseOperation
```

<a id="overview"></a>

## Overview

Database operations typically involve fetching and saving records and other database objects, as well as executing queries on the contents of the database. Use this class’s [database](ckdatabaseoperation/database.md) property to tell the operation which database to use when you execute it. Don’t subclass this class or create instances of it. Instead, create instances of one of its concrete subclasses.

## Topics

### Accessing the Database

- [database](ckdatabaseoperation/database.md): The database that the operation uses.

## Relationships

### Inherits From

- [CKOperation](ckoperation.md)

### Inherited By

- [CKFetchDatabaseChangesOperation](ckfetchdatabasechangesoperation.md)
- [CKFetchRecordChangesOperation](ckfetchrecordchangesoperation.md)
- [CKFetchRecordZoneChangesOperation](ckfetchrecordzonechangesoperation.md)
- [CKFetchRecordZonesOperation](ckfetchrecordzonesoperation.md)
- [CKFetchRecordsOperation](ckfetchrecordsoperation.md)
- [CKFetchSubscriptionsOperation](ckfetchsubscriptionsoperation.md)
- [CKFetchWebAuthTokenOperation](ckfetchwebauthtokenoperation.md)
- [CKModifyRecordZonesOperation](ckmodifyrecordzonesoperation.md)
- [CKModifyRecordsOperation](ckmodifyrecordsoperation.md)
- [CKModifySubscriptionsOperation](ckmodifysubscriptionsoperation.md)
- [CKQueryOperation](ckqueryoperation.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CKDatabaseOperation (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The abstract base class for operations that act upon databases in CloudKit.

## Declaration

```objectivec
@interface CKDatabaseOperation : CKOperation
```

<a id="overview"></a>

## Overview

Database operations typically involve fetching and saving records and other database objects, as well as executing queries on the contents of the database. Use this class’s [database](ckdatabaseoperation/database.md) property to tell the operation which database to use when you execute it. Don’t subclass this class or create instances of it. Instead, create instances of one of its concrete subclasses.

## Topics

### Accessing the Database

- [database](ckdatabaseoperation/database.md): The database that the operation uses.

## Relationships

### Inherits From

- [CKOperation](ckoperation.md)

### Inherited By

- [CKFetchDatabaseChangesOperation](ckfetchdatabasechangesoperation.md)
- [CKFetchRecordChangesOperation](ckfetchrecordchangesoperation.md)
- [CKFetchRecordZoneChangesOperation](ckfetchrecordzonechangesoperation.md)
- [CKFetchRecordZonesOperation](ckfetchrecordzonesoperation.md)
- [CKFetchRecordsOperation](ckfetchrecordsoperation.md)
- [CKFetchSubscriptionsOperation](ckfetchsubscriptionsoperation.md)
- [CKFetchWebAuthTokenOperation](ckfetchwebauthtokenoperation.md)
- [CKModifyRecordZonesOperation](ckmodifyrecordzonesoperation.md)
- [CKModifyRecordsOperation](ckmodifyrecordsoperation.md)
- [CKModifySubscriptionsOperation](ckmodifysubscriptionsoperation.md)
- [CKQueryOperation](ckqueryoperation.md)
