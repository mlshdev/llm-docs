> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksourcerevision/init(source:version:producttype:operatingsystemversion:)](https://developer.apple.com/documentation/healthkit/hksourcerevision/init(source:version:producttype:operatingsystemversion:))

# init(source:version:productType:operatingSystemVersion:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

Initializes a new source revision object with the provided source, version, product type, and operating system.

## Declaration

```swift
init(source: HKSource, version: String?, productType: String?, operatingSystemVersion: OperatingSystemVersion)
```

## Parameters

- `source`: The source for a sample.
- `version`: A string that uniquely identifies the source’s version.
- `productType`: A string that identifies the device used to save the sample.
- `operatingSystemVersion`: A string that identifies the operating system used to save the sample.

<a id="return-value"></a>

## Return Value

A newly initialized source revision object.

<a id="Discussion"></a>

## Discussion

Use this method to create source revisions for use in queries. For more information, see [HKPredicateKeyPathSourceRevision](../hkpredicatekeypathsourcerevision.md).

## See Also

### Related Documentation

- [HKSourceRevisionAnyVersion](../hksourcerevisionanyversion.md): A constant that matches any version.
- [HKSourceRevisionAnyProductType](../hksourcerevisionanyproducttype.md): A constant that matches any product type.
- [HKSourceRevisionAnyOperatingSystem](../hksourcerevisionanyoperatingsystem.md): A constant that matches any operating system.

### Creating Source Revision Objects

- [init(source:version:)](init%28source_version_%29.md): Initializes a new source revision object with the provided source and version information.

# initWithSource:version:productType:operatingSystemVersion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

Initializes a new source revision object with the provided source, version, product type, and operating system.

## Declaration

```objectivec
- (instancetype) initWithSource:(HKSource *) source version:(NSString *) version productType:(NSString *) productType operatingSystemVersion:(NSOperatingSystemVersion) operatingSystemVersion;
```

## Parameters

- `source`: The source for a sample.
- `version`: A string that uniquely identifies the source’s version.
- `productType`: A string that identifies the device used to save the sample.
- `operatingSystemVersion`: A string that identifies the operating system used to save the sample.

<a id="return-value"></a>

## Return Value

A newly initialized source revision object.

<a id="Discussion"></a>

## Discussion

Use this method to create source revisions for use in queries. For more information, see [HKPredicateKeyPathSourceRevision](../hkpredicatekeypathsourcerevision.md).

## See Also

### Related Documentation

- [HKSourceRevisionAnyVersion](../hksourcerevisionanyversion.md): A constant that matches any version.
- [HKSourceRevisionAnyProductType](../hksourcerevisionanyproducttype.md): A constant that matches any product type.
- [HKSourceRevisionAnyOperatingSystem](../hksourcerevisionanyoperatingsystem.md): A constant that matches any operating system.

### Creating Source Revision Objects

- [initWithSource:version:](init%28source_version_%29.md): Initializes a new source revision object with the provided source and version information.
