> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluatorsbuilder/buildoptional(_:)](https://developer.apple.com/documentation/evaluations/evaluatorsbuilder/buildoptional(_:))

# buildOptional(\_:)

**Framework:** Evaluations  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Provides an empty array when an optional evaluator block is absent.

## Declaration

```swift
static func buildOptional(_ component: [any EvaluatorProtocol<Sample, Subject>]?) -> [any EvaluatorProtocol<Sample, Subject>]
```
