> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/logger/error(_:)](https://developer.apple.com/documentation/os/logger/error(_:))

# error(\_:)

**Framework:** os  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Writes information about an error to the log.

## Declaration

```swift
func error(_ message: OSLogMessage)
```

## Parameters

- `message`: The interpolated string that the logger writes to the log. Each of the message’s interpolations can specify individual formatting and privacy options. For more information, see [Message Argument Formatters](../message-argument-formatters.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  Don’t create an instance of [OSLogMessage](../oslogmessage.md). Instead, provide an interpolated string as the `message` parameter and the system converts it automatically.

Use this method to write messages with the [error](../oslogtype/error.md) log level to both the in-memory and on-disk log stores.

## See Also

### Logging a Scoped Message

- [notice(\_:)](notice%28__%29.md): Writes a message to the log using the default log type.
- [debug(\_:)](debug%28__%29.md): Writes a debug message to the log.
- [trace(\_:)](trace%28__%29.md): Writes a trace message to the log.
- [info(\_:)](info%28__%29.md): Writes an informative message to the log.
- [warning(\_:)](warning%28__%29.md): Writes information about a warning to the log.
- [fault(\_:)](fault%28__%29.md): Writes a message to the log about a bug that occurs when your app executes.
- [critical(\_:)](critical%28__%29.md): Writes a message to the log about a critical event in your app’s execution.
