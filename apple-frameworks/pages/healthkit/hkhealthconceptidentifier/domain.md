> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkhealthconceptidentifier/domain

# domain (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The domain this identifier belongs to.

## Declaration

```swift
var domain: HKHealthConceptDomain { get }
```

<a id="discussion"></a>

## Discussion

This value identifies the group of concepts the identifier comes from. For example, if the identifier represents a medication, the category will be the medication domain.

# domain (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The domain this identifier belongs to.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) HKHealthConceptDomain domain;
```

<a id="discussion"></a>

## Discussion

This value identifies the group of concepts the identifier comes from. For example, if the identifier represents a medication, the category will be the medication domain.
