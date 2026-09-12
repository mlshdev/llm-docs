> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieaccesslog/events](https://developer.apple.com/documentation/mediaplayer/mpmovieaccesslog/events)

# events (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The events in the movie access log.

> Use AVPlayerViewController in AVKit

## Declaration

```swift
var events: [Any]! { get }
```

<a id="Discussion"></a>

## Discussion

An ordered collection of [MPMovieAccessLogEvent](../mpmovieaccesslogevent.md) instances that represent the chronological sequence of events in the movie access log.

## See Also

### Movie access log properties

- [extendedLogData](extendedlogdata.md): Deprecated. A textual version of the web server access log for the associated movie player.
- [extendedLogDataStringEncoding](extendedlogdatastringencoding.md): Deprecated. The string encoding for the [extendedLogData](extendedlogdata.md) property.

# events (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ (deprecated in 9.0) · iPadOS 4.3+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The events in the movie access log.

> Use AVPlayerViewController in AVKit

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray * events;
```

<a id="Discussion"></a>

## Discussion

An ordered collection of [MPMovieAccessLogEvent](../mpmovieaccesslogevent.md) instances that represent the chronological sequence of events in the movie access log.

## See Also

### Movie access log properties

- [extendedLogData](extendedlogdata.md): Deprecated. A textual version of the web server access log for the associated movie player.
- [extendedLogDataStringEncoding](extendedlogdatastringencoding.md): Deprecated. The string encoding for the [extendedLogData](extendedlogdata.md) property.
