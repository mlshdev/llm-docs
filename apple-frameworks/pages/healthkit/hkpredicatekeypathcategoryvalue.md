> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkpredicatekeypathcategoryvalue

# HKPredicateKeyPathCategoryValue (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The key path for accessing the category sample’s value.

## Declaration

```swift
let HKPredicateKeyPathCategoryValue: String
```

<a id="Discussion"></a>

## Discussion

Use this constant whenever you want to include a sample’s quantity in a predicate format string. Add a `%K` placeholder to the format string, and then pass this constant as an argument.

# HKPredicateKeyPathCategoryValue (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The key path for accessing the category sample’s value.

## Declaration

```objectivec
extern NSString * const HKPredicateKeyPathCategoryValue;
```

<a id="Discussion"></a>

## Discussion

Use this constant whenever you want to include a sample’s quantity in a predicate format string. Add a `%K` placeholder to the format string, and then pass this constant as an argument.
