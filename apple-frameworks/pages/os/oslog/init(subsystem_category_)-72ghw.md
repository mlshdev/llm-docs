> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/oslog/init(subsystem:category:)-72ghw](https://developer.apple.com/documentation/os/oslog/init(subsystem:category:)-72ghw)

# init(subsystem:category:)

**Framework:** os  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS · watchOS 5.0+

Creates a log using the specified subsystem and system-defined category.

## Declaration

```swift
convenience init(subsystem: String, category: OSLog.Category)
```

## Parameters

- `subsystem`: An identifier string, in reverse DNS notation, that represents the subsystem that’s performing logging, such as `com.your_company.your_subsystem_name`. The logging system uses this information to categorize and filter related log messages.
- `category`: A system-defined category within the specified subsystem. The system uses this value to categorize and filter related log messages. A category’s logging settings override those of the containing subsystem.

<a id="return-value"></a>

## Return Value

 A custom log object that you can pass to other logging functions to perform logging and to determine whether a specific level of logging is in an enabled state.

## See Also

### Creating a Log

- [init(subsystem:category:)](init%28subsystem_category_%29-17gyy.md): Creates a log using the specified subsystem and category.
- [OSLog.Category](category.md): System-defined categories that identify well-known parts of your app.
