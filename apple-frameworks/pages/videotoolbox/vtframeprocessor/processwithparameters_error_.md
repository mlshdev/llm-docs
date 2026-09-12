> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframeprocessor/processwithparameters:error:](https://developer.apple.com/documentation/videotoolbox/vtframeprocessor/processwithparameters:error:)

# processWithParameters:error:

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

Synchronously performs the configured video effect.

## Declaration

```objectivec
- (BOOL) processWithParameters:(id<VTFrameProcessorParameters>) parameters error:(NSError **) error;
```

## Parameters

- `parameters`: Frame processing parameters to specify additional frame based parameters to be used during processing. The parameters need to match the configuration type used during start session.

<a id="discussion"></a>

## Discussion

Frame level settings and frame level input/output parameters are passed by using the respective [VTFrameProcessorParameters](../vtframeprocessorparameters.md) for the effect that the frame processor is configured for.
