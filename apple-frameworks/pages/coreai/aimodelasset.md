> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/aimodelasset](https://developer.apple.com/documentation/coreai/aimodelasset)

# AIModelAsset

**Framework:** Core AI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An unspecialized source model asset.

## Declaration

```swift
struct AIModelAsset
```

<a id="overview"></a>

## Overview

Use a model asset to inspect a model’s structure and metadata without specializing it for a specific device. This lets you query model information without performing specialization, which is an expensive operation. You create a model asset by providing the URL of an `.aimodel` bundle on disk:

```swift
let asset = try AIModelAsset(contentsOf: modelURL)
guard let summary = try asset.summary(includingStatistics: true) else { return }
```

Unlike [AIModel](aimodel.md), a model asset can’t perform inference. Instead, use it to query model information such as function signatures, input and output descriptions, compute and storage types, and author-provided metadata.

## Topics

### Loading an asset

- [init(contentsOf:)](aimodelasset/init%28contentsof_%29.md): Creates a model asset from the contents of the specified URL.
- [isValid(at:)](aimodelasset/isvalid%28at_%29.md): Returns a Boolean value that indicates whether the URL contains a valid model asset.

### Inspecting an asset

- [metadata](aimodelasset/metadata-swift.property.md): The author-provided metadata for the model asset.
- [summary(includingStatistics:)](aimodelasset/summary%28includingstatistics_%29.md): Returns the model summary.
- [url](aimodelasset/url.md): The file URL of the model asset bundle on disk.

### Modifying an asset

- [updateMetadata(\_:)](aimodelasset/updatemetadata%28__%29.md): Updates the asset metadata.
- [removeDerivedArtifacts()](aimodelasset/removederivedartifacts%28%29.md): Removes all derived artifacts for the model’s program.

### Supporting types

- [AIModelAsset.FunctionDescriptor](aimodelasset/functiondescriptor.md): A description of a function in the model’s program.
- [AIModelAsset.Metadata](aimodelasset/metadata-swift.struct.md): The metadata for a model asset, including author, license, and custom key-value pairs.
- [AIModelAsset.Summary](aimodelasset/summary.md): A summary of a model’s structure and statistics.
- [AIModelAsset.ValueDescriptor](aimodelasset/valuedescriptor.md): A description of a function’s input or output value.

## See Also

### Essentials

- [Integrating on-device AI models in your app with Core AI](integrating-on-device-ai-models-in-your-app-with-core-ai.md): Power your app’s intelligent features with an on-device AI model.
- [AIModel](aimodel.md): A specialized model for running inference on a device.
