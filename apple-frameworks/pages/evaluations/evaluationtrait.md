> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluationtrait](https://developer.apple.com/documentation/evaluations/evaluationtrait)

# EvaluationTrait

**Framework:** Evaluations  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A test trait that runs an evaluation and records the result as attachments.

## Declaration

```swift
struct EvaluationTrait
```

## Mentioned In

- [Evaluating language model responses](evaluating-language-model-responses.md)
- [Evaluating tool-calling behavior](evaluating-tool-calling-behavior.md)

<a id="overview"></a>

## Overview

```swift
let accuracyMetric = Metric("Accuracy")

@Test(.evaluates(myEvaluation))
func testAccuracy() async throws {
    let result = EvaluationContext.current.result
    #expect(result.aggregateValue(.mean(of: accuracyMetric)) >= 0.8)
}
```

The result is accessible from an evaluation context.

## Topics

### Instance Methods

- [provideScope(for:testCase:performing:)](evaluationtrait/providescope%28for_testcase_performing_%29.md): Runs the evaluation and makes its result available to the test body through an evaluation context.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TestScoping](https://developer.apple.com/documentation/testing/testscoping)
- [TestTrait](https://developer.apple.com/documentation/testing/testtrait)
- [Trait](https://developer.apple.com/documentation/testing/trait)

## See Also

### Swift Testing integration

- [EvaluationContext](evaluationcontext.md): A context that provides the evaluation result within a test scope.
