> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieerrorlog/extendedlogdata](https://developer.apple.com/documentation/mediaplayer/mpmovieerrorlog/extendedlogdata)

# extendedLogData (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A textual version of the web server error log.

> Use AVPlayerViewController in AVKit

## Declaration

```swift
var extendedLogData: Data! { get }
```

<a id="Discussion"></a>

## Discussion

The web server error log in a textual format that conforms to the W3C Extended Log File Format for web server log files.

## See Also

### Movie error log properties

- [extendedLogDataStringEncoding](extendedlogdatastringencoding.md): Deprecated. The string encoding for the extended log data property.
- [events](events.md): Deprecated. The events in the movie error log.

# extendedLogData (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ (deprecated in 9.0) · iPadOS 4.3+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A textual version of the web server error log.

> Use AVPlayerViewController in AVKit

## Declaration

```objectivec
@property (nonatomic, readonly) NSData * extendedLogData;
```

<a id="Discussion"></a>

## Discussion

The web server error log in a textual format that conforms to the W3C Extended Log File Format for web server log files.

## See Also

### Movie error log properties

- [extendedLogDataStringEncoding](extendedlogdatastringencoding.md): Deprecated. The string encoding for the extended log data property.
- [events](events.md): Deprecated. The events in the movie error log.
