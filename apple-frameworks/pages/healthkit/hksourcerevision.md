> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksourcerevision](https://developer.apple.com/documentation/healthkit/hksourcerevision)

# HKSourceRevision (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

An object indicating the source of a HealthKit sample.

## Declaration

```swift
class HKSourceRevision
```

## Mentioned In

- [About the HealthKit framework](about-the-healthkit-framework.md)

<a id="overview"></a>

## Overview

The [HKSourceRevision](hksourcerevision.md) class acts as a wrapper for the [HKSource](hksource.md) class, adding information about the source’s version, operating system, and product type.

Source revision objects are immutable: you set the source revision’s properties when you create the object, and they cannot change.

When an [HKObject](hkobject.md) instance is created, its [sourceRevision](hkobject/sourcerevision.md) property is set to `nil`. When the object is saved to the HealthKit store, HealthKit assigns a new source revision to the object’s [sourceRevision](hkobject/sourcerevision.md) property. The source revision can be accessed only on objects retrieved from the HealthKit store.

<a id="Subclassing-Source-Revisions"></a>

### Subclassing Source Revisions

As with many HealthKit classes, don’t subclass the [HKSourceRevision](hksourcerevision.md) class.

## Topics

### Creating Source Revision Objects

- [init(source:version:)](hksourcerevision/init%28source_version_%29.md): Initializes a new source revision object with the provided source and version information.
- [init(source:version:productType:operatingSystemVersion:)](hksourcerevision/init%28source_version_producttype_operatingsystemversion_%29.md): Initializes a new source revision object with the provided source, version, product type, and operating system.

### Accessing Source and Version Information

- [source](hksourcerevision/source.md): The source for a sample.
- [version](hksourcerevision/version.md): A string that identifies a particular version of the source.
- [operatingSystemVersion](hksourcerevision/operatingsystemversion.md): A string that identifies the operating system used to save a sample.
- [productType](hksourcerevision/producttype.md): A string that identifies the device used to save a sample.

### Initializers

- [init(coder:)](hksourcerevision/init%28coder_%29.md)

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

### Sources and devices

- [HKSourceQueryDescriptor](hksourcequerydescriptor.md): A query interface that uses Swift concurrency to read the apps and devices that produced the matching samples.
- [HKSource](hksource.md): An object indicating the app or device that created a HealthKit sample
- [HKDevice](hkdevice.md): A device that generates data for HealthKit.
- [HKSourceQuery](hksourcequery.md): A query that returns a list of sources, such as apps and devices, that have saved matching queries to the HealthKit store.

# HKSourceRevision (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

An object indicating the source of a HealthKit sample.

## Declaration

```objectivec
@interface HKSourceRevision : NSObject
```

## Mentioned In

- [About the HealthKit framework](about-the-healthkit-framework.md)

<a id="overview"></a>

## Overview

The [HKSourceRevision](hksourcerevision.md) class acts as a wrapper for the [HKSource](hksource.md) class, adding information about the source’s version, operating system, and product type.

Source revision objects are immutable: you set the source revision’s properties when you create the object, and they cannot change.

When an [HKObject](hkobject.md) instance is created, its [sourceRevision](hkobject/sourcerevision.md) property is set to `nil`. When the object is saved to the HealthKit store, HealthKit assigns a new source revision to the object’s [sourceRevision](hkobject/sourcerevision.md) property. The source revision can be accessed only on objects retrieved from the HealthKit store.

<a id="Subclassing-Source-Revisions"></a>

### Subclassing Source Revisions

As with many HealthKit classes, don’t subclass the [HKSourceRevision](hksourcerevision.md) class.

## Topics

### Creating Source Revision Objects

- [initWithSource:version:](hksourcerevision/init%28source_version_%29.md): Initializes a new source revision object with the provided source and version information.
- [initWithSource:version:productType:operatingSystemVersion:](hksourcerevision/init%28source_version_producttype_operatingsystemversion_%29.md): Initializes a new source revision object with the provided source, version, product type, and operating system.

### Accessing Source and Version Information

- [source](hksourcerevision/source.md): The source for a sample.
- [version](hksourcerevision/version.md): A string that identifies a particular version of the source.
- [operatingSystemVersion](hksourcerevision/operatingsystemversion.md): A string that identifies the operating system used to save a sample.
- [productType](hksourcerevision/producttype.md): A string that identifies the device used to save a sample.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Sources and devices

- [HKSource](hksource.md): An object indicating the app or device that created a HealthKit sample
- [HKDevice](hkdevice.md): A device that generates data for HealthKit.
- [HKSourceQuery](hksourcequery.md): A query that returns a list of sources, such as apps and devices, that have saved matching queries to the HealthKit store.
