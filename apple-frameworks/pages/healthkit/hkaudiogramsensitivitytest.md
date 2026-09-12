> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkaudiogramsensitivitytest](https://developer.apple.com/documentation/healthkit/hkaudiogramsensitivitytest)

# HKAudiogramSensitivityTest (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · visionOS 2.1+ · watchOS 11.1+

## Declaration

```swift
class HKAudiogramSensitivityTest
```

## Topics

### Initializers

- [init(coder:)](hkaudiogramsensitivitytest/init%28coder_%29.md)
- [init(sensitivity:type:masked:side:clampingRange:)](hkaudiogramsensitivitytest/init%28sensitivity_type_masked_side_clampingrange_%29.md)

### Instance Properties

- [clampingRange](hkaudiogramsensitivitytest/clampingrange.md)
- [masked](hkaudiogramsensitivitytest/masked.md)
- [sensitivity](hkaudiogramsensitivitytest/sensitivity.md)
- [side](hkaudiogramsensitivitytest/side.md)
- [type](hkaudiogramsensitivitytest/type.md)

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

- [HKAudiogramSensitivityPointClampingRange](hkaudiogramsensitivitypointclampingrange.md): Defines the range within which an ear’s sensitivity point may have been clamped, if any.
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

# HKAudiogramSensitivityTest (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · visionOS 2.1+ · watchOS 11.1+

## Declaration

```objectivec
@interface HKAudiogramSensitivityTest : NSObject
```

## Topics

### Instance Properties

- [clampingRange](hkaudiogramsensitivitytest/clampingrange.md)
- [masked](hkaudiogramsensitivitytest/masked.md)
- [sensitivity](hkaudiogramsensitivitytest/sensitivity.md)
- [side](hkaudiogramsensitivitytest/side.md)
- [type](hkaudiogramsensitivitytest/type.md)

### Instance Methods

- [initWithSensitivity:type:masked:side:clampingRange:error:](hkaudiogramsensitivitytest/init%28sensitivity_type_masked_side_clampingrange_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Classes

- [HKAudiogramSensitivityPointClampingRange](hkaudiogramsensitivitypointclampingrange.md): Defines the range within which an ear’s sensitivity point may have been clamped, if any.
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
