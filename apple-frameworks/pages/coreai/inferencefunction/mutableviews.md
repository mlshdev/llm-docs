> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreai/inferencefunction/mutableviews

# InferenceFunction.MutableViews

**Framework:** Core AI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A collection of `InferenceValue.MutableView`s which can be updated in-place by an `InferenceFunction`.

## Declaration

```swift
struct MutableViews
```

## Topics

### Creating a collection

- [init()](mutableviews/init%28%29.md): Initialize an empty instance.

### Adding views

- [insert(\_:for:)](mutableviews/insert%28__for_%29-1b2yx.md): Insert a new value to the output views.
- [insert(\_:for:)](mutableviews/insert%28__for_%29-8ossp.md): Insert the mutable view to be used as the ndArray value named `name`.
- [insert(\_:for:)](mutableviews/insert%28__for_%29-9ixpc.md): Insert the mutable view for the value named `name`.

## See Also

### Supporting types

- [InferenceFunction.Inputs](inputs.md): A collection of named input values for an inference function.
- [InferenceFunction.Outputs](outputs.md): The output values produced by running an inference function.
