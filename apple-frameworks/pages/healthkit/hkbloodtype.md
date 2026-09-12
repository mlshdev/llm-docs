> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkbloodtype](https://developer.apple.com/documentation/healthkit/hkbloodtype)

# HKBloodType (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Constants indicating the user’s blood type.

## Declaration

```swift
enum HKBloodType
```

## Topics

### Constants

- [HKBloodType.notSet](hkbloodtype/notset.md): Either the user’s blood type is not set, or the user has not granted your app permission to read the blood type.
- [HKBloodType.aPositive](hkbloodtype/apositive.md): The user has an A+ blood type.
- [HKBloodType.aNegative](hkbloodtype/anegative.md): The user has an A– blood type.
- [HKBloodType.bPositive](hkbloodtype/bpositive.md): The user has an B+ blood type.
- [HKBloodType.bNegative](hkbloodtype/bnegative.md): The user has an B– blood type.
- [HKBloodType.abPositive](hkbloodtype/abpositive.md): The user has an AB+ blood type.
- [HKBloodType.abNegative](hkbloodtype/abnegative.md): The user has an AB– blood type.
- [HKBloodType.oPositive](hkbloodtype/opositive.md): The user has an O+ blood type.
- [HKBloodType.oNegative](hkbloodtype/onegative.md): The user has an O– blood type.

### Initializers

- [init(rawValue:)](hkbloodtype/init%28rawvalue_%29.md)

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
- [HKFitzpatrickSkinType](hkfitzpatrickskintype.md): Categories representing the user’s skin type based on the Fitzpatrick scale.
- [HKWheelchairUse](hkwheelchairuse.md): Constants indicating the user’s wheelchair use.

# HKBloodType (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Constants indicating the user’s blood type.

## Declaration

```objectivec
enum HKBloodType : NSInteger;
```

## Topics

### Constants

- [HKBloodTypeNotSet](hkbloodtype/notset.md): Either the user’s blood type is not set, or the user has not granted your app permission to read the blood type.
- [HKBloodTypeAPositive](hkbloodtype/apositive.md): The user has an A+ blood type.
- [HKBloodTypeANegative](hkbloodtype/anegative.md): The user has an A– blood type.
- [HKBloodTypeBPositive](hkbloodtype/bpositive.md): The user has an B+ blood type.
- [HKBloodTypeBNegative](hkbloodtype/bnegative.md): The user has an B– blood type.
- [HKBloodTypeABPositive](hkbloodtype/abpositive.md): The user has an AB+ blood type.
- [HKBloodTypeABNegative](hkbloodtype/abnegative.md): The user has an AB– blood type.
- [HKBloodTypeOPositive](hkbloodtype/opositive.md): The user has an O+ blood type.
- [HKBloodTypeONegative](hkbloodtype/onegative.md): The user has an O– blood type.

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
- [HKFitzpatrickSkinType](hkfitzpatrickskintype.md): Categories representing the user’s skin type based on the Fitzpatrick scale.
- [HKWheelchairUse](hkwheelchairuse.md): Constants indicating the user’s wheelchair use.
