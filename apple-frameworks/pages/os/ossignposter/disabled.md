> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/ossignposter/disabled](https://developer.apple.com/documentation/os/ossignposter/disabled)

# disabled

**Framework:** os  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

A shared signposter that doesn’t emit signposts at runtime.

## Declaration

```swift
static var disabled: OSSignposter { get }
```

<a id="Discussion"></a>

## Discussion

You can use the signposter this property returns to disable signposts in your production builds without having to refactor your code, as the following example demonstrates:

```swift
let signposter: OSSignposter
#if DEBUG
signposter = OSSignposter()
#else
signposter = OSSignposter.disabled
#endif
```

To determine if a signposter can emit signposts, use the [isEnabled](isenabled.md) property.

## See Also

### Creating a Signposter

- [init()](init%28%29.md): Creates a signposter that uses the default subsystem.
- [init(subsystem:category:)](init%28subsystem_category_%29-94xpb.md): Creates a signposter that uses the specified subsystem and category.
- [init(subsystem:category:)](init%28subsystem_category_%29-4vdri.md): Creates a signposter that uses the specified subsystem and system-defined log category.
- [init(logger:)](init%28logger_%29.md): Creates a signposter that uses the subsystem and category of an existing logger.
- [init(logHandle:)](init%28loghandle_%29.md): Creates a signposter that uses the subsystem and category of an existing log.
