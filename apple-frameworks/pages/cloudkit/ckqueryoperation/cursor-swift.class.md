> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckqueryoperation/cursor-swift.class](https://developer.apple.com/documentation/cloudkit/ckqueryoperation/cursor-swift.class)

# CKQueryOperation.Cursor (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

An object that marks the stopping point for a query and the starting point for retrieving the remaining results.

## Declaration

```swift
class Cursor
```

<a id="overview"></a>

## Overview

You don’t create instances of this class yourself. When fetching records using a query operation, if the number of results exceeds the limit for the query, CloudKit provides a cursor. Use that cursor to create a new instance of [CKQueryOperation](../ckqueryoperation.md) and retrieve the next batch of results for the same query.

For information about how to use a [CKQueryOperation.Cursor](cursor-swift.class.md) object, see [CKQueryOperation](../ckqueryoperation.md).

## Topics

### Initializers

- [init(coder:)](cursor-swift.class/init%28coder_%29.md)

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

### Configuring the Query Operation

- [query](query.md): The query for the search.
- [cursor](cursor-swift.property.md): The cursor for continuing the search.
- [zoneID](zoneid.md): The ID of the record zone that contains the records to search.
- [resultsLimit](resultslimit.md): The maximum number of records to return at one time.
- [maximumResults](maximumresults.md): A constant value that represents the maximum number of results CloudKit retrieves.
- [desiredKeys](desiredkeys-7qrse.md): The fields of the records to fetch.

# CKQueryCursor (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

An object that marks the stopping point for a query and the starting point for retrieving the remaining results.

## Declaration

```objectivec
@interface CKQueryCursor : NSObject
```

<a id="overview"></a>

## Overview

You don’t create instances of this class yourself. When fetching records using a query operation, if the number of results exceeds the limit for the query, CloudKit provides a cursor. Use that cursor to create a new instance of [CKQueryOperation](../ckqueryoperation.md) and retrieve the next batch of results for the same query.

For information about how to use a [CKQueryCursor](cursor-swift.class.md) object, see [CKQueryOperation](../ckqueryoperation.md).

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)

## See Also

### Configuring the Query Operation

- [query](query.md): The query for the search.
- [cursor](cursor-swift.property.md): The cursor for continuing the search.
- [zoneID](zoneid.md): The ID of the record zone that contains the records to search.
- [resultsLimit](resultslimit.md): The maximum number of records to return at one time.
- [CKQueryOperationMaximumResults](maximumresults.md): A constant value that represents the maximum number of results CloudKit retrieves.
- [desiredKeys](desiredkeys-4a6vy.md): The fields of the records to fetch.
