> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksourcerevision/init(source:version:)](https://developer.apple.com/documentation/healthkit/hksourcerevision/init(source:version:))

# init(source:version:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a new source revision object with the provided source and version information.

## Declaration

```swift
init(source: HKSource, version: String?)
```

## Parameters

- `source`: The source for a sample.
- `version`: A string that uniquely identifies the source’s version.

<a id="return-value"></a>

## Return Value

A newly initialized source revision object.

<a id="Discussion"></a>

## Discussion

Use this method to create source revisions for use in queries. For more information, see [HKPredicateKeyPathSourceRevision](../hkpredicatekeypathsourcerevision.md).

On iOS 9.0 or later, the system automatically creates a source revision for any samples saved to the HealthKit store. For earlier versions of iOS, the system only saves [HKSource](../hksource.md) information. However, when these samples are retrieved on iOS 9.0 or later, the system creates a new source revision object for the sample. HealthKit uses the previously stored source information with a `nil`-valued version string.

## See Also

### Related Documentation

- [HKSourceRevisionAnyVersion](../hksourcerevisionanyversion.md): A constant that matches any version.

### Creating Source Revision Objects

- [init(source:version:productType:operatingSystemVersion:)](init%28source_version_producttype_operatingsystemversion_%29.md): Initializes a new source revision object with the provided source, version, product type, and operating system.

# initWithSource:version: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a new source revision object with the provided source and version information.

## Declaration

```objectivec
- (instancetype) initWithSource:(HKSource *) source version:(NSString *) version;
```

## Parameters

- `source`: The source for a sample.
- `version`: A string that uniquely identifies the source’s version.

<a id="return-value"></a>

## Return Value

A newly initialized source revision object.

<a id="Discussion"></a>

## Discussion

Use this method to create source revisions for use in queries. For more information, see [HKPredicateKeyPathSourceRevision](../hkpredicatekeypathsourcerevision.md).

On iOS 9.0 or later, the system automatically creates a source revision for any samples saved to the HealthKit store. For earlier versions of iOS, the system only saves [HKSource](../hksource.md) information. However, when these samples are retrieved on iOS 9.0 or later, the system creates a new source revision object for the sample. HealthKit uses the previously stored source information with a `nil`-valued version string.

## See Also

### Related Documentation

- [HKSourceRevisionAnyVersion](../hksourcerevisionanyversion.md): A constant that matches any version.

### Creating Source Revision Objects

- [initWithSource:version:productType:operatingSystemVersion:](init%28source_version_producttype_operatingsystemversion_%29.md): Initializes a new source revision object with the provided source, version, product type, and operating system.
