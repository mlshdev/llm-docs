> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkwheelchairuse](https://developer.apple.com/documentation/healthkit/hkwheelchairuse)

# HKWheelchairUse (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

Constants indicating the user’s wheelchair use.

## Declaration

```swift
enum HKWheelchairUse
```

## Topics

### Constants

- [HKWheelchairUse.notSet](hkwheelchairuse/notset.md): Either the wheelchair use is not set or the user has not granted your app permission to read that information.
- [HKWheelchairUse.no](hkwheelchairuse/no.md): The user does not use a wheelchair.
- [HKWheelchairUse.yes](hkwheelchairuse/yes.md): The user uses a wheelchair.

### Initializers

- [init(rawValue:)](hkwheelchairuse/init%28rawvalue_%29.md)

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
- [HKFitzpatrickSkinType](hkfitzpatrickskintype.md): Categories representing the user’s skin type based on the Fitzpatrick scale.

# HKWheelchairUse (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

Constants indicating the user’s wheelchair use.

## Declaration

```objectivec
enum HKWheelchairUse : NSInteger;
```

## Topics

### Constants

- [HKWheelchairUseNotSet](hkwheelchairuse/notset.md): Either the wheelchair use is not set or the user has not granted your app permission to read that information.
- [HKWheelchairUseNo](hkwheelchairuse/no.md): The user does not use a wheelchair.
- [HKWheelchairUseYes](hkwheelchairuse/yes.md): The user uses a wheelchair.

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
- [HKFitzpatrickSkinType](hkfitzpatrickskintype.md): Categories representing the user’s skin type based on the Fitzpatrick scale.
