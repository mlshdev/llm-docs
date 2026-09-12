> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemerrorlog/extendedlogdata()](https://developer.apple.com/documentation/avfoundation/avplayeritemerrorlog/extendedlogdata())

# extendedLogData() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a serialized representation of the error log in the Extended Log File Format.

## Declaration

```swift
func extendedLogData() -> Data?
```

<a id="return-value"></a>

## Return Value

A serialized representation of the error log in the Extended Log File Format.

<a id="Discussion"></a>

## Discussion

This method converts the web server error log into a textual format that conforms to the W3C Extended Log File Format for web server log files. For more information, see [http://www.w3.org/pub/WWW/TR/WD-logfile.html](http://www.w3.org/pub/WWW/TR/WD-logfile.html).

You can generate a string suitable for console output using:

```objc
[[NSString alloc] initWithData:[myLog extendedLogData] encoding:[myLog extendedLogDataStringEncoding]]
```

## See Also

### Accessing error data

- [events](events.md): A chronologically ordered array of player item error log event objects.
- [extendedLogDataStringEncoding](extendedlogdatastringencoding.md): The string encoding of the extended log data.

# extendedLogData (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a serialized representation of the error log in the Extended Log File Format.

## Declaration

```objectivec
- (NSData *) extendedLogData;
```

<a id="return-value"></a>

## Return Value

A serialized representation of the error log in the Extended Log File Format.

<a id="Discussion"></a>

## Discussion

This method converts the web server error log into a textual format that conforms to the W3C Extended Log File Format for web server log files. For more information, see [http://www.w3.org/pub/WWW/TR/WD-logfile.html](http://www.w3.org/pub/WWW/TR/WD-logfile.html).

You can generate a string suitable for console output using:

```objc
[[NSString alloc] initWithData:[myLog extendedLogData] encoding:[myLog extendedLogDataStringEncoding]]
```

## See Also

### Accessing error data

- [events](events.md): A chronologically ordered array of player item error log event objects.
- [extendedLogDataStringEncoding](extendedlogdatastringencoding.md): The string encoding of the extended log data.
