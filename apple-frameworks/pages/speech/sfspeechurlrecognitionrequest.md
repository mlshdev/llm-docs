> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechurlrecognitionrequest](https://developer.apple.com/documentation/speech/sfspeechurlrecognitionrequest)

# SFSpeechURLRecognitionRequest (Swift)

**Framework:** Speech  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

A request to recognize speech in a recorded audio file.

## Declaration

```swift
class SFSpeechURLRecognitionRequest
```

<a id="overview"></a>

## Overview

Use this object to perform speech recognition on the contents of an audio file.

The following example shows a method that performs recognition on an audio file based on the user’s default language and prints out the transcription.

Listing 1. Getting a speech recognizer and making a recognition request

```swift
func recognizeFile(url: URL) {
    // Create a speech recognizer associated with the user's default language.
    guard let myRecognizer = SFSpeechRecognizer() else {
        // The system doesn't support the user's default language.
        return
    }
    
    guard myRecognizer.isAvailable else {
        // The recognizer isn't available.
        return
    }
    
    // Create and execute a speech recognition request for the audio file at the URL.
    let request = SFSpeechURLRecognitionRequest(url: url)
    myRecognizer.recognitionTask(with: request) { (result, error) in
        guard let result else {
            // Recognition failed, so check the error for details and handle it.
            return
        }
        
        // Print the speech transcription with the highest confidence that the
        // system recognized.
        if result.isFinal {
            print(result.bestTranscription.formattedString)
        }
    }
}
```

## Topics

### Creating a speech recognition request

- [init(url:)](sfspeechurlrecognitionrequest/init%28url_%29-3ymmz.md): Creates a speech recognition request, initialized with the specified URL.

### Accessing the audio file URL

- [url](sfspeechurlrecognitionrequest/url.md): The URL of the audio file.

### Initializers

- [init(URL:)](sfspeechurlrecognitionrequest/init%28url_%29-xca9.md)

## Relationships

### Inherits From

- [SFSpeechRecognitionRequest](sfspeechrecognitionrequest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Audio sources

- [SFSpeechAudioBufferRecognitionRequest](sfspeechaudiobufferrecognitionrequest.md): A request to recognize speech from captured audio content, such as audio from the device’s microphone.
- [SFSpeechRecognitionRequest](sfspeechrecognitionrequest.md): An abstract class that represents a request to recognize speech from an audio source.

# SFSpeechURLRecognitionRequest (Objective-C)

**Framework:** Speech  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

A request to recognize speech in a recorded audio file.

## Declaration

```objectivec
@interface SFSpeechURLRecognitionRequest : SFSpeechRecognitionRequest
```

<a id="overview"></a>

## Overview

Use this object to perform speech recognition on the contents of an audio file.

The following example shows a method that performs recognition on an audio file based on the user’s default language and prints out the transcription.

Listing 1. Getting a speech recognizer and making a recognition request

```swift
func recognizeFile(url: URL) {
    // Create a speech recognizer associated with the user's default language.
    guard let myRecognizer = SFSpeechRecognizer() else {
        // The system doesn't support the user's default language.
        return
    }
    
    guard myRecognizer.isAvailable else {
        // The recognizer isn't available.
        return
    }
    
    // Create and execute a speech recognition request for the audio file at the URL.
    let request = SFSpeechURLRecognitionRequest(url: url)
    myRecognizer.recognitionTask(with: request) { (result, error) in
        guard let result else {
            // Recognition failed, so check the error for details and handle it.
            return
        }
        
        // Print the speech transcription with the highest confidence that the
        // system recognized.
        if result.isFinal {
            print(result.bestTranscription.formattedString)
        }
    }
}
```

## Topics

### Creating a speech recognition request

- [initWithURL:](sfspeechurlrecognitionrequest/init%28url_%29-3ymmz.md): Creates a speech recognition request, initialized with the specified URL.

### Accessing the audio file URL

- [URL](sfspeechurlrecognitionrequest/url.md): The URL of the audio file.

## Relationships

### Inherits From

- [SFSpeechRecognitionRequest](sfspeechrecognitionrequest.md)

## See Also

### Audio sources

- [SFSpeechAudioBufferRecognitionRequest](sfspeechaudiobufferrecognitionrequest.md): A request to recognize speech from captured audio content, such as audio from the device’s microphone.
- [SFSpeechRecognitionRequest](sfspeechrecognitionrequest.md): An abstract class that represents a request to recognize speech from an audio source.
