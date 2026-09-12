> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snaudiostreamanalyzer/remove(_:)](https://developer.apple.com/documentation/soundanalysis/snaudiostreamanalyzer/remove(_:))

# remove(\_:) (Swift)

**Framework:** Sound Analysis  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Removes an existing request from the audio stream analyzer.

## Declaration

```swift
func remove(_ request: any SNRequest)
```

## Parameters

- `request`: A sound analysis request.

<a id="Discussion"></a>

## Discussion

You can remove a request while the analyzer is processing it. The analyzer stops sending results to the observer after the method removes the request.

## See Also

### Managing Requests

- [add(\_:withObserver:)](add%28__withobserver_%29.md): Adds a new analysis request to the audio stream analyzer.
- [SNRequest](../snrequest.md): A protocol that represents sound analysis requests.
- [SNResultsObserving](../snresultsobserving.md): The interface your app implements to receive the results of an analysis request.
- [removeAllRequests()](removeallrequests%28%29.md): Removes all the sound analysis requests from the audio stream analyzer.

# removeRequest: (Objective-C)

**Framework:** Sound Analysis  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Removes an existing request from the audio stream analyzer.

## Declaration

```objectivec
- (void) removeRequest:(id<SNRequest>) request;
```

## Parameters

- `request`: A sound analysis request.

<a id="Discussion"></a>

## Discussion

You can remove a request while the analyzer is processing it. The analyzer stops sending results to the observer after the method removes the request.

## See Also

### Managing Requests

- [addRequest:withObserver:error:](add%28__withobserver_%29.md): Adds a new analysis request to the audio stream analyzer.
- [SNRequest](../snrequest.md): A protocol that represents sound analysis requests.
- [SNResultsObserving](../snresultsobserving.md): The interface your app implements to receive the results of an analysis request.
- [removeAllRequests](removeallrequests%28%29.md): Removes all the sound analysis requests from the audio stream analyzer.
