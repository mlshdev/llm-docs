> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieerrorlogevent/errorstatuscode](https://developer.apple.com/documentation/mediaplayer/mpmovieerrorlogevent/errorstatuscode)

# errorStatusCode (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A unique error code identifier.

> Use AVPlayerViewController in AVKit

## Declaration

```swift
var errorStatusCode: Int { get }
```

<a id="Discussion"></a>

## Discussion

If the error is unknown, the value of this property is negative.

## See Also

### Movie error log event properties

- [date](date.md): Deprecated. The date and time when the error occurred.
- [uri](uri.md): Deprecated. The URI of the item playing when the error occurred.
- [serverAddress](serveraddress.md): Deprecated. The IP address of the web server that was the source of the error.
- [playbackSessionID](playbacksessionid.md): Deprecated. A globally unique identifier (GUID) for the playback session.
- [errorDomain](errordomain.md): Deprecated. The network domain of the error.
- [errorComment](errorcomment.md): Deprecated. A description of the error.

# errorStatusCode (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ (deprecated in 9.0) · iPadOS 4.3+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A unique error code identifier.

> Use AVPlayerViewController in AVKit

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger errorStatusCode;
```

<a id="Discussion"></a>

## Discussion

If the error is unknown, the value of this property is negative.

## See Also

### Movie error log event properties

- [date](date.md): Deprecated. The date and time when the error occurred.
- [URI](uri.md): Deprecated. The URI of the item playing when the error occurred.
- [serverAddress](serveraddress.md): Deprecated. The IP address of the web server that was the source of the error.
- [playbackSessionID](playbacksessionid.md): Deprecated. A globally unique identifier (GUID) for the playback session.
- [errorDomain](errordomain.md): Deprecated. The network domain of the error.
- [errorComment](errorcomment.md): Deprecated. A description of the error.
