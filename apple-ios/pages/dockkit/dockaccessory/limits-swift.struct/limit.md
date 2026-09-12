> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/limits-swift.struct/limit](https://developer.apple.com/documentation/dockkit/dockaccessory/limits-swift.struct/limit)

# DockAccessory.Limits.Limit

**Framework:** DockKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

A description of a limit placed on an axis of rotation.

## Declaration

```swift
struct Limit
```

<a id="overview"></a>

## Overview

Zero is the default minimum angular speed. Invalid limit specifications include minimum position greater than maximum position, minimum position equals maximum position, and maximum speed is less than zero.

## Topics

### Limiting speed and position

- [maximumSpeed](limit/maximumspeed.md): The maximum speed that the dock accessory moves.
- [positionRange](limit/positionrange.md): The valid range that the dock accessory moves.

### Initializers

- [init(positionRange:maximumSpeed:)](limit/init%28positionrange_maximumspeed_%29.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
