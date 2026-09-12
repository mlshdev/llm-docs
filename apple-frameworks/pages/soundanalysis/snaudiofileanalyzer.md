> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snaudiofileanalyzer](https://developer.apple.com/documentation/soundanalysis/snaudiofileanalyzer)

# SNAudioFileAnalyzer (Swift)

**Framework:** Sound Analysis  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An analyzer that runs sound classification requests on an audio file.

## Declaration

```swift
class SNAudioFileAnalyzer
```

## Mentioned In

- [Classifying Sounds in an Audio File](classifying-sounds-in-an-audio-file.md)
- [Classifying Sounds in an Audio Stream](classifying-sounds-in-an-audio-stream.md)

<a id="overview"></a>

## Overview

Run an [SNRequest](snrequest.md) on an audio file by creating an `SNAudioFileAnalyzer`. You can run the same sound analysis request on multiple file analyzers, and each analyzer can process multiple requests. An audio file analyzer generates an [SNResult](snresult.md) each time any of its active requests recognizes a sound.

## Topics

### Creating an Analyzer

- [init(url:)](snaudiofileanalyzer/init%28url_%29-336no.md): Creates a new audio file analyzer.

### Managing Requests

- [add(\_:withObserver:)](snaudiofileanalyzer/add%28__withobserver_%29.md): Adds a new analysis request to the audio file analyzer.
- [SNRequest](snrequest.md): A protocol that represents sound analysis requests.
- [SNResultsObserving](snresultsobserving.md): The interface your app implements to receive the results of an analysis request.
- [remove(\_:)](snaudiofileanalyzer/remove%28__%29.md): Removes an existing request from the audio file analyzer.
- [removeAllRequests()](snaudiofileanalyzer/removeallrequests%28%29.md): Removes all the sound analysis requests from the audio file analyzer.

### Analyzing Data

- [analyze()](snaudiofileanalyzer/analyze%28%29.md): Analyzes the audio file synchronously.
- [analyze(completionHandler:)](snaudiofileanalyzer/analyze%28completionhandler_%29.md): Analyzes the audio file asynchronously.
- [cancelAnalysis()](snaudiofileanalyzer/cancelanalysis%28%29.md): Cancels all the asynchronous sound analysis requests the analyzer is currently processing.

### Initializers

- [init(URL:)](snaudiofileanalyzer/init%28url_%29-2skhg.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Audio analyzers

- [Classifying Sounds in an Audio File](classifying-sounds-in-an-audio-file.md): Identify individual sounds in a file, such as a recording, with an audio file analyzer.
- [Classifying Sounds in an Audio Stream](classifying-sounds-in-an-audio-stream.md): Identify individual sounds in an audio data stream, such as from a microphone, with an audio stream analyzer.
- [SNAudioStreamAnalyzer](snaudiostreamanalyzer.md): An object you create to analyze a stream of audio data and provide the results to your app.

# SNAudioFileAnalyzer (Objective-C)

**Framework:** Sound Analysis  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An analyzer that runs sound classification requests on an audio file.

## Declaration

```objectivec
@interface SNAudioFileAnalyzer : NSObject
```

## Mentioned In

- [Classifying Sounds in an Audio File](classifying-sounds-in-an-audio-file.md)
- [Classifying Sounds in an Audio Stream](classifying-sounds-in-an-audio-stream.md)

<a id="overview"></a>

## Overview

Run an [SNRequest](snrequest.md) on an audio file by creating an `SNAudioFileAnalyzer`. You can run the same sound analysis request on multiple file analyzers, and each analyzer can process multiple requests. An audio file analyzer generates an [SNResult](snresult.md) each time any of its active requests recognizes a sound.

## Topics

### Creating an Analyzer

- [initWithURL:error:](snaudiofileanalyzer/init%28url_%29-336no.md): Creates a new audio file analyzer.

### Managing Requests

- [addRequest:withObserver:error:](snaudiofileanalyzer/add%28__withobserver_%29.md): Adds a new analysis request to the audio file analyzer.
- [SNRequest](snrequest.md): A protocol that represents sound analysis requests.
- [SNResultsObserving](snresultsobserving.md): The interface your app implements to receive the results of an analysis request.
- [removeRequest:](snaudiofileanalyzer/remove%28__%29.md): Removes an existing request from the audio file analyzer.
- [removeAllRequests](snaudiofileanalyzer/removeallrequests%28%29.md): Removes all the sound analysis requests from the audio file analyzer.

### Analyzing Data

- [analyze](snaudiofileanalyzer/analyze%28%29.md): Analyzes the audio file synchronously.
- [analyzeWithCompletionHandler:](snaudiofileanalyzer/analyze%28completionhandler_%29.md): Analyzes the audio file asynchronously.
- [cancelAnalysis](snaudiofileanalyzer/cancelanalysis%28%29.md): Cancels all the asynchronous sound analysis requests the analyzer is currently processing.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Audio analyzers

- [Classifying Sounds in an Audio File](classifying-sounds-in-an-audio-file.md): Identify individual sounds in a file, such as a recording, with an audio file analyzer.
- [Classifying Sounds in an Audio Stream](classifying-sounds-in-an-audio-stream.md): Identify individual sounds in an audio data stream, such as from a microphone, with an audio stream analyzer.
- [SNAudioStreamAnalyzer](snaudiostreamanalyzer.md): An object you create to analyze a stream of audio data and provide the results to your app.
