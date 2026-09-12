> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquerydescriptor/predicate](https://developer.apple.com/documentation/healthkit/hkquerydescriptor/predicate)

# predicate (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

The predicate that filters samples matching this descriptor.

## Declaration

```swift
@NSCopying var predicate: NSPredicate? { get }
```

<a id="Discussion"></a>

## Discussion

If the predicate is `nil`, the descriptor matches all samples of the data type specified by the [sampleType](sampletype.md) property.

## See Also

### Accessing Descriptor Data

- [sampleType](sampletype.md): The data type of samples that match this descriptor.

# predicate (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

The predicate that filters samples matching this descriptor.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSPredicate * predicate;
```

<a id="Discussion"></a>

## Discussion

If the predicate is `nil`, the descriptor matches all samples of the data type specified by the [sampleType](sampletype.md) property.

## See Also

### Accessing Descriptor Data

- [sampleType](sampletype.md): The data type of samples that match this descriptor.
