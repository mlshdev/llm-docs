> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/drawable/trackingarea/identifier-swift.struct](https://developer.apple.com/documentation/compositorservices/layerrenderer/drawable/trackingarea/identifier-swift.struct)

# LayerRenderer.Drawable.TrackingArea.Identifier (Swift)

**Framework:** Compositor Services  
**Kind:** Structure  
**Availability:** macOS 26.0+ · visionOS 26.0+

An identifier for the tracking area.

## Declaration

```swift
struct Identifier
```

<a id="overview"></a>

## Overview

All tracking areas should have a unique value in a frame. This value should be constant for the same rendered mesh/object across frames to ensure tracking areas are identifiable between frames. There is no reserved values so all values are considered valid but should be unique.

## Topics

### Initializers

- [init(\_:)](identifier-swift.struct/init%28__%29.md)
- [init(rawValue:)](identifier-swift.struct/init%28rawvalue_%29.md)

### Type Properties

- [invalid](identifier-swift.struct/invalid.md): Identifier reserved as invalid.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# cp_tracking_area_identifier (Objective-C)

**Framework:** Compositor Services  
**Kind:** Type Alias  
**Availability:** macOS 26.0+ · visionOS 26.0+

An identifier for the tracking area.

## Declaration

```objectivec
typedef uint64_t cp_tracking_area_identifier;
```

<a id="overview"></a>

## Overview

All tracking areas should have a unique value in a frame. This value should be constant for the same rendered mesh/object across frames to ensure tracking areas are identifiable between frames. There is no reserved values so all values are considered valid but should be unique.
