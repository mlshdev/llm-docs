> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snaudiofileanalyzer/add(_:withobserver:)](https://developer.apple.com/documentation/soundanalysis/snaudiofileanalyzer/add(_:withobserver:))

# add(\_:withObserver:) (Swift)

**Framework:** Sound Analysis  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Adds a new analysis request to the audio file analyzer.

## Declaration

```swift
func add(_ request: any SNRequest, withObserver observer: any SNResultsObserving) throws
```

## Parameters

- `request`: A sound analysis request.
- `observer`: An [SNResultsObserving](../snresultsobserving.md) instance that receives the analyzer’s results. The analyzer maintains a weak reference to the observer.

## Mentioned In

- [Classifying Sounds in an Audio File](../classifying-sounds-in-an-audio-file.md)

<a id="Discussion"></a>

## Discussion

The method throws an error (Swift) or returns an error (Objective-C) if the analyzer is actively processing the file.

## See Also

### Managing Requests

- [SNRequest](../snrequest.md): A protocol that represents sound analysis requests.
- [SNResultsObserving](../snresultsobserving.md): The interface your app implements to receive the results of an analysis request.
- [remove(\_:)](remove%28__%29.md): Removes an existing request from the audio file analyzer.
- [removeAllRequests()](removeallrequests%28%29.md): Removes all the sound analysis requests from the audio file analyzer.

# addRequest:withObserver:error: (Objective-C)

**Framework:** Sound Analysis  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Adds a new analysis request to the audio file analyzer.

## Declaration

```objectivec
- (BOOL) addRequest:(id<SNRequest>) request withObserver:(id<SNResultsObserving>) observer error:(NSError **) error;
```

## Parameters

- `request`: A sound analysis request.
- `observer`: An [SNResultsObserving](../snresultsobserving.md) instance that receives the analyzer’s results. The analyzer maintains a weak reference to the observer.
- `error`: On return, if an error occurs, a pointer to an error information instance; otherwise, `nil`.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the analyzer adds the request.

## Mentioned In

- [Classifying Sounds in an Audio File](../classifying-sounds-in-an-audio-file.md)

<a id="Discussion"></a>

## Discussion

The method throws an error (Swift) or returns an error (Objective-C) if the analyzer is actively processing the file.

## See Also

### Managing Requests

- [SNRequest](../snrequest.md): A protocol that represents sound analysis requests.
- [SNResultsObserving](../snresultsobserving.md): The interface your app implements to receive the results of an analysis request.
- [removeRequest:](remove%28__%29.md): Removes an existing request from the audio file analyzer.
- [removeAllRequests](removeallrequests%28%29.md): Removes all the sound analysis requests from the audio file analyzer.
