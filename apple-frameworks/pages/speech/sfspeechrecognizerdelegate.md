> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognizerdelegate](https://developer.apple.com/documentation/speech/sfspeechrecognizerdelegate)

# SFSpeechRecognizerDelegate (Swift)

**Framework:** Speech  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

A protocol that you adopt in your objects to track the availability of a speech recognizer.

## Declaration

```swift
protocol SFSpeechRecognizerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

A speech recognizer’s availability can change due to the device’s Internet connection or other factors. Use this protocol’s optional method to track those changes and provide an appropriate response. For example, when speech recognition becomes unavailable, you might disable related features in your app.

## Topics

### Monitoring speech recognizer availability

- [speechRecognizer(\_:availabilityDidChange:)](sfspeechrecognizerdelegate/speechrecognizer%28__availabilitydidchange_%29.md): Tells the delegate that the availability of its associated speech recognizer changed.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Essentials

- [Asking Permission to Use Speech Recognition](asking-permission-to-use-speech-recognition.md): Ask the user’s permission to perform speech recognition using Apple’s servers.
- [SFSpeechRecognizer](sfspeechrecognizer.md): An object you use to check for the availability of the speech recognition service, and to initiate the speech recognition process.
- [SFSpeechRecognitionTaskHint](sfspeechrecognitiontaskhint.md): The type of task for which you are using speech recognition.
- [SFSpeechRecognizerAuthorizationStatus](sfspeechrecognizerauthorizationstatus.md): The app’s authorization to perform speech recognition.

# SFSpeechRecognizerDelegate (Objective-C)

**Framework:** Speech  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

A protocol that you adopt in your objects to track the availability of a speech recognizer.

## Declaration

```objectivec
@protocol SFSpeechRecognizerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

A speech recognizer’s availability can change due to the device’s Internet connection or other factors. Use this protocol’s optional method to track those changes and provide an appropriate response. For example, when speech recognition becomes unavailable, you might disable related features in your app.

## Topics

### Monitoring speech recognizer availability

- [speechRecognizer:availabilityDidChange:](sfspeechrecognizerdelegate/speechrecognizer%28__availabilitydidchange_%29.md): Tells the delegate that the availability of its associated speech recognizer changed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Essentials

- [Asking Permission to Use Speech Recognition](asking-permission-to-use-speech-recognition.md): Ask the user’s permission to perform speech recognition using Apple’s servers.
- [SFSpeechRecognizer](sfspeechrecognizer.md): An object you use to check for the availability of the speech recognition service, and to initiate the speech recognition process.
- [SFSpeechRecognitionTaskHint](sfspeechrecognitiontaskhint.md): The type of task for which you are using speech recognition.
- [SFSpeechRecognizerAuthorizationStatus](sfspeechrecognizerauthorizationstatus.md): The app’s authorization to perform speech recognition.
