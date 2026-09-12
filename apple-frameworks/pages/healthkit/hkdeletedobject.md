> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkdeletedobject](https://developer.apple.com/documentation/healthkit/hkdeletedobject)

# HKDeletedObject (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

An object that represents a sample that has been deleted from the HealthKit store.

## Declaration

```swift
class HKDeletedObject
```

## Mentioned In

- [About the HealthKit framework](about-the-healthkit-framework.md)

<a id="overview"></a>

## Overview

Use [HKAnchoredObjectQuery](hkanchoredobjectquery.md) queries to generate a list of recently deleted objects. Create a query using the [init(type:predicate:anchor:limit:resultsHandler:)](hkanchoredobjectquery/init%28type_predicate_anchor_limit_resultshandler_%29.md)method. When the system calls the result handler, it passes the `deletedObject` parameter an array of [HKDeletedObject](hkdeletedobject.md) instances matching the query.

Deleted objects are temporary; the system may remove them from the HealthKit store at any time to free up space. To guarantee that you receive notifications for all deleted objects, create an [HKObserverQuery](hkobserverquery.md) and register it for background delivery. The system then wakes your app and calls the observer query’s update handler whenever the matching objects change—including deletions. However, the query does not provide a list of deleted objects. To determine which objects were deleted, use the observer query’s update handler to create an anchored object query for the newly deleted objects.

## Topics

### Identifying Deleted Objects

- [uuid](hkdeletedobject/uuid.md): The universally unique identifier (UUID) for the HealthKit object that was deleted from the store.
- [metadata](hkdeletedobject/metadata.md): The metadata associated with the deleted object.

### Initializers

- [init(coder:)](hkdeletedobject/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# HKDeletedObject (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

An object that represents a sample that has been deleted from the HealthKit store.

## Declaration

```objectivec
@interface HKDeletedObject : NSObject
```

## Mentioned In

- [About the HealthKit framework](about-the-healthkit-framework.md)

<a id="overview"></a>

## Overview

Use [HKAnchoredObjectQuery](hkanchoredobjectquery.md) queries to generate a list of recently deleted objects. Create a query using the [initWithType:predicate:anchor:limit:resultsHandler:](hkanchoredobjectquery/init%28type_predicate_anchor_limit_resultshandler_%29.md)method. When the system calls the result handler, it passes the `deletedObject` parameter an array of [HKDeletedObject](hkdeletedobject.md) instances matching the query.

Deleted objects are temporary; the system may remove them from the HealthKit store at any time to free up space. To guarantee that you receive notifications for all deleted objects, create an [HKObserverQuery](hkobserverquery.md) and register it for background delivery. The system then wakes your app and calls the observer query’s update handler whenever the matching objects change—including deletions. However, the query does not provide a list of deleted objects. To determine which objects were deleted, use the observer query’s update handler to create an anchored object query for the newly deleted objects.

## Topics

### Identifying Deleted Objects

- [UUID](hkdeletedobject/uuid.md): The universally unique identifier (UUID) for the HealthKit object that was deleted from the store.
- [metadata](hkdeletedobject/metadata.md): The metadata associated with the deleted object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)
