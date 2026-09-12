> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemerrorlogevent/errordomain](https://developer.apple.com/documentation/avfoundation/avplayeritemerrorlogevent/errordomain)

# errorDomain (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The domain of the error.

## Declaration

```swift
var errorDomain: String { get }
```

<a id="Discussion"></a>

## Discussion

The property corresponds to “domain”.

## See Also

### Getting information about the event

- [date](date.md): The date and time when the error occurred.
- [uri](uri.md): The URI of the playback item that had an error.
- [serverAddress](serveraddress.md): The IP address of the server that was the source of the error.
- [playbackSessionID](playbacksessionid.md): A GUID that identifies the playback session that had an error.
- [errorStatusCode](errorstatuscode.md): A unique error code identifier.
- [errorComment](errorcomment.md): A description of the error encountered.
- [allHTTPResponseHeaderFields](allhttpresponseheaderfields.md): The HTTP header fields the server returns.

# errorDomain (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The domain of the error.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * errorDomain;
```

<a id="Discussion"></a>

## Discussion

The property corresponds to “domain”.

## See Also

### Getting information about the event

- [date](date.md): The date and time when the error occurred.
- [URI](uri.md): The URI of the playback item that had an error.
- [serverAddress](serveraddress.md): The IP address of the server that was the source of the error.
- [playbackSessionID](playbacksessionid.md): A GUID that identifies the playback session that had an error.
- [errorStatusCode](errorstatuscode.md): A unique error code identifier.
- [errorComment](errorcomment.md): A description of the error encountered.
- [allHTTPResponseHeaderFields](allhttpresponseheaderfields.md): The HTTP header fields the server returns.
