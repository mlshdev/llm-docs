> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmedicationconcept/relatedcodings](https://developer.apple.com/documentation/healthkit/hkmedicationconcept/relatedcodings)

# relatedCodings (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The set of related clinical codings for the medication.

## Declaration

```swift
var relatedCodings: Set<HKClinicalCoding> { get }
```

<a id="discussion"></a>

## Discussion

Each coding links the medication to an external medical terminology system, such as RxNorm.

# relatedCodings (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The set of related clinical codings for the medication.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSSet<HKClinicalCoding *> * relatedCodings;
```

<a id="discussion"></a>

## Discussion

Each coding links the medication to an external medical terminology system, such as RxNorm.
