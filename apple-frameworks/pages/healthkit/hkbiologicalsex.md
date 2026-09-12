> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkbiologicalsex](https://developer.apple.com/documentation/healthkit/hkbiologicalsex)

# HKBiologicalSex (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Constants indicating the user’s sex.

## Declaration

```swift
enum HKBiologicalSex
```

<a id="overview"></a>

## Overview

A person’s sex is a combination of bodily characteristics including: chromosomes, hormones, internal and external reproductive organs, and secondary sex characteristics.

## Topics

### Constants

- [HKBiologicalSex.notSet](hkbiologicalsex/notset.md): A constant indicating that either the user’s biological sex characteristic type is not set, or the user has not granted your app permission to read that characteristic type.
- [HKBiologicalSex.female](hkbiologicalsex/female.md): A constant indicating that the user is female.
- [HKBiologicalSex.male](hkbiologicalsex/male.md): A constant indicating that the user is male.
- [HKBiologicalSex.other](hkbiologicalsex/other.md): A constant indicating that the user is otherwise not categorized as either male or female.

### Initializers

- [init(rawValue:)](hkbiologicalsex/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [HKAudiogramConductionType](hkaudiogramconductiontype.md)
- [HKAudiogramSensitivityTestSide](hkaudiogramsensitivitytestside.md)
- [HKCategoryValueVaginalBleeding](hkcategoryvaluevaginalbleeding.md): A value that indicates the intensity of vaginal bleeding.
- [HKGAD7Assessment.Answer](hkgad7assessment/answer.md)
- [HKGAD7Assessment.Risk](hkgad7assessment/risk-swift.enum.md)
- [HKPHQ9Assessment.Answer](hkphq9assessment/answer.md)
- [HKPHQ9Assessment.Risk](hkphq9assessment/risk-swift.enum.md)
- [HKStateOfMind.Association](hkstateofmind/association.md)
- [HKStateOfMind.Kind](hkstateofmind/kind-swift.enum.md)
- [HKStateOfMind.Label](hkstateofmind/label.md)
- [HKStateOfMind.ValenceClassification](hkstateofmind/valenceclassification-swift.enum.md)
- [HKWorkoutEffortRelationshipQueryOptions](hkworkouteffortrelationshipqueryoptions.md)
- [HKBloodType](hkbloodtype.md): Constants indicating the user’s blood type.
- [HKFitzpatrickSkinType](hkfitzpatrickskintype.md): Categories representing the user’s skin type based on the Fitzpatrick scale.
- [HKWheelchairUse](hkwheelchairuse.md): Constants indicating the user’s wheelchair use.

# HKBiologicalSex (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Constants indicating the user’s sex.

## Declaration

```objectivec
enum HKBiologicalSex : NSInteger;
```

<a id="overview"></a>

## Overview

A person’s sex is a combination of bodily characteristics including: chromosomes, hormones, internal and external reproductive organs, and secondary sex characteristics.

## Topics

### Constants

- [HKBiologicalSexNotSet](hkbiologicalsex/notset.md): A constant indicating that either the user’s biological sex characteristic type is not set, or the user has not granted your app permission to read that characteristic type.
- [HKBiologicalSexFemale](hkbiologicalsex/female.md): A constant indicating that the user is female.
- [HKBiologicalSexMale](hkbiologicalsex/male.md): A constant indicating that the user is male.
- [HKBiologicalSexOther](hkbiologicalsex/other.md): A constant indicating that the user is otherwise not categorized as either male or female.

## See Also

### Enumerations

- [HKAudiogramConductionType](hkaudiogramconductiontype.md)
- [HKAudiogramSensitivityTestSide](hkaudiogramsensitivitytestside.md)
- [HKCategoryValueVaginalBleeding](hkcategoryvaluevaginalbleeding.md): A value that indicates the intensity of vaginal bleeding.
- [HKGAD7AssessmentAnswer](hkgad7assessment/answer.md)
- [HKGAD7AssessmentRisk](hkgad7assessment/risk-swift.enum.md)
- [HKPHQ9AssessmentAnswer](hkphq9assessment/answer.md)
- [HKPHQ9AssessmentRisk](hkphq9assessment/risk-swift.enum.md)
- [HKStateOfMindAssociation](hkstateofmind/association.md)
- [HKStateOfMindKind](hkstateofmind/kind-swift.enum.md)
- [HKStateOfMindLabel](hkstateofmind/label.md)
- [HKStateOfMindValenceClassification](hkstateofmind/valenceclassification-swift.enum.md)
- [HKWorkoutEffortRelationshipQueryOptions](hkworkouteffortrelationshipqueryoptions.md)
- [HKBloodType](hkbloodtype.md): Constants indicating the user’s blood type.
- [HKFitzpatrickSkinType](hkfitzpatrickskintype.md): Categories representing the user’s skin type based on the Fitzpatrick scale.
- [HKWheelchairUse](hkwheelchairuse.md): Constants indicating the user’s wheelchair use.
