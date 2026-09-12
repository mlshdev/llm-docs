> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/trustinsights/insightevaluationconsumptionstatus](https://developer.apple.com/documentation/trustinsights/insightevaluationconsumptionstatus)

# InsightEvaluationConsumptionStatus

**Framework:** Trust Insights  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Values describing the usage of insight evaluation.

## Declaration

```swift
@nonexhaustive enum InsightEvaluationConsumptionStatus
```

## Topics

### Consumption status values

- [InsightEvaluationConsumptionStatus.notUsedError](insightevaluationconsumptionstatus/notusederror.md): A value that indicates the app couldn’t use the insights because of a technical failure, they arrived too late to be of use, or other issue.
- [InsightEvaluationConsumptionStatus.notUsedNotNeeded](insightevaluationconsumptionstatus/notusednotneeded.md): A value that indicates the app canceled the operation, so no decision required.
- [InsightEvaluationConsumptionStatus.usedEvaluationOnly](insightevaluationconsumptionstatus/usedevaluationonly.md): A value that indicates the app used the insights for evaluation of their usefulness or for model training with no impact on a decision process.
- [InsightEvaluationConsumptionStatus.usedIncreasedFriction](insightevaluationconsumptionstatus/usedincreasedfriction.md): A value that indicates the app evaluated the insights and they were a factor in adding checks or blocking the action.
- [InsightEvaluationConsumptionStatus.usedReducedFriction](insightevaluationconsumptionstatus/usedreducedfriction.md): A value that indicates the app evaluated the insights and they were a factor in making the operation easier for the user.
- [InsightEvaluationConsumptionStatus.usedUnchangedFriction](insightevaluationconsumptionstatus/usedunchangedfriction.md): A value that indicates the app evaluated the insights, but the insights didn’t have any impact on the decision or user flow.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Receiving evaluation notifications and handling errors

- [InsightError](insighterror.md): Error values the framework returns for specific insights within the overall evaluation.
