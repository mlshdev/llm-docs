> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mloptimizationhints-c.class/specializationstrategy](https://developer.apple.com/documentation/coreml/mloptimizationhints-c.class/specializationstrategy)

# specializationStrategy

**Interface language:** Objective-C

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Optimization strategy for the model specialization.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) MLSpecializationStrategy specializationStrategy;
```

<a id="discussion"></a>

## Discussion

Core ML segments the model’s compute graph and optimizes each segment for the target compute device. This process can affect the model loading time and the prediction latency.

Use this option to tailor the specialization strategy for your application.
