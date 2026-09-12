> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/drawable/state-swift.enum](https://developer.apple.com/documentation/compositorservices/layerrenderer/drawable/state-swift.enum)

# LayerRenderer.Drawable.State (Swift)

**Framework:** Compositor Services  
**Kind:** Enumeration  
**Availability:** macOS 26.0+ · visionOS 1.0+

The state of ownership for the drawable.

## Declaration

```swift
enum State
```

<a id="overview"></a>

## Overview

Use these constants to determine whether the drawable is ready for you to use. When the drawable is in the [LayerRenderer.Drawable.State.rendering](state-swift.enum/rendering.md)  state, you can begin drawing. Other states indicate the drawable is either busy or not assigned to a frame.

## Topics

### Getting the states

- [LayerRenderer.Drawable.State.available](state-swift.enum/available.md): A drawable that’s not in use and ready for assignment to a frame.
- [LayerRenderer.Drawable.State.presenting](state-swift.enum/presenting.md): A drawable that the compositor is currently displaying.
- [LayerRenderer.Drawable.State.rendering](state-swift.enum/rendering.md): A drawable that’s assigned to a frame and ready to accept your drawing commands.

### Initializers

- [init(rawValue:)](state-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the state machine

- [state](state-swift.property.md): The current operational state of a drawable instance.

# cp_drawable_state (Objective-C)

**Framework:** Compositor Services  
**Kind:** Enumeration  
**Availability:** macOS 26.0+ · visionOS 1.0+

The state of ownership for the drawable.

## Declaration

```objectivec
enum cp_drawable_state : uint32_t;
```

<a id="overview"></a>

## Overview

Use these constants to determine whether the drawable is ready for you to use. When the drawable is in the [cp_drawable_state_rendering](state-swift.enum/rendering.md)  state, you can begin drawing. Other states indicate the drawable is either busy or not assigned to a frame.

## Topics

### Getting the states

- [cp_drawable_state_available](state-swift.enum/available.md): A drawable that’s not in use and ready for assignment to a frame.
- [cp_drawable_state_presenting](state-swift.enum/presenting.md): A drawable that the compositor is currently displaying.
- [cp_drawable_state_rendering](state-swift.enum/rendering.md): A drawable that’s assigned to a frame and ready to accept your drawing commands.

## See Also

### Managing the state machine

- [cp_drawable_get_state](state-swift.property.md): The current operational state of a drawable instance.
