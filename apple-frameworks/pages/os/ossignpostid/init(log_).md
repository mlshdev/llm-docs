> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/ossignpostid/init(log:)](https://developer.apple.com/documentation/os/ossignpostid/init(log:))

# init(log:)

**Framework:** os  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS · watchOS 5.0+

Creates a signpost ID for the specified log.

> Use [makeSignpostID()](../ossignposter/makesignpostid%28%29.md) instead.

## Declaration

```swift
init(log: OSLog)
```

## Parameters

- `log`: The log that you’re writing signposted events to.

## See Also

### Creating a Signpost Identifier

- [init(\_:)](init%28__%29.md): Creates a signpost ID from an arbitrary 64-bit integer value.
- [init(log:object:)](init%28log_object_%29.md): Deprecated. Creates a signpost ID and associates it with the specified object.
