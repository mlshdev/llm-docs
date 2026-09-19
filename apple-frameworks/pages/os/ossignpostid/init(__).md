> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/os/ossignpostid/init(_:)

# init(\_:)

**Framework:** os  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS · watchOS 5.0+

Creates a signpost ID from an arbitrary 64-bit integer value.

## Declaration

```swift
init(_ value: UInt64)
```

## Parameters

- `value`: The value to use when generating the signpost ID.

## See Also

### Creating a Signpost Identifier

- [init(log:)](init%28log_%29.md): Deprecated. Creates a signpost ID for the specified log.
- [init(log:object:)](init%28log_object_%29.md): Deprecated. Creates a signpost ID and associates it with the specified object.
