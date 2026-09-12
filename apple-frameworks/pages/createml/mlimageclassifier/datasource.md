> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlimageclassifier/datasource](https://developer.apple.com/documentation/createml/mlimageclassifier/datasource)

# MLImageClassifier.DataSource

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · visionOS 1.0+

A data source for an image classifier.

## Declaration

```swift
enum DataSource
```

## Mentioned In

- [Creating an Image Classifier Model](../creating-an-image-classifier-model.md)

<a id="overview"></a>

## Overview

Use a data source to provide training or testing data to an image classifier.

To train a model programmatically with an [MLImageClassifier](../mlimageclassifier.md) instance, initialize a data source with the URL of the directory that contains the data. Use either [MLImageClassifier.DataSource.labeledDirectories(at:)](datasource/labeleddirectories%28at_%29.md) or [MLImageClassifier.DataSource.labeledFiles(at:)](datasource/labeledfiles%28at_%29.md) to do this, depending on whether your images are grouped by directory or by file name. See the respective creation methods for details about how to arrange your image files in each case.

When you train a model using `MLImageClassifierBuilder`, you don’t initialize a data source directly. Instead, you drag the directory containing your data from a Finder window into the live view. The builder automatically chooses the correct kind of data source based on how your images are arranged inside that directory, looking for either labeled directories or labeled files.

## Topics

### Creating a data source

- [MLImageClassifier.DataSource.labeledDirectories(at:)](datasource/labeleddirectories%28at_%29.md): An image classifier data source that uses the directory structure to label images.
- [MLImageClassifier.DataSource.labeledFiles(at:)](datasource/labeledfiles%28at_%29.md): An image classifier data source that uses file names to label images.

### Retrieving the data

- [labeledImages()](datasource/labeledimages%28%29.md): Returns the labeled images represented by the data source.
- [MLImageClassifier.DataSource.filesByLabel(\_:)](datasource/filesbylabel%28__%29.md): Dictionary of labels to file URLs.

### Splitting the data

- [stratifiedSplit(proportions:seed:)](datasource/stratifiedsplit%28proportions_seed_%29.md): Generates an array of labeled image dictionaries by splitting the data source into strata.
- [stratifiedSplit(proportions:generator:)](datasource/stratifiedsplit%28proportions_generator_%29.md): Generates an array of labeled image dictionaries by splitting the data source into strata using the random-number generator.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [MLImageClassifier.ModelParameters](modelparameters-swift.struct.md): Parameters that affect the process of training an image classifier model.
- [MLImageClassifier.FeatureExtractorType](featureextractortype.md): The underlying base model that extracts image features for image classifier training session.
- [MLImageClassifier.CustomFeatureExtractor](customfeatureextractor.md): A custom feature extractor a training session uses to train an image classifier.
- [MLImageClassifier.ImageAugmentationOptions](imageaugmentationoptions.md): The variations that the training process can use to generate more training data from the training data you provide.
