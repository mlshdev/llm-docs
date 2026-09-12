> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/framingmode-swift.enum](https://developer.apple.com/documentation/dockkit/dockaccessory/framingmode-swift.enum)

# DockAccessory.FramingMode

**Framework:** DockKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

The mode to control framing of the subject when tracking.

## Declaration

```swift
enum FramingMode
```

<a id="overview"></a>

## Overview

The default is [DockAccessory.FramingMode.automatic](framingmode-swift.enum/automatic.md), which works well for most situations. [DockAccessory.FramingMode.center](framingmode-swift.enum/center.md) keeps the subject close to the middle of frame. Similarly, [DockAccessory.FramingMode.left](framingmode-swift.enum/left.md) and [DockAccessory.FramingMode.right](framingmode-swift.enum/right.md) aligns the subject close to the left and right third of the frame (left, center, right).

## Topics

### Defining the framing mode

- [DockAccessory.FramingMode.automatic](framingmode-swift.enum/automatic.md): Automatically frame the subject.
- [DockAccessory.FramingMode.center](framingmode-swift.enum/center.md): Frame the subject in the center of the frame.
- [DockAccessory.FramingMode.left](framingmode-swift.enum/left.md): Frame the subject in the left side of the frame.
- [DockAccessory.FramingMode.right](framingmode-swift.enum/right.md): Frame the subject in the right side of the frame.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting framing mode

- [setFramingMode(\_:)](setframingmode%28__%29.md): Customize the dock accessory’s tracking behavior.
- [framingMode](framingmode-swift.property.md): The current framing mode.
