> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4compiler/pipelinedatasetserializer](https://developer.apple.com/documentation/metal/mtl4compiler/pipelinedatasetserializer)

# pipelineDataSetSerializer (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Returns the pipeline data set serializer into which this compiler stores data for all pipelines it creates.

## Declaration

```swift
var pipelineDataSetSerializer: (any MTL4PipelineDataSetSerializer)? { get }
```

# pipelineDataSetSerializer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Returns the pipeline data set serializer into which this compiler stores data for all pipelines it creates.

## Declaration

```objectivec
@property (strong, readonly, nullable) id<MTL4PipelineDataSetSerializer> pipelineDataSetSerializer;
```
