> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkobjecttype/visionprescriptiontype()](https://developer.apple.com/documentation/healthkit/hkobjecttype/visionprescriptiontype())

# visionPrescriptionType() (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a shared vision prescription type object.

## Declaration

```swift
class func visionPrescriptionType() -> HKPrescriptionType
```

<a id="Discussion"></a>

## Discussion

This method returns an instance of the [HKPrescriptionType](../hkprescriptiontype.md) concrete subclass. Use a prescription type to request permission to read or write prescriptions from the HealthKit store., and to create samples that store prescription information. In HealthKit, all prescriptions use the same [HKPrescriptionType](../hkprescriptiontype.md) instance.

# visionPrescriptionType (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a shared vision prescription type object.

## Declaration

```objectivec
+ (HKPrescriptionType *) visionPrescriptionType;
```

<a id="Discussion"></a>

## Discussion

This method returns an instance of the [HKPrescriptionType](../hkprescriptiontype.md) concrete subclass. Use a prescription type to request permission to read or write prescriptions from the HealthKit store., and to create samples that store prescription information. In HealthKit, all prescriptions use the same [HKPrescriptionType](../hkprescriptiontype.md) instance.
