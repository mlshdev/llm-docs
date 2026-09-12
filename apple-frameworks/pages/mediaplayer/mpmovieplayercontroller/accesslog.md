> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieplayercontroller/accesslog](https://developer.apple.com/documentation/mediaplayer/mpmovieplayercontroller/accesslog)

# accessLog (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ (deprecated in 9.0) · iPadOS 4.3+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A snapshot of the network playback log for the movie player if it is playing a network stream.

> Use AVFoundation.

## Declaration

```swift
var accessLog: MPMovieAccessLog! { get }
```

<a id="Discussion"></a>

## Discussion

Can be `nil`. For information about movie access logs, refer to [MPMovieAccessLog](../mpmovieaccesslog.md).

## See Also

### Retrieving movie logs

- [errorLog](errorlog.md): Deprecated. A snapshot of the playback failure error log for the movie player if it is playing a network stream.

# accessLog (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ (deprecated in 9.0) · iPadOS 4.3+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A snapshot of the network playback log for the movie player if it is playing a network stream.

> Use AVFoundation.

## Declaration

```objectivec
@property (nonatomic, readonly) MPMovieAccessLog * accessLog;
```

<a id="Discussion"></a>

## Discussion

Can be `nil`. For information about movie access logs, refer to [MPMovieAccessLog](../mpmovieaccesslog.md).

## See Also

### Retrieving movie logs

- [errorLog](errorlog.md): Deprecated. A snapshot of the playback failure error log for the movie player if it is playing a network stream.
