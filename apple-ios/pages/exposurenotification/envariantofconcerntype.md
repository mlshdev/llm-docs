> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/envariantofconcerntype](https://developer.apple.com/documentation/exposurenotification/envariantofconcerntype)

# ENVariantOfConcernType (Swift)

**Framework:** Exposure Notification  
**Kind:** Enumeration  
**Availability:** iOS 15.2+ (deprecated in 27.0) · iPadOS 15.2+ (deprecated in 27.0) · Mac Catalyst 15.2+ (deprecated in 27.0)

A set of user-definable types that indicate variants of concern.

> No longer supported.

## Declaration

```swift
enum ENVariantOfConcernType
```

<a id="overview"></a>

## Overview

A Public Health Authority (PHA) defines the meaning of the types that indicate variants of concern. For example, a PHA could define the meaning of [ENVariantOfConcernType.type1](envariantofconcerntype/type1.md) as “Vaccine is effective”, and [ENVariantOfConcernType.type2](envariantofconcerntype/type2.md) as “Highly transmissive.” The PHA could assign the definition of “High severity” to [ENVariantOfConcernType.type3](envariantofconcerntype/type3.md), and “Vaccine breakthrough” to [ENVariantOfConcernType.type4](envariantofconcerntype/type4.md).

## Topics

### User-Defined Types

- [ENVariantOfConcernType.type1](envariantofconcerntype/type1.md): Deprecated. The first user-definable type for a variant of concern.
- [ENVariantOfConcernType.type2](envariantofconcerntype/type2.md): Deprecated. The second user-definable type for a variant of concern.
- [ENVariantOfConcernType.type3](envariantofconcerntype/type3.md): Deprecated. The third user-definable type for a variant of concern.
- [ENVariantOfConcernType.type4](envariantofconcerntype/type4.md): Deprecated. The fourth user-definable type for a variant of concern.
- [ENVariantOfConcernType.typeUnknown](envariantofconcerntype/typeunknown.md): Deprecated. The unknown type for a variant of concern.

### Initializers

- [init(rawValue:)](envariantofconcerntype/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting Window Properties

- [calibrationConfidence](enexposurewindow/calibrationconfidence.md): Deprecated. The transmitting device’s calibration confidence.
- [date](enexposurewindow/date.md): Deprecated. The date that the exposure occurred.
- [diagnosisReportType](enexposurewindow/diagnosisreporttype.md): Deprecated. The report type of the observed diagnosis.
- [infectiousness](enexposurewindow/infectiousness.md): Deprecated. How infectious the user is, based on the number of days since the onset of symptoms.
- [scanInstances](enexposurewindow/scaninstances.md): Deprecated. An array of scans corresponding to a beacon associated with an exposure.
- [variantOfConcernType](enexposurewindow/variantofconcerntype.md): Deprecated. The variant of concern associated with this user.

# ENVariantOfConcernType (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Enumeration  
**Availability:** iOS 15.2+ (deprecated in 27.0) · iPadOS 15.2+ (deprecated in 27.0) · Mac Catalyst 15.2+ (deprecated in 27.0)

A set of user-definable types that indicate variants of concern.

> No longer supported.

## Declaration

```objectivec
enum ENVariantOfConcernType : uint32_t;
```

<a id="overview"></a>

## Overview

A Public Health Authority (PHA) defines the meaning of the types that indicate variants of concern. For example, a PHA could define the meaning of [ENVariantOfConcernType1](envariantofconcerntype/type1.md) as “Vaccine is effective”, and [ENVariantOfConcernType2](envariantofconcerntype/type2.md) as “Highly transmissive.” The PHA could assign the definition of “High severity” to [ENVariantOfConcernType3](envariantofconcerntype/type3.md), and “Vaccine breakthrough” to [ENVariantOfConcernType4](envariantofconcerntype/type4.md).

## Topics

### User-Defined Types

- [ENVariantOfConcernType1](envariantofconcerntype/type1.md): Deprecated. The first user-definable type for a variant of concern.
- [ENVariantOfConcernType2](envariantofconcerntype/type2.md): Deprecated. The second user-definable type for a variant of concern.
- [ENVariantOfConcernType3](envariantofconcerntype/type3.md): Deprecated. The third user-definable type for a variant of concern.
- [ENVariantOfConcernType4](envariantofconcerntype/type4.md): Deprecated. The fourth user-definable type for a variant of concern.
- [ENVariantOfConcernTypeUnknown](envariantofconcerntype/typeunknown.md): Deprecated. The unknown type for a variant of concern.

## See Also

### Getting Window Properties

- [calibrationConfidence](enexposurewindow/calibrationconfidence.md): Deprecated. The transmitting device’s calibration confidence.
- [date](enexposurewindow/date.md): Deprecated. The date that the exposure occurred.
- [diagnosisReportType](enexposurewindow/diagnosisreporttype.md): Deprecated. The report type of the observed diagnosis.
- [infectiousness](enexposurewindow/infectiousness.md): Deprecated. How infectious the user is, based on the number of days since the onset of symptoms.
- [scanInstances](enexposurewindow/scaninstances.md): Deprecated. An array of scans corresponding to a beacon associated with an exposure.
- [variantOfConcernType](enexposurewindow/variantofconcerntype.md): Deprecated. The variant of concern associated with this user.
