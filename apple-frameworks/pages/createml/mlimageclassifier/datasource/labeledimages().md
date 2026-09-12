> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlimageclassifier/datasource/labeledimages()](https://developer.apple.com/documentation/createml/mlimageclassifier/datasource/labeledimages())

# labeledImages()

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · visionOS 1.0+

Returns the labeled images represented by the data source.

## Declaration

```swift
func labeledImages() throws -> [String : [URL]]
```

<a id="return-value"></a>

## Return Value

The labeled images that the data source represents, as a dictionary. The dictionary keys are the labels, while the dictionary values are arrays of images, represented as URLs, that correspond to the label.

## See Also

### Retrieving the data

- [MLImageClassifier.DataSource.filesByLabel(\_:)](filesbylabel%28__%29.md): Dictionary of labels to file URLs.
