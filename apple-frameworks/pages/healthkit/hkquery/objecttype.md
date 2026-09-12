> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/objecttype](https://developer.apple.com/documentation/healthkit/hkquery/objecttype)

# objectType (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.2+

The type of objects being queried.

## Declaration

```swift
var objectType: HKObjectType? { get }
```

<a id="Discussion"></a>

## Discussion

Not all queries return objects of the specified type; however, they all use the object type to filter their results. For example, source queries return a set of data sources that have saved objects with a matching type, while statistics queries return statistical information about the objects with a matching type.

## See Also

### Accessing properties

- [predicate](predicate.md): A predicate used to filter the objects returned from the HealthKit store.
- [sampleType](sampletype.md): Deprecated. The type of objects being queried.

# objectType (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.2+

The type of objects being queried.

## Declaration

```objectivec
@property (strong, readonly, nullable) HKObjectType * objectType;
```

<a id="Discussion"></a>

## Discussion

Not all queries return objects of the specified type; however, they all use the object type to filter their results. For example, source queries return a set of data sources that have saved objects with a matching type, while statistics queries return statistical information about the objects with a matching type.

## See Also

### Accessing properties

- [predicate](predicate.md): A predicate used to filter the objects returned from the HealthKit store.
- [sampleType](sampletype.md): Deprecated. The type of objects being queried.
