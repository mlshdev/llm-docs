> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticengine/resethandler-swift.typealias](https://developer.apple.com/documentation/corehaptics/chhapticengine/resethandler-swift.typealias)

# CHHapticEngine.ResetHandler (Swift)

**Framework:** Core Haptics  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

A typealias for the block that the haptic engine calls after being reset.

## Declaration

```swift
typealias ResetHandler = () -> Void
```

## See Also

### Handling Haptic Engine Resets

- [resetHandler](resethandler-swift.property.md): A block that the haptic engine calls after recovering from a haptic server error.

# CHHapticEngineResetHandler (Objective-C)

**Framework:** Core Haptics  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

A typealias for the block that the haptic engine calls after being reset.

## Declaration

```objectivec
typedef void (^)(void) CHHapticEngineResetHandler;
```

## See Also

### Handling Haptic Engine Resets

- [resetHandler](resethandler-swift.property.md): A block that the haptic engine calls after recovering from a haptic server error.
