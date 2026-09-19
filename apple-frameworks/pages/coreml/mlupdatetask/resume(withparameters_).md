> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreml/mlupdatetask/resume(withparameters:)

# resume(withParameters:) (Swift)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Resumes a model update with updated parameter values.

## Declaration

```swift
func resume(withParameters updateParameters: [MLParameterKey : Any])
```

## Parameters

- `updateParameters`: Model training parameter values to replace those currently set in the update task.

<a id="Discussion"></a>

## Discussion

Use this method to resume the model update task with newer parameter values. You use this method within the closures you provide in an [MLUpdateProgressHandlers](../mlupdateprogresshandlers.md) instance to resume the [MLUpdateTask](../mlupdatetask.md).

## See Also

### Starting and Resuming an Update

- [MLParameterKey](../mlparameterkey.md): The keys for the parameter dictionary in a model configuration or a model update context.

# resumeWithParameters: (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Resumes a model update with updated parameter values.

## Declaration

```objectivec
- (void) resumeWithParameters:(NSDictionary<MLParameterKey *,id> *) updateParameters;
```

## Parameters

- `updateParameters`: Model training parameter values to replace those currently set in the update task.

<a id="Discussion"></a>

## Discussion

Use this method to resume the model update task with newer parameter values. You use this method within the closures you provide in an [MLUpdateProgressHandlers](../mlupdateprogresshandlers.md) instance to resume the [MLUpdateTask](../mlupdatetask.md).

## See Also

### Starting and Resuming an Update

- [MLParameterKey](../mlparameterkey.md): The keys for the parameter dictionary in a model configuration or a model update context.
