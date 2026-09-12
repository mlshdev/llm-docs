> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlupdateprogressevent/trainingbegin](https://developer.apple.com/documentation/coreml/mlupdateprogressevent/trainingbegin)

# trainingBegin (Swift)

**Framework:** Core ML  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

An event that represents the start of training.

## Declaration

```swift
static var trainingBegin: MLUpdateProgressEvent { get }
```

## See Also

### Getting progress event types

- [miniBatchEnd](minibatchend.md): An event that represents the end of a mini-batch within a training epoch.
- [epochEnd](epochend.md): An event that represents the end of training epoch.

# MLUpdateProgressEventTrainingBegin (Objective-C)

**Framework:** Core ML  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An event that represents the start of training.

## Declaration

```objectivec
MLUpdateProgressEventTrainingBegin
```

## See Also

### Getting progress event types

- [MLUpdateProgressEventMiniBatchEnd](minibatchend.md): An event that represents the end of a mini-batch within a training epoch.
- [MLUpdateProgressEventEpochEnd](epochend.md): An event that represents the end of training epoch.
