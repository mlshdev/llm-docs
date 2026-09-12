> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquerydescriptor/init(sampletype:predicate:)](https://developer.apple.com/documentation/healthkit/hkquerydescriptor/init(sampletype:predicate:))

# init(sampleType:predicate:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a new descriptor for the data type and predicate you provided.

## Declaration

```swift
init(sampleType: HKSampleType, predicate: NSPredicate?)
```

## Parameters

- `sampleType`: The data type of samples that match this descriptor. For more information, see [Data types](../data-types.md).
- `predicate`: The predicate used to filter samples that match this descriptor. If the predicate is `nil`, the descriptor matches all samples of the specified data type.

# initWithSampleType:predicate: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a new descriptor for the data type and predicate you provided.

## Declaration

```objectivec
- (instancetype) initWithSampleType:(HKSampleType *) sampleType predicate:(NSPredicate *) predicate;
```

## Parameters

- `sampleType`: The data type of samples that match this descriptor. For more information, see [Data types](../data-types.md).
- `predicate`: The predicate used to filter samples that match this descriptor. If the predicate is `nil`, the descriptor matches all samples of the specified data type.
