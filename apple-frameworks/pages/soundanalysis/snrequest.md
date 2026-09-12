> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snrequest](https://developer.apple.com/documentation/soundanalysis/snrequest)

# SNRequest (Swift)

**Framework:** Sound Analysis  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A protocol that represents sound analysis requests.

## Declaration

```swift
protocol SNRequest : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Don’t create types that adopt `SNRequest`. Only Sound Analysis framework types adopt the protocol.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [SNClassifySoundRequest](snclassifysoundrequest.md)

## See Also

### Managing Requests

- [add(\_:withObserver:)](snaudiofileanalyzer/add%28__withobserver_%29.md): Adds a new analysis request to the audio file analyzer.
- [SNResultsObserving](snresultsobserving.md): The interface your app implements to receive the results of an analysis request.
- [remove(\_:)](snaudiofileanalyzer/remove%28__%29.md): Removes an existing request from the audio file analyzer.
- [removeAllRequests()](snaudiofileanalyzer/removeallrequests%28%29.md): Removes all the sound analysis requests from the audio file analyzer.

# SNRequest (Objective-C)

**Framework:** Sound Analysis  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A protocol that represents sound analysis requests.

## Declaration

```objectivec
@protocol SNRequest <NSObject>
```

<a id="overview"></a>

## Overview

Don’t create types that adopt `SNRequest`. Only Sound Analysis framework types adopt the protocol.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [SNClassifySoundRequest](snclassifysoundrequest.md)

## See Also

### Managing Requests

- [addRequest:withObserver:error:](snaudiofileanalyzer/add%28__withobserver_%29.md): Adds a new analysis request to the audio file analyzer.
- [SNResultsObserving](snresultsobserving.md): The interface your app implements to receive the results of an analysis request.
- [removeRequest:](snaudiofileanalyzer/remove%28__%29.md): Removes an existing request from the audio file analyzer.
- [removeAllRequests](snaudiofileanalyzer/removeallrequests%28%29.md): Removes all the sound analysis requests from the audio file analyzer.
