> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieplayercontroller/errorlog](https://developer.apple.com/documentation/mediaplayer/mpmovieplayercontroller/errorlog)

# errorLog (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ (deprecated in 9.0) · iPadOS 4.3+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A snapshot of the playback failure error log for the movie player if it is playing a network stream.

> Use AVFoundation.

## Declaration

```swift
var errorLog: MPMovieErrorLog! { get }
```

<a id="Discussion"></a>

## Discussion

Can be `nil`. For information about movie error logs, refer to [MPMovieErrorLog](../mpmovieerrorlog.md).

## See Also

### Retrieving movie logs

- [accessLog](accesslog.md): Deprecated. A snapshot of the network playback log for the movie player if it is playing a network stream.

# errorLog (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ (deprecated in 9.0) · iPadOS 4.3+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A snapshot of the playback failure error log for the movie player if it is playing a network stream.

> Use AVFoundation.

## Declaration

```objectivec
@property (nonatomic, readonly) MPMovieErrorLog * errorLog;
```

<a id="Discussion"></a>

## Discussion

Can be `nil`. For information about movie error logs, refer to [MPMovieErrorLog](../mpmovieerrorlog.md).

## See Also

### Retrieving movie logs

- [accessLog](accesslog.md): Deprecated. A snapshot of the network playback log for the movie player if it is playing a network stream.
