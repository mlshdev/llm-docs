> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscene/pointerlockstate](https://developer.apple.com/documentation/uikit/uiscene/pointerlockstate)

# pointerLockState (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The pointer lock state for the scene.

## Declaration

```swift
var pointerLockState: UIPointerLockState? { get }
```

<a id="Discussion"></a>

## Discussion

If a scene can’t lock the pointer, this property is `nil`.

## See Also

### Getting the pointer lock state

- [UIPointerLockState](../uipointerlockstate.md): An object that contains information about a scene’s pointer lock state.

# pointerLockState (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The pointer lock state for the scene.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIPointerLockState * pointerLockState;
```

<a id="Discussion"></a>

## Discussion

If a scene can’t lock the pointer, this property is `nil`.

## See Also

### Getting the pointer lock state

- [UIPointerLockState](../uipointerlockstate.md): An object that contains information about a scene’s pointer lock state.
