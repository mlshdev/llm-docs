> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluatorsbuilder/buildexpression(_:)](https://developer.apple.com/documentation/evaluations/evaluatorsbuilder/buildexpression(_:))

# buildExpression(\_:)

**Framework:** Evaluations  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Wraps a single evaluator expression into the builder pipeline.

## Declaration

```swift
static func buildExpression(_ expression: any EvaluatorProtocol<Sample, Subject>) -> any EvaluatorProtocol<Sample, Subject>
```
