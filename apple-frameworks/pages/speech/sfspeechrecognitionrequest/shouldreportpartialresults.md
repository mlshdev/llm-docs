> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognitionrequest/shouldreportpartialresults](https://developer.apple.com/documentation/speech/sfspeechrecognitionrequest/shouldreportpartialresults)

# shouldReportPartialResults (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

A Boolean value that indicates whether you want intermediate results returned for each utterance.

## Declaration

```swift
var shouldReportPartialResults: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The default value of this property is `true`. If you want only final results (and you don’t care about intermediate results), set this property to `false` to prevent the system from doing extra work.

## See Also

### Configuring a recognition request

- [requiresOnDeviceRecognition](requiresondevicerecognition.md): A Boolean value that determines whether a request must keep its audio data on the device.
- [contextualStrings](contextualstrings.md): An array of phrases that should be recognized, even if they are not in the system vocabulary.

# shouldReportPartialResults (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

A Boolean value that indicates whether you want intermediate results returned for each utterance.

## Declaration

```objectivec
@property (nonatomic) BOOL shouldReportPartialResults;
```

<a id="discussion"></a>

## Discussion

The default value of this property is `true`. If you want only final results (and you don’t care about intermediate results), set this property to `false` to prevent the system from doing extra work.

## See Also

### Configuring a recognition request

- [requiresOnDeviceRecognition](requiresondevicerecognition.md): A Boolean value that determines whether a request must keep its audio data on the device.
- [contextualStrings](contextualstrings.md): An array of phrases that should be recognized, even if they are not in the system vocabulary.
