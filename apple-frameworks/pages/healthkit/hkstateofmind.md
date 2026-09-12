> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstateofmind](https://developer.apple.com/documentation/healthkit/hkstateofmind)

# HKStateOfMind (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
class HKStateOfMind
```

## Topics

### Initializers

- [init(date:kind:valence:labels:associations:metadata:)](hkstateofmind/init%28date_kind_valence_labels_associations_metadata_%29.md)

### Instance Properties

- [associations](hkstateofmind/associations-7gwps.md)
- [kind](hkstateofmind/kind-swift.property.md)
- [labels](hkstateofmind/labels-994n4.md)
- [valence](hkstateofmind/valence.md)
- [valenceClassification](hkstateofmind/valenceclassification-swift.property.md)

## Relationships

### Inherits From

- [HKSample](hksample.md)

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

- [HKAudiogramSensitivityPointClampingRange](hkaudiogramsensitivitypointclampingrange.md): Defines the range within which an ear’s sensitivity point may have been clamped, if any.
- [HKAudiogramSensitivityTest](hkaudiogramsensitivitytest.md)
- [HKBiologicalSexObject](hkbiologicalsexobject.md): This class acts as a wrapper for the [HKBiologicalSex](hkbiologicalsex.md) enumeration.
- [HKBloodTypeObject](hkbloodtypeobject.md): This class acts as a wrapper for the [HKBloodType](hkbloodtype.md) enumeration.
- [HKFitzpatrickSkinTypeObject](hkfitzpatrickskintypeobject.md): This class acts as a wrapper for the [HKFitzpatrickSkinType](hkfitzpatrickskintype.md) enumeration.
- [HKGAD7Assessment](hkgad7assessment.md)
- [HKPHQ9Assessment](hkphq9assessment.md)
- [HKScoredAssessment](hkscoredassessment.md)
- [HKScoredAssessmentType](hkscoredassessmenttype.md)
- [HKStateOfMindType](hkstateofmindtype.md)
- [HKWheelchairUseObject](hkwheelchairuseobject.md): This class acts as a wrapper for the wheelchair use enumeration.

# HKStateOfMind (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
@interface HKStateOfMind : HKSample
```

## Topics

### Instance Properties

- [associations](hkstateofmind/associations-5vfw8.md)
- [kind](hkstateofmind/kind-swift.property.md)
- [labels](hkstateofmind/labels-11jl3.md)
- [valence](hkstateofmind/valence.md)
- [valenceClassification](hkstateofmind/valenceclassification-swift.property.md)

### Type Methods

- [stateOfMindWithDate:kind:valence:labels:associations:](hkstateofmind/stateofmindwithdate_kind_valence_labels_associations_.md)
- [stateOfMindWithDate:kind:valence:labels:associations:metadata:](hkstateofmind/stateofmindwithdate_kind_valence_labels_associations_metadata_.md)

## Relationships

### Inherits From

- [HKSample](hksample.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Classes

- [HKAudiogramSensitivityPointClampingRange](hkaudiogramsensitivitypointclampingrange.md): Defines the range within which an ear’s sensitivity point may have been clamped, if any.
- [HKAudiogramSensitivityTest](hkaudiogramsensitivitytest.md)
- [HKBiologicalSexObject](hkbiologicalsexobject.md): This class acts as a wrapper for the [HKBiologicalSex](hkbiologicalsex.md) enumeration.
- [HKBloodTypeObject](hkbloodtypeobject.md): This class acts as a wrapper for the [HKBloodType](hkbloodtype.md) enumeration.
- [HKFitzpatrickSkinTypeObject](hkfitzpatrickskintypeobject.md): This class acts as a wrapper for the [HKFitzpatrickSkinType](hkfitzpatrickskintype.md) enumeration.
- [HKGAD7Assessment](hkgad7assessment.md)
- [HKPHQ9Assessment](hkphq9assessment.md)
- [HKScoredAssessment](hkscoredassessment.md)
- [HKScoredAssessmentType](hkscoredassessmenttype.md)
- [HKStateOfMindType](hkstateofmindtype.md)
- [HKWheelchairUseObject](hkwheelchairuseobject.md): This class acts as a wrapper for the wheelchair use enumeration.
