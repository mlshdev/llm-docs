> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/oslog](https://developer.apple.com/documentation/os/oslog)

# OSLog

**Framework:** os  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A container of related log messages.

## Declaration

```swift
class OSLog
```

## Mentioned In

- [Generating Log Messages from Your Code](generating-log-messages-from-your-code.md)

<a id="overview"></a>

## Overview

A log categorizes the messages you write and makes it easy to sort and filter them. Each log contains a subsystem and a category, which you define. A subsystem identifies a major functional area of your app, which you specify using reverse DNS notation, such as `com.your_company.your_subsystem_name`. A category segregates specific areas within a subsystem.

## Topics

### Creating a Log

- [init(subsystem:category:)](oslog/init%28subsystem_category_%29-17gyy.md): Creates a log using the specified subsystem and category.
- [init(subsystem:category:)](oslog/init%28subsystem_category_%29-72ghw.md): Creates a log using the specified subsystem and system-defined category.
- [OSLog.Category](oslog/category.md): System-defined categories that identify well-known parts of your app.

### Getting the Shared Logs

- [default](oslog/default.md): The shared default log.
- [disabled](oslog/disabled.md): The shared disabled log.

### Getting Log Configuration

- [isEnabled(type:)](oslog/isenabled%28type_%29.md): Returns a Boolean value that indicates whether the log can write messages with the specified log type.
- [signpostsEnabled](oslog/signpostsenabled.md): A Boolean value that indicates whether a log is able to use signpost logging.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a Logger

- [init()](logger/init%28%29.md): Creates a logger that writes to the default subsystem.
- [init(subsystem:category:)](logger/init%28subsystem_category_%29.md): Creates a logger using the specified subsystem and category.
- [init(\_:)](logger/init%28__%29.md): Creates a logger that writes to the specified log.
