> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkcategorysample/categorytype

# categoryType (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The category type for this sample.

## Declaration

```swift
var categoryType: HKCategoryType { get }
```

<a id="Discussion"></a>

## Discussion

This property contains a reference to the [sampleType](../hksample/sampletype.md) property that is cast as an [HKCategoryType](../hkcategorytype.md) object.

## See Also

### Getting Property Data

- [value](value.md): The category value for this sample.

# categoryType (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The category type for this sample.

## Declaration

```objectivec
@property (strong, readonly) HKCategoryType * categoryType;
```

<a id="Discussion"></a>

## Discussion

This property contains a reference to the [sampleType](../hksample/sampletype.md) property that is cast as an [HKCategoryType](../hkcategorytype.md) object.

## See Also

### Getting Property Data

- [value](value.md): The category value for this sample.
