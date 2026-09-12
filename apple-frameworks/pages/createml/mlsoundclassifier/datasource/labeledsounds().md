> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsoundclassifier/datasource/labeledsounds()](https://developer.apple.com/documentation/createml/mlsoundclassifier/datasource/labeledsounds())

# labeledSounds()

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · visionOS 1.0+

Generates a dictionary of the data source’s labeled audio files.

## Declaration

```swift
func labeledSounds() throws -> [String : [URL]]
```

<a id="return-value"></a>

## Return Value

A dictionary of labeled audio files. Each dictionary key is a label string and its value is an array of audio-file URLs.
