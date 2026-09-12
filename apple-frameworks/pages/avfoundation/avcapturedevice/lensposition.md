> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/lensposition](https://developer.apple.com/documentation/avfoundation/avcapturedevice/lensposition)

# lensPosition (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The current focus position of the lens.

## Declaration

```swift
var lensPosition: Float { get }
```

<a id="Discussion"></a>

## Discussion

A lens position value doesn’t correspond to an exact physical distance, nor does it represent a consistent focus distance from device to device.

The range of possible positions is `0.0` to `1.0`, with `0.0` being the shortest distance at which the lens can focus and `1.0` the furthest. Note that `1.0` doesn’t represent focus at infinity. The default value is `1.0`.

This property is key-value observable.

## See Also

### Setting focus manually

- [isLockingFocusWithCustomLensPositionSupported](islockingfocuswithcustomlenspositionsupported.md): A Boolean value that indicates whether the device supports locking focus to a specific lens position.
- [currentLensPosition](currentlensposition.md): A constant that represents the current lens position.
- [setFocusModeLocked(lensPosition:completionHandler:)](setfocusmodelocked%28lensposition_completionhandler_%29.md): Locks the lens position at the specified value, and sets the focus mode to a locked state.

# lensPosition (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The current focus position of the lens.

## Declaration

```objectivec
@property (nonatomic, readonly) float lensPosition;
```

<a id="Discussion"></a>

## Discussion

A lens position value doesn’t correspond to an exact physical distance, nor does it represent a consistent focus distance from device to device.

The range of possible positions is `0.0` to `1.0`, with `0.0` being the shortest distance at which the lens can focus and `1.0` the furthest. Note that `1.0` doesn’t represent focus at infinity. The default value is `1.0`.

This property is key-value observable.

## See Also

### Setting focus manually

- [lockingFocusWithCustomLensPositionSupported](islockingfocuswithcustomlenspositionsupported.md): A Boolean value that indicates whether the device supports locking focus to a specific lens position.
- [AVCaptureLensPositionCurrent](currentlensposition.md): A constant that represents the current lens position.
- [setFocusModeLockedWithLensPosition:completionHandler:](setfocusmodelocked%28lensposition_completionhandler_%29.md): Locks the lens position at the specified value, and sets the focus mode to a locked state.
