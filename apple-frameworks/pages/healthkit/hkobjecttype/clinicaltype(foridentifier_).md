> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkobjecttype/clinicaltype(foridentifier:)](https://developer.apple.com/documentation/healthkit/hkobjecttype/clinicaltype(foridentifier:))

# clinicalType(forIdentifier:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 12.0+ (deprecated in 27.0) · iPadOS 12.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS · visionOS 1.0+ (deprecated in 27.0) · watchOS 5.0+ (deprecated in 27.0)

Returns the shared clinical type for the provided identifier.

## Declaration

```swift
class func clinicalType(forIdentifier identifier: HKClinicalTypeIdentifier) -> HKClinicalType?
```

# clinicalTypeForIdentifier: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

Returns the shared clinical type for the provided identifier.

## Declaration

```objectivec
+ (HKClinicalType *) clinicalTypeForIdentifier:(HKClinicalTypeIdentifier) identifier;
```
