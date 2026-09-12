> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cklocationsortdescriptor](https://developer.apple.com/documentation/cloudkit/cklocationsortdescriptor)

# CKLocationSortDescriptor (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

An object for sorting records that contain location data.

## Declaration

```swift
class CKLocationSortDescriptor
```

<a id="overview"></a>

## Overview

You can add a location sort descriptor to your queries when searching for records. At creation time, you must provide the sort descriptor with a key that has a [CLLocation](../corelocation/cllocation.md) object as its value. The sort descriptor uses the value of that key to perform the sort.

CloudKit computes distance by drawing a direct line between the two locations that follows the curvature of the Earth. Distances don’t account for altitude changes between the two locations.

## Topics

### Creating a Location Sort Descriptor

- [init(key:relativeLocation:)](cklocationsortdescriptor/init%28key_relativelocation_%29.md): Creates a location sort descriptor using the specified key and relative location.
- [init(coder:)](cklocationsortdescriptor/init%28coder_%29.md): Creates a location sort descriptor from a serialized instance.

### Accessing the Location Value

- [relativeLocation](cklocationsortdescriptor/relativelocation.md): The reference location for sorting records.

### Initializers

- [init(key:ascending:comparator:)](cklocationsortdescriptor/init%28key_ascending_comparator_%29.md)

## Relationships

### Inherits From

- [NSSortDescriptor](../foundation/nssortdescriptor.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Queries

- [CKQuery](ckquery.md): A query that describes the criteria to apply when searching for records in a database.
- [CKQueryOperation](ckqueryoperation.md): An operation for executing queries in a database.

# CKLocationSortDescriptor (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

An object for sorting records that contain location data.

## Declaration

```objectivec
@interface CKLocationSortDescriptor : NSSortDescriptor
```

<a id="overview"></a>

## Overview

You can add a location sort descriptor to your queries when searching for records. At creation time, you must provide the sort descriptor with a key that has a [CLLocation](../corelocation/cllocation.md) object as its value. The sort descriptor uses the value of that key to perform the sort.

CloudKit computes distance by drawing a direct line between the two locations that follows the curvature of the Earth. Distances don’t account for altitude changes between the two locations.

## Topics

### Creating a Location Sort Descriptor

- [initWithKey:relativeLocation:](cklocationsortdescriptor/init%28key_relativelocation_%29.md): Creates a location sort descriptor using the specified key and relative location.
- [initWithCoder:](cklocationsortdescriptor/init%28coder_%29.md): Creates a location sort descriptor from a serialized instance.

### Accessing the Location Value

- [relativeLocation](cklocationsortdescriptor/relativelocation.md): The reference location for sorting records.

## Relationships

### Inherits From

- [NSSortDescriptor](../foundation/nssortdescriptor.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Queries

- [CKQuery](ckquery.md): A query that describes the criteria to apply when searching for records in a database.
- [CKQueryOperation](ckqueryoperation.md): An operation for executing queries in a database.
