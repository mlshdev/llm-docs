> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticengine/isautoshutdownenabled](https://developer.apple.com/documentation/corehaptics/chhapticengine/isautoshutdownenabled)

# isAutoShutdownEnabled (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that indicates whether the haptic engine starts and stops automatically on request from one of its pattern players, or when idle.

## Declaration

```swift
var isAutoShutdownEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If you manually manage the engine’s life cycle, save power by stopping the engine when it’s not in use. You can enable the engine to automatically manage this behavior by setting the value to [true](https://developer.apple.com/documentation/swift/true). When this property is enabled, the engine shuts down after approximately two minutes of inactivity.

Delegating this responsibility to the framework makes the engine more manageable, but you no longer have fine-grained control of its life cycle.

The default value is [false](https://developer.apple.com/documentation/swift/false).

# autoShutdownEnabled (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that indicates whether the haptic engine starts and stops automatically on request from one of its pattern players, or when idle.

## Declaration

```objectivec
@property (nonatomic, getter=isAutoShutdownEnabled) BOOL autoShutdownEnabled;
```

<a id="Discussion"></a>

## Discussion

If you manually manage the engine’s life cycle, save power by stopping the engine when it’s not in use. You can enable the engine to automatically manage this behavior by setting the value to [true](https://developer.apple.com/documentation/swift/true). When this property is enabled, the engine shuts down after approximately two minutes of inactivity.

Delegating this responsibility to the framework makes the engine more manageable, but you no longer have fine-grained control of its life cycle.

The default value is [false](https://developer.apple.com/documentation/swift/false).
