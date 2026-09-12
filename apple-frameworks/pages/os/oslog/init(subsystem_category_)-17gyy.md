> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/oslog/init(subsystem:category:)-17gyy](https://developer.apple.com/documentation/os/oslog/init(subsystem:category:)-17gyy)

# init(subsystem:category:)

**Framework:** os  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS · watchOS 3.0+

Creates a log using the specified subsystem and category.

## Declaration

```swift
convenience init(subsystem: String, category: String)
```

## Parameters

- `subsystem`: An identifier string, in reverse DNS notation, that represents the app subsystem that’s logging information, such as `com.your_company.your_subsystem_name`. The logging system uses this information to categorize and filter related log messages, and to group related logging settings.
- `category`: A category within the specified subsystem. The system uses this value to categorize and filter related log messages, and to group related logging settings within the subsystem. A category’s logging settings override those of the containing subsystem.

<a id="return-value"></a>

## Return Value

 A custom log object that you can pass to other logging functions to perform logging and to determine whether a specific level of logging is in an enabled state.

## See Also

### Creating a Log

- [init(subsystem:category:)](init%28subsystem_category_%29-72ghw.md): Creates a log using the specified subsystem and system-defined category.
- [OSLog.Category](category.md): System-defined categories that identify well-known parts of your app.
