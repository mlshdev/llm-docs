> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/resultcolumn](https://developer.apple.com/documentation/evaluations/resultcolumn)

# ResultColumn

**Framework:** Evaluations  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A typed descriptor for a column in an evaluation result DataFrame.

## Declaration

```swift
struct ResultColumn<Value>
```

<a id="overview"></a>

## Overview

```swift
let column = myEvaluation.inputColumn
```

## Topics

### Instance Properties

- [name](resultcolumn/name.md): The column name in the DataFrame.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Results

- [EvaluationResult](evaluationresult.md): The results of running a model evaluation.
- [inputColumn](evaluation/inputcolumn.md): A typed column descriptor for the input samples in the detailed DataFrame.
- [responseColumn](evaluation/responsecolumn.md): A typed column descriptor for the model responses in the detailed DataFrame.
- [expectedColumn](evaluation/expectedcolumn.md): A typed column descriptor for the expected values in the detailed DataFrame.
