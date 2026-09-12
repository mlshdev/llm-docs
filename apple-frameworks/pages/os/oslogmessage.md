> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/oslogmessage](https://developer.apple.com/documentation/os/oslogmessage)

# OSLogMessage

**Framework:** os  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

An object that represents a log message.

## Declaration

```swift
@frozen struct OSLogMessage
```

<a id="overview"></a>

## Overview

> **Important**

>  You don’t create instances of [OSLogMessage](oslogmessage.md) directly. Instead, the system creates them for you when writing messages to the unified logging system using a [Logger](logger.md).

## Topics

### Getting the Message Details

- [bufferSize](oslogmessage/buffersize.md): The byte size of the buffer that the logging system receives.
- [interpolation](oslogmessage/interpolation.md): The log message’s string interpolation.
- [maxOSLogArgumentCount](maxoslogargumentcount.md): The maximum number of interpolated expressions that a log message may contain.

## Relationships

### Conforms To

- [ExpressibleByExtendedGraphemeClusterLiteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)
- [ExpressibleByStringInterpolation](https://developer.apple.com/documentation/swift/expressiblebystringinterpolation)
- [ExpressibleByStringLiteral](https://developer.apple.com/documentation/swift/expressiblebystringliteral)
- [ExpressibleByUnicodeScalarLiteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)

## See Also

### Logging a Message

- [log(\_:)](logger/log%28__%29.md): Writes a message to the log using the default log type.
- [log(level:\_:)](logger/log%28level___%29.md): Writes a message to the log using the specified log type.
- [OSLogType](oslogtype.md): The various log levels that the unified logging system provides.
