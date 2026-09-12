> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snaudiofileanalyzer/removeallrequests()](https://developer.apple.com/documentation/soundanalysis/snaudiofileanalyzer/removeallrequests())

# removeAllRequests() (Swift)

**Framework:** Sound Analysis  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Removes all the sound analysis requests from the audio file analyzer.

## Declaration

```swift
func removeAllRequests()
```

## See Also

### Managing Requests

- [add(\_:withObserver:)](add%28__withobserver_%29.md): Adds a new analysis request to the audio file analyzer.
- [SNRequest](../snrequest.md): A protocol that represents sound analysis requests.
- [SNResultsObserving](../snresultsobserving.md): The interface your app implements to receive the results of an analysis request.
- [remove(\_:)](remove%28__%29.md): Removes an existing request from the audio file analyzer.

# removeAllRequests (Objective-C)

**Framework:** Sound Analysis  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Removes all the sound analysis requests from the audio file analyzer.

## Declaration

```objectivec
- (void) removeAllRequests;
```

## See Also

### Managing Requests

- [addRequest:withObserver:error:](add%28__withobserver_%29.md): Adds a new analysis request to the audio file analyzer.
- [SNRequest](../snrequest.md): A protocol that represents sound analysis requests.
- [SNResultsObserving](../snresultsobserving.md): The interface your app implements to receive the results of an analysis request.
- [removeRequest:](remove%28__%29.md): Removes an existing request from the audio file analyzer.
