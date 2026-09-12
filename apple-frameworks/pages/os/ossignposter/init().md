> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/ossignposter/init()](https://developer.apple.com/documentation/os/ossignposter/init())

# init()

**Framework:** os  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Creates a signposter that uses the default subsystem.

## Declaration

```swift
init()
```

## See Also

### Creating a Signposter

- [init(subsystem:category:)](init%28subsystem_category_%29-94xpb.md): Creates a signposter that uses the specified subsystem and category.
- [init(subsystem:category:)](init%28subsystem_category_%29-4vdri.md): Creates a signposter that uses the specified subsystem and system-defined log category.
- [init(logger:)](init%28logger_%29.md): Creates a signposter that uses the subsystem and category of an existing logger.
- [init(logHandle:)](init%28loghandle_%29.md): Creates a signposter that uses the subsystem and category of an existing log.
- [disabled](disabled.md): A shared signposter that doesn’t emit signposts at runtime.
