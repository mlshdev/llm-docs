> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkobject](https://developer.apple.com/documentation/healthkit/hkobject)

# HKObject (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A piece of data that can be stored inside the HealthKit store.

## Declaration

```swift
class HKObject
```

## Mentioned In

- [About the HealthKit framework](about-the-healthkit-framework.md)

<a id="overview"></a>

## Overview

The `HKObject` class is an abstract class. You should never instantiate a `HKObject` object directly. Instead, always work with one of its concrete subclasses: [HKCategorySample](hkcategorysample.md), [HKQuantitySample](hkquantitysample.md), [HKCorrelation](hkcorrelation.md), or [HKWorkout](hkworkout.md).

HealthKit objects are all immutable. With a few exceptions (such as the object’s source revision), the object’s properties are set when the object is first created and they cannot change.

## Topics

### Accessing Properties

- [uuid](hkobject/uuid.md): The universally unique identifier (UUID) for this HealthKit object.
- [metadata](hkobject/metadata.md): The metadata for this HealthKit object.
- [device](hkobject/device.md): The device that generated the data for this object.
- [sourceRevision](hkobject/sourcerevision.md): The app or device that created this object.
- [source](hkobject/source.md): Deprecated. A HealthKit source, representing the app or device that created this object.

### Specifying Predicate Key Paths

- [HKPredicateKeyPathUUID](hkpredicatekeypathuuid.md): The key path for accessing the object’s UUID inside a predicate format string.
- [HKPredicateKeyPathMetadata](hkpredicatekeypathmetadata.md): The key path for accessing the object’s metadata dictionary inside a predicate format string.

### Initializers

- [init(coder:)](hkobject/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [HKSample](hksample.md)

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

## See Also

### Abstract superclasses

- [HKQuantitySample](hkquantitysample.md): A sample that represents a quantity, including the value and the units.
- [HKSample](hksample.md): A HealthKit sample represents a piece of data associated with a start and end time.

# HKObject (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A piece of data that can be stored inside the HealthKit store.

## Declaration

```objectivec
@interface HKObject : NSObject
```

## Mentioned In

- [About the HealthKit framework](about-the-healthkit-framework.md)

<a id="overview"></a>

## Overview

The `HKObject` class is an abstract class. You should never instantiate a `HKObject` object directly. Instead, always work with one of its concrete subclasses: [HKCategorySample](hkcategorysample.md), [HKQuantitySample](hkquantitysample.md), [HKCorrelation](hkcorrelation.md), or [HKWorkout](hkworkout.md).

HealthKit objects are all immutable. With a few exceptions (such as the object’s source revision), the object’s properties are set when the object is first created and they cannot change.

## Topics

### Accessing Properties

- [UUID](hkobject/uuid.md): The universally unique identifier (UUID) for this HealthKit object.
- [metadata](hkobject/metadata.md): The metadata for this HealthKit object.
- [device](hkobject/device.md): The device that generated the data for this object.
- [sourceRevision](hkobject/sourcerevision.md): The app or device that created this object.
- [source](hkobject/source.md): Deprecated. A HealthKit source, representing the app or device that created this object.

### Specifying Predicate Key Paths

- [HKPredicateKeyPathUUID](hkpredicatekeypathuuid.md): The key path for accessing the object’s UUID inside a predicate format string.
- [HKPredicateKeyPathMetadata](hkpredicatekeypathmetadata.md): The key path for accessing the object’s metadata dictionary inside a predicate format string.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [HKSample](hksample.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Abstract superclasses

- [HKQuantitySample](hkquantitysample.md): A sample that represents a quantity, including the value and the units.
- [HKSample](hksample.md): A HealthKit sample represents a piece of data associated with a start and end time.
