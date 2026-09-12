> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlstages/dispatch](https://developer.apple.com/documentation/metal/mtlstages/dispatch)

# dispatch (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Represents all compute dispatches in a compute pass.

## Declaration

```swift
static var dispatch: MTLStages { get }
```

## Mentioned In

- [Synchronizing passes with a fence](../synchronizing-passes-with-a-fence.md)
- [Synchronizing passes with consumer barriers](../synchronizing-passes-with-consumer-barriers.md)
- [Synchronizing passes with producer barriers](../synchronizing-passes-with-producer-barriers.md)
- [Synchronizing stages within a pass](../synchronizing-stages-within-a-pass.md)

## See Also

### Compute pass stages

- [blit](blit.md): Represents all blit operations in a pass.
- [accelerationStructure](accelerationstructure.md): Represents all acceleration structure operations.
- [machineLearning](machinelearning.md): Represents all machine learning network dispatch operations.

# MTLStageDispatch (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Represents all compute dispatches in a compute pass.

## Declaration

```objectivec
MTLStageDispatch
```

## Mentioned In

- [Synchronizing passes with a fence](../synchronizing-passes-with-a-fence.md)
- [Synchronizing passes with consumer barriers](../synchronizing-passes-with-consumer-barriers.md)
- [Synchronizing passes with producer barriers](../synchronizing-passes-with-producer-barriers.md)
- [Synchronizing stages within a pass](../synchronizing-stages-within-a-pass.md)

## See Also

### Compute pass stages

- [MTLStageBlit](blit.md): Represents all blit operations in a pass.
- [MTLStageAccelerationStructure](accelerationstructure.md): Represents all acceleration structure operations.
- [MTLStageMachineLearning](machinelearning.md): Represents all machine learning network dispatch operations.
