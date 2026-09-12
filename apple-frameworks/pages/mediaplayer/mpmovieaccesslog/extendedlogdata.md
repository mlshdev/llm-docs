> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieaccesslog/extendedlogdata](https://developer.apple.com/documentation/mediaplayer/mpmovieaccesslog/extendedlogdata)

# extendedLogData (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A textual version of the web server access log for the associated movie player.

> Use AVPlayerViewController in AVKit

## Declaration

```swift
var extendedLogData: Data! { get }
```

<a id="Discussion"></a>

## Discussion

The web server access log in a textual format that conforms to the W3C Extended Log File Format for web server log files. For more information, see [http://www.w3.org/pub/WWW/TR/WD-logfile.html](http://www.w3.org/pub/WWW/TR/WD-logfile.html).

## See Also

### Movie access log properties

- [extendedLogDataStringEncoding](extendedlogdatastringencoding.md): Deprecated. The string encoding for the [extendedLogData](extendedlogdata.md) property.
- [events](events.md): Deprecated. The events in the movie access log.

# extendedLogData (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ (deprecated in 9.0) · iPadOS 4.3+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A textual version of the web server access log for the associated movie player.

> Use AVPlayerViewController in AVKit

## Declaration

```objectivec
@property (nonatomic, readonly) NSData * extendedLogData;
```

<a id="Discussion"></a>

## Discussion

The web server access log in a textual format that conforms to the W3C Extended Log File Format for web server log files. For more information, see [http://www.w3.org/pub/WWW/TR/WD-logfile.html](http://www.w3.org/pub/WWW/TR/WD-logfile.html).

## See Also

### Movie access log properties

- [extendedLogDataStringEncoding](extendedlogdatastringencoding.md): Deprecated. The string encoding for the [extendedLogData](extendedlogdata.md) property.
- [events](events.md): Deprecated. The events in the movie access log.
