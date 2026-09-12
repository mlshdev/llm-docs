> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieerrorlog/events](https://developer.apple.com/documentation/mediaplayer/mpmovieerrorlog/events)

# events (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The events in the movie error log.

> Use AVPlayerViewController in AVKit

## Declaration

```swift
var events: [Any]! { get }
```

<a id="Discussion"></a>

## Discussion

An ordered collection of [MPMovieErrorLogEvent](../mpmovieerrorlogevent.md) instances that represent the chronological sequence of events in the movie error log.

## See Also

### Movie error log properties

- [extendedLogData](extendedlogdata.md): Deprecated. A textual version of the web server error log.
- [extendedLogDataStringEncoding](extendedlogdatastringencoding.md): Deprecated. The string encoding for the extended log data property.

# events (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ (deprecated in 9.0) · iPadOS 4.3+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The events in the movie error log.

> Use AVPlayerViewController in AVKit

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray * events;
```

<a id="Discussion"></a>

## Discussion

An ordered collection of [MPMovieErrorLogEvent](../mpmovieerrorlogevent.md) instances that represent the chronological sequence of events in the movie error log.

## See Also

### Movie error log properties

- [extendedLogData](extendedlogdata.md): Deprecated. A textual version of the web server error log.
- [extendedLogDataStringEncoding](extendedlogdatastringencoding.md): Deprecated. The string encoding for the extended log data property.
