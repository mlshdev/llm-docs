> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/logger/log(level:_:)](https://developer.apple.com/documentation/os/logger/log(level:_:))

# log(level:\_:)

**Framework:** os  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Writes a message to the log using the specified log type.

## Declaration

```swift
func log(level: OSLogType, _ message: OSLogMessage)
```

## Parameters

- `level`: The message’s log level, which determines the severity of the message and whether the system persists it to disk. For possible values, see [OSLogType](../oslogtype.md).
- `message`: The interpolated string that the logger writes to the log. Each of the message’s interpolations can specify individual formatting and privacy options. For more information, see [Message Argument Formatters](../message-argument-formatters.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  Don’t create an instance of [OSLogMessage](../oslogmessage.md). Instead, provide an interpolated string as the `message` parameter and the system converts it automatically.

## See Also

### Logging a Message

- [log(\_:)](log%28__%29.md): Writes a message to the log using the default log type.
- [OSLogType](../oslogtype.md): The various log levels that the unified logging system provides.
- [OSLogMessage](../oslogmessage.md): An object that represents a log message.
