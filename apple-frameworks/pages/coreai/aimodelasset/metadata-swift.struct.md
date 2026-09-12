> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/aimodelasset/metadata-swift.struct](https://developer.apple.com/documentation/coreai/aimodelasset/metadata-swift.struct)

# AIModelAsset.Metadata

**Framework:** Core AI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The metadata for a model asset, including author, license, and custom key-value pairs.

## Declaration

```swift
struct Metadata
```

<a id="overview"></a>

## Overview

Access metadata through the [metadata](metadata-swift.property.md) property. To modify metadata, use [updateMetadata(\_:)](updatemetadata%28__%29.md), which writes changes back to disk.

In addition to the standard properties like [author](metadata-swift.struct/author.md) and [license](metadata-swift.struct/license.md), you can store custom key-value pairs using subscript syntax:

```swift
var asset = try AIModelAsset(contentsOf: modelURL)
try asset.updateMetadata { metadata in
  metadata.author = "Alice"
  metadata["iterations"] = 1000
  metadata["accuracy"] = 0.95
}
```

## Topics

### Creating metadata

- [init()](metadata-swift.struct/init%28%29.md): Creates metadata with no values set.

### Reading model information

- [description](metadata-swift.struct/description.md): A human-readable description of the model.
- [author](metadata-swift.struct/author.md): The name of the model’s author.
- [license](metadata-swift.struct/license.md): The license text for the model.
- [creationDate](metadata-swift.struct/creationdate.md): The model’s creation date.

### Accessing creator-defined metadata

- [creatorDefinedMetadata](metadata-swift.struct/creatordefinedmetadata.md): The custom key-value pairs defined by the model’s creator.
- [subscript(\_:\_:)](metadata-swift.struct/subscript%28____%29-44ov4.md): Accesses a custom metadata string value for the specified key.
- [subscript(\_:\_:)](metadata-swift.struct/subscript%28____%29-50v52.md): Accesses a custom metadata Boolean value for the specified key.
- [subscript(\_:\_:)](metadata-swift.struct/subscript%28____%29-5o1kb.md): Accesses a custom metadata array value for the specified key.
- [subscript(\_:\_:)](metadata-swift.struct/subscript%28____%29-5se5j.md): Accesses a custom metadata dictionary value for the specified key.
- [subscript(\_:\_:)](metadata-swift.struct/subscript%28____%29-6bxrd.md): Accesses a custom metadata number value for the specified key.
- [subscript(\_:\_:)](metadata-swift.struct/subscript%28____%29-9hpy0.md): Accesses a custom metadata integer value for the specified key.

### Defining value types

- [AIModelAsset.Metadata.CreatorDefinedValue](metadata-swift.struct/creatordefinedvalue.md): A custom metadata value.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [AIModelAsset.FunctionDescriptor](functiondescriptor.md): A description of a function in the model’s program.
- [AIModelAsset.Summary](summary.md): A summary of a model’s structure and statistics.
- [AIModelAsset.ValueDescriptor](valuedescriptor.md): A description of a function’s input or output value.
