> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtl4pipelinedatasetserializerdescriptor/configuration

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

When this configuration contains [captureDescriptors](../mtl4pipelinedatasetserializerconfiguration/capturedescriptors.md), use [serializeAsPipelinesScript()](../mtl4pipelinedatasetserializer/serializeaspipelinesscript%28%29.md) to serialize pipeline scripts.

If this option contains [captureBinaries](../mtl4pipelinedatasetserializerconfiguration/capturebinaries.md), the serializer can additionally serialize to a binary archive by calling [serializeAsArchiveAndFlush(url:)](../mtl4pipelinedatasetserializer/serializeasarchiveandflush%28url_%29.md).

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

When this configuration contains [MTL4PipelineDataSetSerializerConfigurationCaptureDescriptors](../mtl4pipelinedatasetserializerconfiguration/capturedescriptors.md), use [serializeAsPipelinesScriptWithError:](../mtl4pipelinedatasetserializer/serializeaspipelinesscript%28%29.md) to serialize pipeline scripts.

If this option contains [MTL4PipelineDataSetSerializerConfigurationCaptureBinaries](../mtl4pipelinedatasetserializerconfiguration/capturebinaries.md), the serializer can additionally serialize to a binary archive by calling [serializeAsArchiveAndFlushToURL:error:](../mtl4pipelinedatasetserializer/serializeasarchiveandflush%28url_%29.md).
