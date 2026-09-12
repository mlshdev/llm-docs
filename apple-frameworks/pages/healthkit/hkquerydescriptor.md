> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquerydescriptor](https://developer.apple.com/documentation/healthkit/hkquerydescriptor)

# HKQueryDescriptor (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

A descriptor that specifies a set of samples based on the data type and a predicate.

## Declaration

```swift
class HKQueryDescriptor
```

<a id="overview"></a>

## Overview

Use descriptors to create queries that return multiple data types. You can use descriptors when creating [HKSampleQuery](hksamplequery.md), [HKAnchoredObjectQuery](hkanchoredobjectquery.md), or [HKObserverQuery](hkobserverquery.md) instances.

## Topics

### Creating Query Descriptors

- [init(sampleType:predicate:)](hkquerydescriptor/init%28sampletype_predicate_%29.md): Creates a new descriptor for the data type and predicate you provided.

### Accessing Descriptor Data

- [predicate](hkquerydescriptor/predicate.md): The predicate that filters samples matching this descriptor.
- [sampleType](hkquerydescriptor/sampletype.md): The data type of samples that match this descriptor.

### Initializers

- [init(coder:)](hkquerydescriptor/init%28coder_%29.md)

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Basic queries

- [HKSampleQueryDescriptor](hksamplequerydescriptor.md): A query interface that reads samples using Swift concurrency.
- [HKSampleQuery](hksamplequery.md): A general query that returns a snapshot of all the matching samples currently saved in the HealthKit store.
- [HKCorrelationQuery](hkcorrelationquery.md): A query that performs complex searches based on the correlation’s contents, and returns a snapshot of all matching samples.
- [HKQuery](hkquery.md): An abstract class for all the query classes in HealthKit.

# HKQueryDescriptor (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

A descriptor that specifies a set of samples based on the data type and a predicate.

## Declaration

```objectivec
@interface HKQueryDescriptor : NSObject
```

<a id="overview"></a>

## Overview

Use descriptors to create queries that return multiple data types. You can use descriptors when creating [HKSampleQuery](hksamplequery.md), [HKAnchoredObjectQuery](hkanchoredobjectquery.md), or [HKObserverQuery](hkobserverquery.md) instances.

## Topics

### Creating Query Descriptors

- [initWithSampleType:predicate:](hkquerydescriptor/init%28sampletype_predicate_%29.md): Creates a new descriptor for the data type and predicate you provided.

### Accessing Descriptor Data

- [predicate](hkquerydescriptor/predicate.md): The predicate that filters samples matching this descriptor.
- [sampleType](hkquerydescriptor/sampletype.md): The data type of samples that match this descriptor.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Basic queries

- [HKSampleQuery](hksamplequery.md): A general query that returns a snapshot of all the matching samples currently saved in the HealthKit store.
- [HKCorrelationQuery](hkcorrelationquery.md): A query that performs complex searches based on the correlation’s contents, and returns a snapshot of all matching samples.
- [HKQuery](hkquery.md): An abstract class for all the query classes in HealthKit.
