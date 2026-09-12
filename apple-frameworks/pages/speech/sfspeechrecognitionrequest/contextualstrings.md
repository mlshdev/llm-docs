> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognitionrequest/contextualstrings](https://developer.apple.com/documentation/speech/sfspeechrecognitionrequest/contextualstrings)

# contextualStrings (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

An array of phrases that should be recognized, even if they are not in the system vocabulary.

## Declaration

```swift
var contextualStrings: [String] { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to specify short custom phrases that are unique to your app. You might include phrases with the names of characters, products, or places that are specific to your app. You might also include domain-specific terminology or unusual or made-up words. Assigning custom phrases to this property improves the likelihood of those phrases being recognized.

Keep phrases relatively brief, limiting them to one or two words whenever possible. Lengthy phrases are less likely to be recognized. In addition, try to limit each phrase to something the user can say without pausing.

Limit the total number of phrases to no more than 100.

## See Also

### Configuring a recognition request

- [requiresOnDeviceRecognition](requiresondevicerecognition.md): A Boolean value that determines whether a request must keep its audio data on the device.
- [shouldReportPartialResults](shouldreportpartialresults.md): A Boolean value that indicates whether you want intermediate results returned for each utterance.

# contextualStrings (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

An array of phrases that should be recognized, even if they are not in the system vocabulary.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSString *> * contextualStrings;
```

<a id="discussion"></a>

## Discussion

Use this property to specify short custom phrases that are unique to your app. You might include phrases with the names of characters, products, or places that are specific to your app. You might also include domain-specific terminology or unusual or made-up words. Assigning custom phrases to this property improves the likelihood of those phrases being recognized.

Keep phrases relatively brief, limiting them to one or two words whenever possible. Lengthy phrases are less likely to be recognized. In addition, try to limit each phrase to something the user can say without pausing.

Limit the total number of phrases to no more than 100.

## See Also

### Configuring a recognition request

- [requiresOnDeviceRecognition](requiresondevicerecognition.md): A Boolean value that determines whether a request must keep its audio data on the device.
- [shouldReportPartialResults](shouldreportpartialresults.md): A Boolean value that indicates whether you want intermediate results returned for each utterance.
