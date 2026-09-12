> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsquerygenerationtoken](https://developer.apple.com/documentation/coredata/nsquerygenerationtoken)

# NSQueryGenerationToken (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A token that indicates which generation of the persistent store is being accessed.

## Declaration

```swift
class NSQueryGenerationToken
```

## Mentioned In

- [Accessing data when the store changes](accessing-data-when-the-store-changes.md)

<a id="overview"></a>

## Overview

When a managed object context is pinned to a specific generation of the app data, a query generation token will be associated with that context.

## Topics

### Identifying Generations of App Data

- [current](nsquerygenerationtoken/current.md): A token that informs a context to use the current generation.

### Initializers

- [init(coder:)](nsquerygenerationtoken/init%28coder_%29.md)

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
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Conflict Management

- [NSConstraintConflict](nsconstraintconflict.md): An encapsulation of conflicts that occur during an attempt to save a managed object.
- [NSMergeConflict](nsmergeconflict.md): An encapsulation of conflicts that occur during an attempt to save changes in a managed object context.
- [NSMergePolicy](nsmergepolicy.md): A policy object that you use to resolve conflicts between the persistent store and in-memory versions of managed objects.

# NSQueryGenerationToken (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A token that indicates which generation of the persistent store is being accessed.

## Declaration

```objectivec
@interface NSQueryGenerationToken : NSObject
```

## Mentioned In

- [Accessing data when the store changes](accessing-data-when-the-store-changes.md)

<a id="overview"></a>

## Overview

When a managed object context is pinned to a specific generation of the app data, a query generation token will be associated with that context.

## Topics

### Identifying Generations of App Data

- [currentQueryGenerationToken](nsquerygenerationtoken/current.md): A token that informs a context to use the current generation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Conflict Management

- [NSConstraintConflict](nsconstraintconflict.md): An encapsulation of conflicts that occur during an attempt to save a managed object.
- [NSMergeConflict](nsmergeconflict.md): An encapsulation of conflicts that occur during an attempt to save changes in a managed object context.
- [NSMergePolicy](nsmergepolicy.md): A policy object that you use to resolve conflicts between the persistent store and in-memory versions of managed objects.
