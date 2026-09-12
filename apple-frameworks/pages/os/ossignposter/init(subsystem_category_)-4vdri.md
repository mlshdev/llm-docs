> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/ossignposter/init(subsystem:category:)-4vdri](https://developer.apple.com/documentation/os/ossignposter/init(subsystem:category:)-4vdri)

# init(subsystem:category:)

**Framework:** os  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Creates a signposter that uses the specified subsystem and system-defined log category.

## Declaration

```swift
init(subsystem: String, category: OSLog.Category)
```

## Parameters

- `subsystem`: The string that identifies the subsystem that emits signposts. Typically, you use the same value as your app’s *bundle ID*. For more information, see [CFBundleIdentifier](../../bundleresources/information-property-list/cfbundleidentifier.md).
- `category`: The system-defined category, which the system uses to categorize emitted signposts. For possible values, see [OSLog.Category](../oslog/category.md).

## See Also

### Creating a Signposter

- [init()](init%28%29.md): Creates a signposter that uses the default subsystem.
- [init(subsystem:category:)](init%28subsystem_category_%29-94xpb.md): Creates a signposter that uses the specified subsystem and category.
- [init(logger:)](init%28logger_%29.md): Creates a signposter that uses the subsystem and category of an existing logger.
- [init(logHandle:)](init%28loghandle_%29.md): Creates a signposter that uses the subsystem and category of an existing log.
- [disabled](disabled.md): A shared signposter that doesn’t emit signposts at runtime.
