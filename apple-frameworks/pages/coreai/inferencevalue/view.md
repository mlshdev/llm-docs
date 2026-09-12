> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/inferencevalue/view](https://developer.apple.com/documentation/coreai/inferencevalue/view)

# InferenceValue.View

**Framework:** Core AI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A borrowed, read-only view of an inference value.

## Declaration

```swift
struct View
```

<a id="overview"></a>

## Overview

Use views to pass input values to [InferenceFunction.Inputs](../inferencefunction/inputs.md) without transferring ownership.

## See Also

### Accessing views

- [InferenceValue.MutableView](mutableview.md): A borrowed, mutable view of an inference value.
- [InferenceValue.NamedMutableViews](namedmutableviews.md): A collection of named mutable views into inference values.
