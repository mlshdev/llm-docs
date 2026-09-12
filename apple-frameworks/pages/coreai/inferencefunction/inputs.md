> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/inferencefunction/inputs](https://developer.apple.com/documentation/coreai/inferencefunction/inputs)

# InferenceFunction.Inputs

**Framework:** Core AI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A collection of named input values for an inference function.

## Declaration

```swift
struct Inputs
```

## Mentioned In

- [Integrating on-device AI models in your app with Core AI](../integrating-on-device-ai-models-in-your-app-with-core-ai.md)

<a id="overview"></a>

## Overview

Build an `Inputs` collection by calling [insert(\_:for:)](inputs/insert%28__for_%29-2htrp.md) for each named input the function expects, then pass it to [run(inputs:states:outputViews:)](run%28inputs_states_outputviews_%29-14emi.md).

## Topics

### Creating inputs

- [init()](inputs/init%28%29.md): Creates an empty set of inputs.

### Adding inputs

- [insert(\_:for:)](inputs/insert%28__for_%29-3eg32.md): Inserts a raw array view as the input with the specified name.
- [insert(\_:for:)](inputs/insert%28__for_%29-2htrp.md): Inserts a view of the value as the input with the specified name.
- [insert(\_:for:)](inputs/insert%28__for_%29-5o5oi.md): Inserts a typed array view as the input with the specified name.

## See Also

### Supporting types

- [InferenceFunction.Outputs](outputs.md): The output values produced by running an inference function.
- [InferenceFunction.MutableViews](mutableviews.md): A collection of `InferenceValue.MutableView`s which can be updated in-place by an `InferenceFunction`.
