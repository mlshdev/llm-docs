> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsvisualeffectview/state-swift.enum](https://developer.apple.com/documentation/appkit/nsvisualeffectview/state-swift.enum)

# NSVisualEffectView.State (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.10+

Constants to specify how the material appearance should reflect window activity state.

## Declaration

```swift
enum State
```

## Topics

### Visual Effect View States

- [NSVisualEffectView.State.followsWindowActiveState](state-swift.enum/followswindowactivestate.md): The backdrop should automatically appear active when the window is active, and inactive when it is not.
- [NSVisualEffectView.State.active](state-swift.enum/active.md): The backdrop should always appear active.
- [NSVisualEffectView.State.inactive](state-swift.enum/inactive.md): The backdrop should always appear inactive.

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

### Enabling or Disabling the Effect

- [state](state-swift.property.md): A value that indicates whether a view has a visual effect applied.

# NSVisualEffectState (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.10+

Constants to specify how the material appearance should reflect window activity state.

## Declaration

```objectivec
enum NSVisualEffectState : NSInteger;
```

## Topics

### Visual Effect View States

- [NSVisualEffectStateFollowsWindowActiveState](state-swift.enum/followswindowactivestate.md): The backdrop should automatically appear active when the window is active, and inactive when it is not.
- [NSVisualEffectStateActive](state-swift.enum/active.md): The backdrop should always appear active.
- [NSVisualEffectStateInactive](state-swift.enum/inactive.md): The backdrop should always appear inactive.

## See Also

### Enabling or Disabling the Effect

- [state](state-swift.property.md): A value that indicates whether a view has a visual effect applied.
