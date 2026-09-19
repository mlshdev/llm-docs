> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mltextclassifier/datasource/labeleddirectories(at:)

# MLTextClassifier.DataSource.labeledDirectories(at:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · visionOS 1.0+

A root directory of labeled directories for your data set.

## Declaration

```swift
case labeledDirectories(at: URL)
```

<a id="discussion"></a>

## Discussion

Labeled directories can be used to organize textual inputs. Just like the data source used with the image classifier, place the collected text inputs of the same kind in a directory. Name that directory with the label appropriate for the textual inputs.
