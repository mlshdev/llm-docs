> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4pipelinedatasetserializerdescriptor/configuration](https://developer.apple.com/documentation/metal/mtl4pipelinedatasetserializerdescriptor/configuration)

# configuration (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Specifies the configuration of the serialization process.

## Declaration

```swift
var configuration: MTL4PipelineDataSetSerializerConfiguration { get set }
```

<a id="discussion"></a>

## Discussion

The configuration of the serialization process determines the mechanisms you use to serialize pipeline data sets.

When this configuration contains `MTL4PipelineDataSetSerializerConfigurationCaptureDescriptors`, use `serializeAsPipelinesScriptWithError:` to serialize pipeline scripts.

If this option contains `MTL4PipelineDataSetSerializerConfigurationCaptureBinaries`, the serializer can additionally serialize to a binary archive by calling `serializeAsArchiveAndFlushToURL:error::`.

# configuration (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Specifies the configuration of the serialization process.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTL4PipelineDataSetSerializerConfiguration configuration;
```

<a id="discussion"></a>

## Discussion

The configuration of the serialization process determines the mechanisms you use to serialize pipeline data sets.

When this configuration contains `MTL4PipelineDataSetSerializerConfigurationCaptureDescriptors`, use `serializeAsPipelinesScriptWithError:` to serialize pipeline scripts.

If this option contains `MTL4PipelineDataSetSerializerConfigurationCaptureBinaries`, the serializer can additionally serialize to a binary archive by calling `serializeAsArchiveAndFlushToURL:error::`.
