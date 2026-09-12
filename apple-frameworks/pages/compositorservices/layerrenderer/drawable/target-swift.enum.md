> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/drawable/target-swift.enum](https://developer.apple.com/documentation/compositorservices/layerrenderer/drawable/target-swift.enum)

# LayerRenderer.Drawable.Target (Swift)

**Framework:** Compositor Services  
**Kind:** Enumeration  
**Availability:** macOS 26.0+ · visionOS 26.0+

The target where the drawable will be displayed/used.

## Declaration

```swift
enum Target
```

<a id="overview"></a>

## Overview

Use these constants to determine whether content should be drawn for certain targets.

## Topics

### Enumeration Cases

- [LayerRenderer.Drawable.Target.builtIn](target-swift.enum/builtin.md): A drawable that is targeting the built-in display, this is what a user will see in the device.
- [LayerRenderer.Drawable.Target.capture](target-swift.enum/capture.md): A drawable that will be used for capture purposes, this could be used for video or AirPlay streaming and will be visible to users outside of the device.

### Initializers

- [init(rawValue:)](target-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Retrieving the target

- [target](target-swift.property.md): Returns a value that indicates the target of the drawable type.

# cp_drawable_target (Objective-C)

**Framework:** Compositor Services  
**Kind:** Enumeration  
**Availability:** macOS 26.0+ · visionOS 26.0+

The target where the drawable will be displayed/used.

## Declaration

```objectivec
enum cp_drawable_target : uint32_t;
```

<a id="overview"></a>

## Overview

Use these constants to determine whether content should be drawn for certain targets.

## Topics

### Enumeration Cases

- [cp_drawable_target_built_in](target-swift.enum/builtin.md): A drawable that is targeting the built-in display, this is what a user will see in the device.
- [cp_drawable_target_capture](target-swift.enum/capture.md): A drawable that will be used for capture purposes, this could be used for video or AirPlay streaming and will be visible to users outside of the device.

## See Also

### Retrieving the target

- [cp_drawable_get_target](target-swift.property.md): Returns a value that indicates the target of the drawable type.
