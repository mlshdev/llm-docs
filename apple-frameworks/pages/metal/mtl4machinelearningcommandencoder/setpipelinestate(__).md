> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4machinelearningcommandencoder/setpipelinestate(_:)](https://developer.apple.com/documentation/metal/mtl4machinelearningcommandencoder/setpipelinestate(_:))

# setPipelineState(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the encoder with a machine learning pipeline state instance.

## Declaration

```swift
func setPipelineState(_ pipelineState: any MTL4MachineLearningPipelineState)
```

## Parameters

- `pipelineState`: A Machine Learning pipeline state instance.

<a id="discussion"></a>

## Discussion

The pipeline state instance affects all subsequent Machine Learning commands.

## See Also

### Configuring the pass

- [setArgumentTable(\_:)](setargumenttable%28__%29.md): Sets an argument table for the command encoder’s machine learning shader stage.

# setPipelineState: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the encoder with a machine learning pipeline state instance.

## Declaration

```objectivec
- (void) setPipelineState:(id<MTL4MachineLearningPipelineState>) pipelineState;
```

## Parameters

- `pipelineState`: A Machine Learning pipeline state instance.

<a id="discussion"></a>

## Discussion

The pipeline state instance affects all subsequent Machine Learning commands.

## See Also

### Configuring the pass

- [setArgumentTable:](setargumenttable%28__%29.md): Sets an argument table for the command encoder’s machine learning shader stage.
