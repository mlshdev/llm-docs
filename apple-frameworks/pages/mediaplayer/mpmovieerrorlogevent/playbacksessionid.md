> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieerrorlogevent/playbacksessionid](https://developer.apple.com/documentation/mediaplayer/mpmovieerrorlogevent/playbacksessionid)

# playbackSessionID (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A globally unique identifier (GUID) for the playback session.

> Use AVPlayerViewController in AVKit

## Declaration

```swift
var playbackSessionID: String! { get }
```

<a id="Discussion"></a>

## Discussion

HTTP requests use the GUID.

## See Also

### Movie error log event properties

- [date](date.md): Deprecated. The date and time when the error occurred.
- [uri](uri.md): Deprecated. The URI of the item playing when the error occurred.
- [serverAddress](serveraddress.md): Deprecated. The IP address of the web server that was the source of the error.
- [errorStatusCode](errorstatuscode.md): Deprecated. A unique error code identifier.
- [errorDomain](errordomain.md): Deprecated. The network domain of the error.
- [errorComment](errorcomment.md): Deprecated. A description of the error.

# playbackSessionID (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ (deprecated in 9.0) · iPadOS 4.3+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A globally unique identifier (GUID) for the playback session.

> Use AVPlayerViewController in AVKit

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * playbackSessionID;
```

<a id="Discussion"></a>

## Discussion

HTTP requests use the GUID.

## See Also

### Movie error log event properties

- [date](date.md): Deprecated. The date and time when the error occurred.
- [URI](uri.md): Deprecated. The URI of the item playing when the error occurred.
- [serverAddress](serveraddress.md): Deprecated. The IP address of the web server that was the source of the error.
- [errorStatusCode](errorstatuscode.md): Deprecated. A unique error code identifier.
- [errorDomain](errordomain.md): Deprecated. The network domain of the error.
- [errorComment](errorcomment.md): Deprecated. A description of the error.
