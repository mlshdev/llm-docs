> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspringloadingoptions](https://developer.apple.com/documentation/appkit/nsspringloadingoptions)

# NSSpringLoadingOptions (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.11+

These constants denote the type of spring-loading behavior configured for the destination object.

## Declaration

```swift
struct NSSpringLoadingOptions
```

## Topics

### Constants

- [disabled](nsspringloadingoptions/disabled.md): Spring-loading on the destination object is disabled. No spring-loading operations can occur.
- [enabled](nsspringloadingoptions/enabled.md): Spring-loading on the destination object is enabled. The user can drag an object over a destination object and hover or force click to initiate spring-loading and activate the destination object. When initiated by a force click, spring-loading is invoked once the force click is released.
- [continuousActivation](nsspringloadingoptions/continuousactivation.md): Spring-loading on the destination object is enabled. The user can drag an object over a destination object and hover or force click to initiate spring-loading and activate the destination object. When initiated by a force click, spring-loading is invoked once the force click begins and deactivated when the force click is released. When initiated by hovering, spring-loading is invoked at the hover timeout and deactivated when the drag exits the destination object. Use this constant sparingly.
- [noHover](nsspringloadingoptions/nohover.md): Spring-loading on the destination object is enabled, but cannot be invoked by hovering. The user can drag an object over a destination object and force click to initiate spring-loading and activate the destination object. This option may be useful in situations where a long hover, such as dragging across a large destination object, initiates undesired spring-loading. Use this constant sparingly.

### Initializers

- [init(rawValue:)](nsspringloadingoptions/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# NSSpringLoadingOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.11+

These constants denote the type of spring-loading behavior configured for the destination object.

## Declaration

```objectivec
enum NSSpringLoadingOptions : NSUInteger;
```

## Topics

### Constants

- [NSSpringLoadingDisabled](nsspringloadingoptions/disabled.md): Spring-loading on the destination object is disabled. No spring-loading operations can occur.
- [NSSpringLoadingEnabled](nsspringloadingoptions/enabled.md): Spring-loading on the destination object is enabled. The user can drag an object over a destination object and hover or force click to initiate spring-loading and activate the destination object. When initiated by a force click, spring-loading is invoked once the force click is released.
- [NSSpringLoadingContinuousActivation](nsspringloadingoptions/continuousactivation.md): Spring-loading on the destination object is enabled. The user can drag an object over a destination object and hover or force click to initiate spring-loading and activate the destination object. When initiated by a force click, spring-loading is invoked once the force click begins and deactivated when the force click is released. When initiated by hovering, spring-loading is invoked at the hover timeout and deactivated when the drag exits the destination object. Use this constant sparingly.
- [NSSpringLoadingNoHover](nsspringloadingoptions/nohover.md): Spring-loading on the destination object is enabled, but cannot be invoked by hovering. The user can drag an object over a destination object and force click to initiate spring-loading and activate the destination object. This option may be useful in situations where a long hover, such as dragging across a large destination object, initiates undesired spring-loading. Use this constant sparingly.
