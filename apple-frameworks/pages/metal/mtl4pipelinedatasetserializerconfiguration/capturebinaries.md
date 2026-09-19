> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtl4pipelinedatasetserializerconfiguration/capturebinaries

# captureBinaries (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Enables serializing pipeline binary functions.

## Declaration

```swift
static var captureBinaries: MTL4PipelineDataSetSerializerConfiguration { get }
```

<a id="discussion"></a>

## Discussion

Set this mask to use `MTL4PipelineDataSetSerializer.serializeAsArchiveAndFlush(toURL:error:)`.

# MTL4PipelineDataSetSerializerConfigurationCaptureBinaries (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Enables serializing pipeline binary functions.

## Declaration

```objectivec
MTL4PipelineDataSetSerializerConfigurationCaptureBinaries
```

<a id="discussion"></a>

## Discussion

Set this mask to use `MTL4PipelineDataSetSerializer.serializeAsArchiveAndFlush(toURL:error:)`.
