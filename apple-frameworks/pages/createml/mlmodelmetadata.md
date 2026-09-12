> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlmodelmetadata](https://developer.apple.com/documentation/createml/mlmodelmetadata)

# MLModelMetadata

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Information about a model that’s stored in a Core ML model file.

## Declaration

```swift
struct MLModelMetadata
```

## Mentioned In

- [Creating a text classifier model](creating-a-text-classifier-model.md)
- [Creating a word tagger model](creating-a-word-tagger-model.md)

<a id="overview"></a>

## Overview

Create a metadata instance and store it as part of your model when you export a Core ML model. You can examine this metadata in Xcode when you import the model into your app.

## Topics

### Creating metadata

- [init(author:shortDescription:license:version:additional:)](mlmodelmetadata/init%28author_shortdescription_license_version_additional_%29.md): Creates a new metadata instance for a machine learning model.

### Accessing metadata

- [author](mlmodelmetadata/author.md): The author of the model.
- [shortDescription](mlmodelmetadata/shortdescription.md): A short text description of the model.
- [license](mlmodelmetadata/license.md): The license governing the use of the model.
- [version](mlmodelmetadata/version.md): The model version.
- [additional](mlmodelmetadata/additional.md): A dictionary that encodes key value pairs to hold additional information about the model.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [MLCreateError](mlcreateerror.md): The errors Create ML throws while performing various operations, such as training models, making predictions, writing models to a file system, and so on.
- [MLSplitStrategy](mlsplitstrategy.md): Data partitioning approaches, typically for creating a validation dataset from a training dataset.
