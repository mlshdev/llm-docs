> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlsoundclassifier/init(trainingdata:parameters:)](https://developer.apple.com/documentation/createml/mlsoundclassifier/init(trainingdata:parameters:))

# init(trainingData:parameters:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · visionOS 1.0+

Creates a sound classifier with a training dataset represented by a data source.

## Declaration

```swift
init(trainingData: MLSoundClassifier.DataSource, parameters: MLSoundClassifier.ModelParameters = ModelParameters()) throws
```

## Parameters

- `trainingData`: An [MLSoundClassifier.DataSource](datasource.md) instance that contains a collection of labeled audio files.
- `parameters`: An [MLSoundClassifier.ModelParameters](modelparameters-swift.struct.md) instance you use to configure the model for the training session.

<a id="discussion"></a>

## Discussion

Use this initializer to train a sound classifier with an [MLSoundClassifier.DataSource](datasource.md). For example, you can organize your audio files into labeled directories. See [MLSoundClassifier.DataSource.labeledDirectories(at:)](datasource/labeleddirectories%28at_%29.md).

```swift
// Get the Documents directory URL.
guard let documentsURL = FileManager.default.urls(for: .documentDirectory,
                                                  in: .userDomainMask).first else {
    fatalError("Can't find Documents directory.")
}

// Build a URL to the ~/Documents/Sounds directory, which contains the training data.
let soundsURL = documentsURL.appendingPathComponent("Sounds")

// The Sounds directory contains subdirectories, one for each class of sound.
// Each subdirectory's name is the label for audio files it contains.
//
// Sounds
// -- Laughter
// -- Recording1.wav
// -- Recording4.wav
// -- ...
// -- Applause
// -- Recording2.wav
// -- Recording5.wav
// -- ...

// Create a data source from the Sounds directory.
let trainingData = MLSoundClassifier.DataSource.labeledDirectories(at: soundsURL)

// Train a sound classifier with the data source.
let soundClassifier = try MLSoundClassifier(trainingData: trainingData)
```
