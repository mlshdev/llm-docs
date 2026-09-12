> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snaudiostreamanalyzer](https://developer.apple.com/documentation/soundanalysis/snaudiostreamanalyzer)

# SNAudioStreamAnalyzer (Swift)

**Framework:** Sound Analysis  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An object you create to analyze a stream of audio data and provide the results to your app.

## Declaration

```swift
class SNAudioStreamAnalyzer
```

## Mentioned In

- [Classifying Sounds in an Audio Stream](classifying-sounds-in-an-audio-stream.md)

<a id="overview"></a>

## Overview

Run an [SNRequest](snrequest.md) on an audio stream by creating an `SNAudioStreamAnalyzer`. You can run the same sound analysis request on multiple stream analyzers, and each analyzer can process multiple requests. An audio file analyzer generates an [SNResult](snresult.md) each time any of its active requests recognizes a sound.

## Topics

### Creating an Analyzer

- [init(format:)](snaudiostreamanalyzer/init%28format_%29.md): Creates a new audio stream analyzer.

### Managing Requests

- [add(\_:withObserver:)](snaudiostreamanalyzer/add%28__withobserver_%29.md): Adds a new analysis request to the audio stream analyzer.
- [SNRequest](snrequest.md): A protocol that represents sound analysis requests.
- [SNResultsObserving](snresultsobserving.md): The interface your app implements to receive the results of an analysis request.
- [remove(\_:)](snaudiostreamanalyzer/remove%28__%29.md): Removes an existing request from the audio stream analyzer.
- [removeAllRequests()](snaudiostreamanalyzer/removeallrequests%28%29.md): Removes all the sound analysis requests from the audio stream analyzer.

### Analyzing Data

- [analyze(\_:atAudioFramePosition:)](snaudiostreamanalyzer/analyze%28__ataudioframeposition_%29.md): Adds a new audio buffer to the analyzer’s larger stream buffer.
- [completeAnalysis()](snaudiostreamanalyzer/completeanalysis%28%29.md): Notifies the analyzer when it receives the final audio buffer.

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
- [SNAudioFileAnalyzer](snaudiofileanalyzer.md): An analyzer that runs sound classification requests on an audio file.
- [Classifying Sounds in an Audio Stream](classifying-sounds-in-an-audio-stream.md): Identify individual sounds in an audio data stream, such as from a microphone, with an audio stream analyzer.

# SNAudioStreamAnalyzer (Objective-C)

**Framework:** Sound Analysis  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An object you create to analyze a stream of audio data and provide the results to your app.

## Declaration

```objectivec
@interface SNAudioStreamAnalyzer : NSObject
```

## Mentioned In

- [Classifying Sounds in an Audio Stream](classifying-sounds-in-an-audio-stream.md)

<a id="overview"></a>

## Overview

Run an [SNRequest](snrequest.md) on an audio stream by creating an `SNAudioStreamAnalyzer`. You can run the same sound analysis request on multiple stream analyzers, and each analyzer can process multiple requests. An audio file analyzer generates an [SNResult](snresult.md) each time any of its active requests recognizes a sound.

## Topics

### Creating an Analyzer

- [initWithFormat:](snaudiostreamanalyzer/init%28format_%29.md): Creates a new audio stream analyzer.

### Managing Requests

- [addRequest:withObserver:error:](snaudiostreamanalyzer/add%28__withobserver_%29.md): Adds a new analysis request to the audio stream analyzer.
- [SNRequest](snrequest.md): A protocol that represents sound analysis requests.
- [SNResultsObserving](snresultsobserving.md): The interface your app implements to receive the results of an analysis request.
- [removeRequest:](snaudiostreamanalyzer/remove%28__%29.md): Removes an existing request from the audio stream analyzer.
- [removeAllRequests](snaudiostreamanalyzer/removeallrequests%28%29.md): Removes all the sound analysis requests from the audio stream analyzer.

### Analyzing Data

- [analyzeAudioBuffer:atAudioFramePosition:](snaudiostreamanalyzer/analyze%28__ataudioframeposition_%29.md): Adds a new audio buffer to the analyzer’s larger stream buffer.
- [completeAnalysis](snaudiostreamanalyzer/completeanalysis%28%29.md): Notifies the analyzer when it receives the final audio buffer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Audio analyzers

- [Classifying Sounds in an Audio File](classifying-sounds-in-an-audio-file.md): Identify individual sounds in a file, such as a recording, with an audio file analyzer.
- [SNAudioFileAnalyzer](snaudiofileanalyzer.md): An analyzer that runs sound classification requests on an audio file.
- [Classifying Sounds in an Audio Stream](classifying-sounds-in-an-audio-stream.md): Identify individual sounds in an audio data stream, such as from a microphone, with an audio stream analyzer.
