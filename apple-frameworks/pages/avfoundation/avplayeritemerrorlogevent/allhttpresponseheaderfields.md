> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemerrorlogevent/allhttpresponseheaderfields](https://developer.apple.com/documentation/avfoundation/avplayeritemerrorlogevent/allhttpresponseheaderfields)

# allHTTPResponseHeaderFields (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · macOS 14.5+ · tvOS 17.5+ · visionOS 1.2+ · watchOS 10.5+

The HTTP header fields the server returns.

## Declaration

```swift
var allHTTPResponseHeaderFields: [String : String]? { get }
```

## See Also

### Getting information about the event

- [date](date.md): The date and time when the error occurred.
- [uri](uri.md): The URI of the playback item that had an error.
- [serverAddress](serveraddress.md): The IP address of the server that was the source of the error.
- [playbackSessionID](playbacksessionid.md): A GUID that identifies the playback session that had an error.
- [errorStatusCode](errorstatuscode.md): A unique error code identifier.
- [errorDomain](errordomain.md): The domain of the error.
- [errorComment](errorcomment.md): A description of the error encountered.

# allHTTPResponseHeaderFields (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · macOS 14.5+ · tvOS 17.5+ · visionOS 1.2+ · watchOS 10.5+

The HTTP header fields the server returns.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDictionary<NSString *,NSString *> * allHTTPResponseHeaderFields;
```

## See Also

### Getting information about the event

- [date](date.md): The date and time when the error occurred.
- [URI](uri.md): The URI of the playback item that had an error.
- [serverAddress](serveraddress.md): The IP address of the server that was the source of the error.
- [playbackSessionID](playbacksessionid.md): A GUID that identifies the playback session that had an error.
- [errorStatusCode](errorstatuscode.md): A unique error code identifier.
- [errorDomain](errordomain.md): The domain of the error.
- [errorComment](errorcomment.md): A description of the error encountered.
