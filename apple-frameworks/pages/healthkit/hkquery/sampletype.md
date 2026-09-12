> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/sampletype](https://developer.apple.com/documentation/healthkit/hkquery/sampletype)

# sampleType (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 9.3) · iPadOS 8.0+ (deprecated in 9.3) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 13.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.2)

The type of objects being queried.

> Use [objectType](objecttype.md) instead.

## Declaration

```swift
var sampleType: HKSampleType? { get }
```

<a id="Discussion"></a>

## Discussion

Not all queries return objects of the specified type; however, they all use the object type to generate their results. For example, source queries return a set of data sources that have saved objects with a matching type, while statistics queries return statistical information about the objects with a matching type.

## See Also

### Accessing properties

- [predicate](predicate.md): A predicate used to filter the objects returned from the HealthKit store.
- [objectType](objecttype.md): The type of objects being queried.

# sampleType (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 9.3) · iPadOS 8.0+ (deprecated in 9.3) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 13.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.2)

The type of objects being queried.

> Use [objectType](objecttype.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nullable) HKSampleType * sampleType;
```

<a id="Discussion"></a>

## Discussion

Not all queries return objects of the specified type; however, they all use the object type to generate their results. For example, source queries return a set of data sources that have saved objects with a matching type, while statistics queries return statistical information about the objects with a matching type.

## See Also

### Accessing properties

- [predicate](predicate.md): A predicate used to filter the objects returned from the HealthKit store.
- [objectType](objecttype.md): The type of objects being queried.
