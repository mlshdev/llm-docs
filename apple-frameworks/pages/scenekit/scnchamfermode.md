> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnchamfermode](https://developer.apple.com/documentation/scenekit/scnchamfermode)

# SCNChamferMode (Swift)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Options for which edges of an extruded shape are chamfered, used by the [chamferMode](scnshape/chamfermode.md) property.

## Declaration

```swift
enum SCNChamferMode
```

<a id="overview"></a>

## Overview

![](https://developer.apple.com/images/com.apple.scenekit/media-2929773@2x.png)

## Topics

### Constants

- [SCNChamferMode.both](scnchamfermode/both.md): Apply a chamfer to both front and back edges of the extruded shape.
- [SCNChamferMode.front](scnchamfermode/front.md): Apply a chamfer to only the front edge of the extruded shape.
- [SCNChamferMode.back](scnchamfermode/back.md): Apply a chamfer to only the back edge of the extruded shape.

### Initializers

- [init(rawValue:)](scnchamfermode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Chamfering a Shape

- [chamferMode](scnshape/chamfermode.md): A constant specifying which ends of the extruded shape’s profile are chamfered.
- [chamferProfile](scnshape/chamferprofile.md): A path that determines the cross-sectional contour of each chamfered edge.
- [chamferRadius](scnshape/chamferradius.md): The width or depth of each chamfered edge. Animatable.

# SCNChamferMode (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

Options for which edges of an extruded shape are chamfered, used by the [chamferMode](scnshape/chamfermode.md) property.

## Declaration

```objectivec
enum SCNChamferMode : NSInteger;
```

<a id="overview"></a>

## Overview

![](https://developer.apple.com/images/com.apple.scenekit/media-2929773@2x.png)

## Topics

### Constants

- [SCNChamferModeBoth](scnchamfermode/both.md): Apply a chamfer to both front and back edges of the extruded shape.
- [SCNChamferModeFront](scnchamfermode/front.md): Apply a chamfer to only the front edge of the extruded shape.
- [SCNChamferModeBack](scnchamfermode/back.md): Apply a chamfer to only the back edge of the extruded shape.

## See Also

### Chamfering a Shape

- [chamferMode](scnshape/chamfermode.md): A constant specifying which ends of the extruded shape’s profile are chamfered.
- [chamferProfile](scnshape/chamferprofile.md): A path that determines the cross-sectional contour of each chamfered edge.
- [chamferRadius](scnshape/chamferradius.md): The width or depth of each chamfered edge. Animatable.
