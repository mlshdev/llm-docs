> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspringloadingoptions/nohover](https://developer.apple.com/documentation/appkit/nsspringloadingoptions/nohover)

# noHover (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.11+

Spring-loading on the destination object is enabled, but cannot be invoked by hovering. The user can drag an object over a destination object and force click to initiate spring-loading and activate the destination object. This option may be useful in situations where a long hover, such as dragging across a large destination object, initiates undesired spring-loading. Use this constant sparingly.

## Declaration

```swift
static var noHover: NSSpringLoadingOptions { get }
```

## See Also

### Constants

- [disabled](disabled.md): Spring-loading on the destination object is disabled. No spring-loading operations can occur.
- [enabled](enabled.md): Spring-loading on the destination object is enabled. The user can drag an object over a destination object and hover or force click to initiate spring-loading and activate the destination object. When initiated by a force click, spring-loading is invoked once the force click is released.
- [continuousActivation](continuousactivation.md): Spring-loading on the destination object is enabled. The user can drag an object over a destination object and hover or force click to initiate spring-loading and activate the destination object. When initiated by a force click, spring-loading is invoked once the force click begins and deactivated when the force click is released. When initiated by hovering, spring-loading is invoked at the hover timeout and deactivated when the drag exits the destination object. Use this constant sparingly.

# NSSpringLoadingNoHover (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.11+

Spring-loading on the destination object is enabled, but cannot be invoked by hovering. The user can drag an object over a destination object and force click to initiate spring-loading and activate the destination object. This option may be useful in situations where a long hover, such as dragging across a large destination object, initiates undesired spring-loading. Use this constant sparingly.

## Declaration

```objectivec
NSSpringLoadingNoHover
```

## See Also

### Constants

- [NSSpringLoadingDisabled](disabled.md): Spring-loading on the destination object is disabled. No spring-loading operations can occur.
- [NSSpringLoadingEnabled](enabled.md): Spring-loading on the destination object is enabled. The user can drag an object over a destination object and hover or force click to initiate spring-loading and activate the destination object. When initiated by a force click, spring-loading is invoked once the force click is released.
- [NSSpringLoadingContinuousActivation](continuousactivation.md): Spring-loading on the destination object is enabled. The user can drag an object over a destination object and hover or force click to initiate spring-loading and activate the destination object. When initiated by a force click, spring-loading is invoked once the force click begins and deactivated when the force click is released. When initiated by hovering, spring-loading is invoked at the hover timeout and deactivated when the drag exits the destination object. Use this constant sparingly.
