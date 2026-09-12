> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/logger](https://developer.apple.com/documentation/os/logger)

# Logger

**Framework:** os  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

An object for writing interpolated string messages to the unified logging system.

## Declaration

```swift
struct Logger
```

## Mentioned In

- [Generating Log Messages from Your Code](generating-log-messages-from-your-code.md)

<a id="overview"></a>

## Overview

Create a [Logger](logger.md) structure and use it to log messages about your app’s behavior. When logging a message, you specify the message and any program variables or custom data to help you assess the state of your app. You also choose a log level to indicate the severity of that message. The system records log messages in memory and, in some cases, also writes those messages to an on-disk data store. The log level determines which messages stay in memory and which go to disk.

When you create a [Logger](logger.md) structure, assign an optional subsystem and category string to add context to all messages you log. A subsystem corresponds to a large functional area of your app, and a category corresponds to a specific area within a particular subsystem. When diagnosing problems, use those strings to filter out unrelated messages.

To log a message, call the method that represents the appropriate log level for that message. To create the message, use a Swift string. Strings may contain interpolated values, such as signed and unsigned integers, floating-point and double values, Booleans, other strings, Objective-C objects, and types that conform to the [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible) protocol. You can also include metatypes such as `Int.self`.

```swift
let logger = Logger()
let x = 42
logger.info("The answer is \(x)")
```

When you include an interpolated string or custom object in your message, the system redacts the value of that string or object by default. This behavior prevents the system from leaking potentially user-sensitive information in the log files, such as the user’s account information. If the data doesn’t contain sensitive information, change the privacy option of that value when logging the information. In the following code example, the system redacts the account information in the first log message, but displays the user’s selection in the second log message:

```swift
logger.log("Paid with bank account \(accountNumber)")   // Redacted!
logger.log("Ordered smoothie \(smoothieName, privacy: .public)")  // Visible
```

## Topics

### Creating a Logger

- [init()](logger/init%28%29.md): Creates a logger that writes to the default subsystem.
- [init(subsystem:category:)](logger/init%28subsystem_category_%29.md): Creates a logger using the specified subsystem and category.
- [init(\_:)](logger/init%28__%29.md): Creates a logger that writes to the specified log.
- [OSLog](oslog.md): A container of related log messages.

### Logging a Message

- [log(\_:)](logger/log%28__%29.md): Writes a message to the log using the default log type.
- [log(level:\_:)](logger/log%28level___%29.md): Writes a message to the log using the specified log type.
- [OSLogType](oslogtype.md): The various log levels that the unified logging system provides.
- [OSLogMessage](oslogmessage.md): An object that represents a log message.

### Logging a Scoped Message

- [notice(\_:)](logger/notice%28__%29.md): Writes a message to the log using the default log type.
- [debug(\_:)](logger/debug%28__%29.md): Writes a debug message to the log.
- [trace(\_:)](logger/trace%28__%29.md): Writes a trace message to the log.
- [info(\_:)](logger/info%28__%29.md): Writes an informative message to the log.
- [error(\_:)](logger/error%28__%29.md): Writes information about an error to the log.
- [warning(\_:)](logger/warning%28__%29.md): Writes information about a warning to the log.
- [fault(\_:)](logger/fault%28__%29.md): Writes a message to the log about a bug that occurs when your app executes.
- [critical(\_:)](logger/critical%28__%29.md): Writes a message to the log about a critical event in your app’s execution.

### Instance Methods

- [isEnabled(type:)](logger/isenabled%28type_%29.md): Checks if the Logger can emit log messages for a given log type. This allows for more granular control over logging based on the log level.

### Type Properties

- [disabled](logger/disabled.md): A disabled Logger that won’t emit log messages at runtime. Use to turn off all logging emitted using a specific logger variable.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Log Messages

- [Message Argument Formatters](message-argument-formatters.md): Manage the privacy and presentation of the message’s interpolated values using type-aware formatters.
- [OSLogType](oslogtype.md): The various log levels that the unified logging system provides.
