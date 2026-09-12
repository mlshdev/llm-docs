> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/inferencevalue/namedmutableviews](https://developer.apple.com/documentation/coreai/inferencevalue/namedmutableviews)

# InferenceValue.NamedMutableViews

**Framework:** Core AI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A collection of named mutable views into inference values.

## Declaration

```swift
struct NamedMutableViews
```

<a id="overview"></a>

## Overview

Each view can only be taken once to ensure exclusive access.

## Topics

### Accessing views

- [take(\_:)](namedmutableviews/take%28__%29.md): Takes the mutable view for the specified value.

## See Also

### Accessing views

- [InferenceValue.View](view.md): A borrowed, read-only view of an inference value.
- [InferenceValue.MutableView](mutableview.md): A borrowed, mutable view of an inference value.
