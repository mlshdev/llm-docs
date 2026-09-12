> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4compilerdescriptor/pipelinedatasetserializer](https://developer.apple.com/documentation/metal/mtl4compilerdescriptor/pipelinedatasetserializer)

# pipelineDataSetSerializer (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assigns a pipeline data set serializer into which this compiler stores data for all pipelines it creates.

## Declaration

```swift
var pipelineDataSetSerializer: (any MTL4PipelineDataSetSerializer)? { get set }
```

# pipelineDataSetSerializer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assigns a pipeline data set serializer into which this compiler stores data for all pipelines it creates.

## Declaration

```objectivec
@property (strong, nullable) id<MTL4PipelineDataSetSerializer> pipelineDataSetSerializer;
```
