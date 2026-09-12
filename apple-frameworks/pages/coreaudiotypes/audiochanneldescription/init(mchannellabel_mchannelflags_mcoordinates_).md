> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiochanneldescription/init(mchannellabel:mchannelflags:mcoordinates:)](https://developer.apple.com/documentation/coreaudiotypes/audiochanneldescription/init(mchannellabel:mchannelflags:mcoordinates:))

# init(mChannelLabel:mChannelFlags:mCoordinates:)

**Framework:** Core Audio Types  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a channel description with a label, flags, and coordinates.

## Declaration

```swift
init(mChannelLabel: AudioChannelLabel, mChannelFlags: AudioChannelFlags, mCoordinates: (Float32, Float32, Float32))
```

## Parameters

- `mChannelLabel`: A label for the chanel.
- `mChannelFlags`: The flags to set for a channel.
- `mCoordinates`: The coordinates.

## See Also

### Creating a Channel Description

- [init()](init%28%29.md): Creates an empty channel description.
