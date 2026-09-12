> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkaudiogramsensitivitypointclampingrange](https://developer.apple.com/documentation/healthkit/hkaudiogramsensitivitypointclampingrange)

# HKAudiogramSensitivityPointClampingRange (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · visionOS 2.1+ · watchOS 11.1+

Defines the range within which an ear’s sensitivity point may have been clamped, if any.

## Declaration

```swift
class HKAudiogramSensitivityPointClampingRange
```

<a id="overview"></a>

## Overview

At times, it may be required to indicate that a sensitivity point has been clamped to a range. These reasons include but are not limited to user safety, hardware limitations, or algorithm features.

## Topics

### Initializers

- [init(coder:)](hkaudiogramsensitivitypointclampingrange/init%28coder_%29.md)
- [init(lowerBound:upperBound:)](hkaudiogramsensitivitypointclampingrange/init%28lowerbound_upperbound_%29.md)

### Instance Properties

- [lowerBound](hkaudiogramsensitivitypointclampingrange/lowerbound.md)
- [upperBound](hkaudiogramsensitivitypointclampingrange/upperbound.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Classes

- [HKAudiogramSensitivityTest](hkaudiogramsensitivitytest.md)
- [HKBiologicalSexObject](hkbiologicalsexobject.md): This class acts as a wrapper for the [HKBiologicalSex](hkbiologicalsex.md) enumeration.
- [HKBloodTypeObject](hkbloodtypeobject.md): This class acts as a wrapper for the [HKBloodType](hkbloodtype.md) enumeration.
- [HKFitzpatrickSkinTypeObject](hkfitzpatrickskintypeobject.md): This class acts as a wrapper for the [HKFitzpatrickSkinType](hkfitzpatrickskintype.md) enumeration.
- [HKGAD7Assessment](hkgad7assessment.md)
- [HKPHQ9Assessment](hkphq9assessment.md)
- [HKScoredAssessment](hkscoredassessment.md)
- [HKScoredAssessmentType](hkscoredassessmenttype.md)
- [HKStateOfMind](hkstateofmind.md)
- [HKStateOfMindType](hkstateofmindtype.md)
- [HKWheelchairUseObject](hkwheelchairuseobject.md): This class acts as a wrapper for the wheelchair use enumeration.

# HKAudiogramSensitivityPointClampingRange (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · visionOS 2.1+ · watchOS 11.1+

Defines the range within which an ear’s sensitivity point may have been clamped, if any.

## Declaration

```objectivec
@interface HKAudiogramSensitivityPointClampingRange : NSObject
```

<a id="overview"></a>

## Overview

At times, it may be required to indicate that a sensitivity point has been clamped to a range. These reasons include but are not limited to user safety, hardware limitations, or algorithm features.

## Topics

### Instance Properties

- [lowerBound](hkaudiogramsensitivitypointclampingrange/lowerbound.md)
- [upperBound](hkaudiogramsensitivitypointclampingrange/upperbound.md)

### Type Methods

- [clampingRangeWithLowerBound:upperBound:error:](hkaudiogramsensitivitypointclampingrange/init%28lowerbound_upperbound_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Classes

- [HKAudiogramSensitivityTest](hkaudiogramsensitivitytest.md)
- [HKBiologicalSexObject](hkbiologicalsexobject.md): This class acts as a wrapper for the [HKBiologicalSex](hkbiologicalsex.md) enumeration.
- [HKBloodTypeObject](hkbloodtypeobject.md): This class acts as a wrapper for the [HKBloodType](hkbloodtype.md) enumeration.
- [HKFitzpatrickSkinTypeObject](hkfitzpatrickskintypeobject.md): This class acts as a wrapper for the [HKFitzpatrickSkinType](hkfitzpatrickskintype.md) enumeration.
- [HKGAD7Assessment](hkgad7assessment.md)
- [HKPHQ9Assessment](hkphq9assessment.md)
- [HKScoredAssessment](hkscoredassessment.md)
- [HKScoredAssessmentType](hkscoredassessmenttype.md)
- [HKStateOfMind](hkstateofmind.md)
- [HKStateOfMindType](hkstateofmindtype.md)
- [HKWheelchairUseObject](hkwheelchairuseobject.md): This class acts as a wrapper for the wheelchair use enumeration.
