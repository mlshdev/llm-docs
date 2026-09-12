> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/logger/init(subsystem:category:)](https://developer.apple.com/documentation/os/logger/init(subsystem:category:))

# init(subsystem:category:)

**Framework:** os  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Creates a logger using the specified subsystem and category.

## Declaration

```swift
init(subsystem: String, category: String)
```

## Parameters

- `subsystem`: The string that identifies the subsystem that emits signposts. Typically, you use the same value as your app’s *bundle ID*. For more information, see [CFBundleIdentifier](../../bundleresources/information-property-list/cfbundleidentifier.md).
- `category`: The string that the system uses to categorize emitted signposts.

## See Also

### Creating a Logger

- [init()](init%28%29.md): Creates a logger that writes to the default subsystem.
- [init(\_:)](init%28__%29.md): Creates a logger that writes to the specified log.
- [OSLog](../oslog.md): A container of related log messages.
