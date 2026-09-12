> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snresultsobserving](https://developer.apple.com/documentation/soundanalysis/snresultsobserving)

# SNResultsObserving (Swift)

**Framework:** Sound Analysis  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The interface your app implements to receive the results of an analysis request.

## Declaration

```swift
protocol SNResultsObserving : NSObjectProtocol
```

## Mentioned In

- [Classifying Sounds in an Audio File](classifying-sounds-in-an-audio-file.md)
- [Classifying Sounds in an Audio Stream](classifying-sounds-in-an-audio-stream.md)

## Topics

### Handling Requests

- [request(\_:didProduce:)](snresultsobserving/request%28__didproduce_%29.md): Provides a new analysis result to your app with the specified time range.
- [SNResult](snresult.md): A protocol that represents sound analysis results.
- [request(\_:didFailWithError:)](snresultsobserving/request%28__didfailwitherror_%29.md): Provides any errors that occur during processing of the request.
- [requestDidComplete(\_:)](snresultsobserving/requestdidcomplete%28__%29.md): Notifies your app when the analysis request completes normally.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Managing Requests

- [add(\_:withObserver:)](snaudiofileanalyzer/add%28__withobserver_%29.md): Adds a new analysis request to the audio file analyzer.
- [SNRequest](snrequest.md): A protocol that represents sound analysis requests.
- [remove(\_:)](snaudiofileanalyzer/remove%28__%29.md): Removes an existing request from the audio file analyzer.
- [removeAllRequests()](snaudiofileanalyzer/removeallrequests%28%29.md): Removes all the sound analysis requests from the audio file analyzer.

# SNResultsObserving (Objective-C)

**Framework:** Sound Analysis  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The interface your app implements to receive the results of an analysis request.

## Declaration

```objectivec
@protocol SNResultsObserving <NSObject>
```

## Mentioned In

- [Classifying Sounds in an Audio File](classifying-sounds-in-an-audio-file.md)
- [Classifying Sounds in an Audio Stream](classifying-sounds-in-an-audio-stream.md)

## Topics

### Handling Requests

- [request:didProduceResult:](snresultsobserving/request%28__didproduce_%29.md): Provides a new analysis result to your app with the specified time range.
- [SNResult](snresult.md): A protocol that represents sound analysis results.
- [request:didFailWithError:](snresultsobserving/request%28__didfailwitherror_%29.md): Provides any errors that occur during processing of the request.
- [requestDidComplete:](snresultsobserving/requestdidcomplete%28__%29.md): Notifies your app when the analysis request completes normally.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Managing Requests

- [addRequest:withObserver:error:](snaudiofileanalyzer/add%28__withobserver_%29.md): Adds a new analysis request to the audio file analyzer.
- [SNRequest](snrequest.md): A protocol that represents sound analysis requests.
- [removeRequest:](snaudiofileanalyzer/remove%28__%29.md): Removes an existing request from the audio file analyzer.
- [removeAllRequests](snaudiofileanalyzer/removeallrequests%28%29.md): Removes all the sound analysis requests from the audio file analyzer.
