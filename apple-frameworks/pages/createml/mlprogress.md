> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlprogress](https://developer.apple.com/documentation/createml/mlprogress)

# MLProgress

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A convenience type that exposes information about the progress of a training session.

## Declaration

```swift
struct MLProgress
```

<a id="overview"></a>

## Overview

Create ML uses this type to exposes specific values within a *Progress* instance as properties.

## Topics

### Creating a training progress update

- [init(phase:)](mlprogress/init%28phase_%29.md): Creates a training session progress instance from a training phase.
- [init(progress:)](mlprogress/init%28progress_%29.md): Creates a training session progress instance from a foundation progress object.

### Inspecting a session’s progress

- [elapsedTime](mlprogress/elapsedtime.md): The time, in seconds, since the training session started.
- [phase](mlprogress/phase.md): The current phase of the training session.
- [itemCount](mlprogress/itemcount.md): The current number of files processed during a feature extraction phase, or the completed iterations during a training phase.
- [totalItemCount](mlprogress/totalitemcount.md): The total number of files during a feature extraction phase, or total iterations during a training phase.
- [metrics](mlprogress/metrics.md): Measurements of the model’s performance during the training or evaluation phases of a training session.
- [MLProgress.Metric](mlprogress/metric.md): Metrics you use to evaluate a model’s performance during a training session.

### Accessing general information

- [elapsedTimeKey](mlprogress/elapsedtimekey.md): The key that accesses the elapsed time value.
- [phaseKey](mlprogress/phasekey.md): The key that accesses the current phase value.
- [itemCountKey](mlprogress/itemcountkey.md): The key that accesses the current item count value.
- [totalItemCountKey](mlprogress/totalitemcountkey.md): The key that accesses the total item count value.

### Accessing assessment metrics

- [accuracyKey](mlprogress/accuracykey.md): The key that accesses the training accuracy value.
- [lossKey](mlprogress/losskey.md): The key that accesses the training loss value.
- [validationAccuracyKey](mlprogress/validationaccuracykey.md): The key that accesses the validation accuracy value.
- [validationLossKey](mlprogress/validationlosskey.md): The key that accesses the validation loss value.

### Accessing style transfer metrics

- [contentLossKey](mlprogress/contentlosskey.md): The key that accesses the content image loss value.
- [styleLossKey](mlprogress/stylelosskey.md): The key that accesses the style image loss value.
- [stylizedImageKey](mlprogress/stylizedimagekey.md): The key that accesses the stylized image value.

### Accessing error information

- [maximumErrorKey](mlprogress/maximumerrorkey.md): They key that accesses the maximum error value.
- [rootMeanSquaredErrorKey](mlprogress/rootmeansquarederrorkey.md): They key that accesses the root-mean-squared error value.
- [validationMaximumErrorKey](mlprogress/validationmaximumerrorkey.md): They key that accesses the validation maximum error value.
- [validationRootMeanSquaredErrorKey](mlprogress/validationrootmeansquarederrorkey.md): They key that accesses the validation root-mean-squared error value.

### Encoding and decoding a session’s progress

- [encode(to:)](mlprogress/encode%28to_%29.md): Encodes the progress value into the given encoder.
- [init(from:)](mlprogress/init%28from_%29.md): Creates a progress instance by decoding from the given decoder.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)

## See Also

### Inspecting a job

- [startDate](mljob/startdate.md): The date and time when the training session began.
- [progress](mljob/progress.md): The training session’s current progress.
