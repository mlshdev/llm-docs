> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlobjectdetector/datasource](https://developer.apple.com/documentation/createml/mlobjectdetector/datasource)

# MLObjectDetector.DataSource

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** macOS 10.15+

A data source for an object detector.

## Declaration

```swift
enum DataSource
```

<a id="overview"></a>

## Overview

You use a data source to specify the training dataset for an [MLObjectDetector](../mlobjectdetector.md) training session. An object-detector data source represents a set of images and an annotation for each object in an image.

Each object annotation consists of the object’s name, or *label*, and its location in the image. A single image can have multiple objects and, therefore, multiple annotations. For example, you can train an object detector with images of dining tables, along with annotations for bananas, croissants, and beverages. Each image can have one or more instances of an object, or any combination of objects.

## Topics

### Creating a data source

- [MLObjectDetector.DataSource.directoryWithImagesAndJsonAnnotation(at:)](datasource/directorywithimagesandjsonannotation%28at_%29.md): An object-detector data source you create by selecting a directory that contains image files and exactly one JSON annotation file.
- [MLObjectDetector.DataSource.directoryWithImages(at:annotationFile:)](datasource/directorywithimages%28at_annotationfile_%29.md): An object-detector data source you create by selecting the location of a directory of image files, and the location of a JSON annotation file.
- [MLObjectDetector.DataSource.table(\_:imageColumn:annotationColumn:)](datasource/table%28__imagecolumn_annotationcolumn_%29.md): Deprecated. An object-detector data source you create with a data table.

### Getting the annotated file names

- [gatherAnnotatedFileNames()](datasource/gatherannotatedfilenames%28%29.md): Processes the data source and returns a data frame that contains file URLs and annotations.

### Getting the data frame

- [MLObjectDetector.DataSource.frame(\_:imageColumn:annotationColumn:)](datasource/frame%28__imagecolumn_annotationcolumn_%29.md): Data specified by a `DataFrame` containing a column for image file paths and a column with annotations.

### Retrieving the data

- [imagesWithObjectAnnotations()](datasource/imageswithobjectannotations%28%29.md): Deprecated. Generates a data table where each row represents an image, and its columns are the image file URLs and its annotations.

### Splitting the data

- [stratifiedSplit(proportions:seed:annotationColumn:)](datasource/stratifiedsplit%28proportions_seed_annotationcolumn_%29.md): Deprecated. Generates a new data table by splitting the data source using the specified proportions.

## See Also

### Supporting types

- [MLObjectDetector.AnnotationType](annotationtype.md): The available types of image annotations.
- [MLObjectDetector.ModelParameters](modelparameters-swift.struct.md): Parameters that affect the process of training an object detection model.
