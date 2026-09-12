> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognizerdelegate/speechrecognizer(_:availabilitydidchange:)](https://developer.apple.com/documentation/speech/sfspeechrecognizerdelegate/speechrecognizer(_:availabilitydidchange:))

# speechRecognizer(\_:availabilityDidChange:) (Swift)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Tells the delegate that the availability of its associated speech recognizer changed.

## Declaration

```swift
optional func speechRecognizer(_ speechRecognizer: SFSpeechRecognizer, availabilityDidChange available: Bool)
```

## Parameters

- `speechRecognizer`: The [SFSpeechRecognizer](../sfspeechrecognizer.md) object whose availability changed.
- `available`: A Boolean value that indicates the new availability of the speech recognizer.

# speechRecognizer:availabilityDidChange: (Objective-C)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Tells the delegate that the availability of its associated speech recognizer changed.

## Declaration

```objectivec
- (void) speechRecognizer:(SFSpeechRecognizer *) speechRecognizer availabilityDidChange:(BOOL) available;
```

## Parameters

- `speechRecognizer`: The [SFSpeechRecognizer](../sfspeechrecognizer.md) object whose availability changed.
- `available`: A Boolean value that indicates the new availability of the speech recognizer.
