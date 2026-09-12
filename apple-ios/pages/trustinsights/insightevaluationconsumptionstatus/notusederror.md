> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/trustinsights/insightevaluationconsumptionstatus/notusederror](https://developer.apple.com/documentation/trustinsights/insightevaluationconsumptionstatus/notusederror)

# InsightEvaluationConsumptionStatus.notUsedError

**Framework:** Trust Insights  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+

A value that indicates the app couldn’t use the insights because of a technical failure, they arrived too late to be of use, or other issue.

## Declaration

```swift
case notUsedError
```

## See Also

### Consumption status values

- [InsightEvaluationConsumptionStatus.notUsedNotNeeded](notusednotneeded.md): A value that indicates the app canceled the operation, so no decision required.
- [InsightEvaluationConsumptionStatus.usedEvaluationOnly](usedevaluationonly.md): A value that indicates the app used the insights for evaluation of their usefulness or for model training with no impact on a decision process.
- [InsightEvaluationConsumptionStatus.usedIncreasedFriction](usedincreasedfriction.md): A value that indicates the app evaluated the insights and they were a factor in adding checks or blocking the action.
- [InsightEvaluationConsumptionStatus.usedReducedFriction](usedreducedfriction.md): A value that indicates the app evaluated the insights and they were a factor in making the operation easier for the user.
- [InsightEvaluationConsumptionStatus.usedUnchangedFriction](usedunchangedfriction.md): A value that indicates the app evaluated the insights, but the insights didn’t have any impact on the decision or user flow.
