> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/scoringmode](https://developer.apple.com/documentation/evaluations/scoringmode)

# ScoringMode

**Framework:** Evaluations  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

The scoring constraint mode for a model evaluator.

## Declaration

```swift
enum ScoringMode
```

<a id="overview"></a>

## Overview

```swift
let mode: ScoringMode = .discrete
```

The mode controls whether the model judge can return any floating-point score, or structured generation constrains it to return exactly one of the scale values that the dimension defines.

## Topics

### Enumeration Cases

- [ScoringMode.continuous](scoringmode/continuous.md): A mode that allows the model to return any floating-point value. The scale serves as a guide but is not enforced at the generation level.
- [ScoringMode.discrete](scoringmode/discrete.md): A mode that requires the model to return exactly one of the values defined in the scoring dimension’s scale, enforced using structured generation.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting the evaluator

- [dimensions](modeljudgeevaluator/dimensions.md): The dimensions this evaluator scores.
- [scoringMode](modeljudgeevaluator/scoringmode.md): The scoring constraint mode. See [ScoringMode](scoringmode.md).
