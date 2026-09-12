> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkfitzpatrickskintype](https://developer.apple.com/documentation/healthkit/hkfitzpatrickskintype)

# HKFitzpatrickSkinType (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Categories representing the user’s skin type based on the Fitzpatrick scale.

## Declaration

```swift
enum HKFitzpatrickSkinType
```

<a id="overview"></a>

## Overview

The Fitzpatrick scale is a numerical classification for skin color based on the skins response to sun exposure in terms of the degree of burning and tanning.

## Topics

### Constants

- [HKFitzpatrickSkinType.notSet](hkfitzpatrickskintype/notset.md): Either the user’s skin type is not set, or the user has not granted your app permission to read the skin type.
- [HKFitzpatrickSkinType.I](hkfitzpatrickskintype/i.md): Pale white skin that always burns easily in the sun and never tans.
- [HKFitzpatrickSkinType.II](hkfitzpatrickskintype/ii.md): White skin that burns easily and tans minimally.
- [HKFitzpatrickSkinType.III](hkfitzpatrickskintype/iii.md): White to light brown skin that burns moderately and tans uniformly.
- [HKFitzpatrickSkinType.IV](hkfitzpatrickskintype/iv.md): Beige-olive, lightly tanned skin that burns minimally and tans moderately.
- [HKFitzpatrickSkinType.V](hkfitzpatrickskintype/v.md): Brown skin that rarely burns and tans profusely.
- [HKFitzpatrickSkinType.VI](hkfitzpatrickskintype/vi.md): Dark brown to black skin that never burns and tans profusely.

### Initializers

- [init(rawValue:)](hkfitzpatrickskintype/init%28rawvalue_%29.md)

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
- [HKBiologicalSex](hkbiologicalsex.md): Constants indicating the user’s sex.
- [HKBloodType](hkbloodtype.md): Constants indicating the user’s blood type.
- [HKWheelchairUse](hkwheelchairuse.md): Constants indicating the user’s wheelchair use.

# HKFitzpatrickSkinType (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Categories representing the user’s skin type based on the Fitzpatrick scale.

## Declaration

```objectivec
enum HKFitzpatrickSkinType : NSInteger;
```

<a id="overview"></a>

## Overview

The Fitzpatrick scale is a numerical classification for skin color based on the skins response to sun exposure in terms of the degree of burning and tanning.

## Topics

### Constants

- [HKFitzpatrickSkinTypeNotSet](hkfitzpatrickskintype/notset.md): Either the user’s skin type is not set, or the user has not granted your app permission to read the skin type.
- [HKFitzpatrickSkinTypeI](hkfitzpatrickskintype/i.md): Pale white skin that always burns easily in the sun and never tans.
- [HKFitzpatrickSkinTypeII](hkfitzpatrickskintype/ii.md): White skin that burns easily and tans minimally.
- [HKFitzpatrickSkinTypeIII](hkfitzpatrickskintype/iii.md): White to light brown skin that burns moderately and tans uniformly.
- [HKFitzpatrickSkinTypeIV](hkfitzpatrickskintype/iv.md): Beige-olive, lightly tanned skin that burns minimally and tans moderately.
- [HKFitzpatrickSkinTypeV](hkfitzpatrickskintype/v.md): Brown skin that rarely burns and tans profusely.
- [HKFitzpatrickSkinTypeVI](hkfitzpatrickskintype/vi.md): Dark brown to black skin that never burns and tans profusely.

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
- [HKBiologicalSex](hkbiologicalsex.md): Constants indicating the user’s sex.
- [HKBloodType](hkbloodtype.md): Constants indicating the user’s blood type.
- [HKWheelchairUse](hkwheelchairuse.md): Constants indicating the user’s wheelchair use.
