> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaugrapherr_invalidconnection](https://developer.apple.com/documentation/audiotoolbox/kaugrapherr_invalidconnection)

# kAUGraphErr_InvalidConnection (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The attempted connection between two nodes cannot be made.

## Declaration

```swift
var kAUGraphErr_InvalidConnection: OSStatus { get }
```

## See Also

### Constants

- [kAUGraphErr_CannotDoInCurrentContext](kaugrapherr_cannotdoincurrentcontext.md): To avoid spinning or waiting in the render thread (a bad idea!), many of the calls to AUGraph can return: `kAUGraphErr_CannotDoInCurrentContext`. This result is only generated when you call an AUGraph API from its render callback. It means that the lock that it required was held at that time, by another thread. If you see this result code, you can generally attempt the action again - typically the NEXT render cycle (so in the mean time the lock can be cleared), or you can delegate that call to another thread in your app. You should not spin or put-to-sleep the render thread.
- [kAUGraphErr_InvalidAudioUnit](kaugrapherr_invalidaudiounit.md)
- [kAUGraphErr_NodeNotFound](kaugrapherr_nodenotfound.md): The specified node cannot be found.
- [kAUGraphErr_OutputNodeErr](kaugrapherr_outputnodeerr.md): Audio processing graphs can only contain one output unit. This error is returned if trying to add a second output unit or if the graph’s output unit is removed while the graph is running.

# kAUGraphErr_InvalidConnection (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The attempted connection between two nodes cannot be made.

## Declaration

```objectivec
kAUGraphErr_InvalidConnection
```

## See Also

### Constants

- [kAUGraphErr_CannotDoInCurrentContext](kaugrapherr_cannotdoincurrentcontext.md): To avoid spinning or waiting in the render thread (a bad idea!), many of the calls to AUGraph can return: `kAUGraphErr_CannotDoInCurrentContext`. This result is only generated when you call an AUGraph API from its render callback. It means that the lock that it required was held at that time, by another thread. If you see this result code, you can generally attempt the action again - typically the NEXT render cycle (so in the mean time the lock can be cleared), or you can delegate that call to another thread in your app. You should not spin or put-to-sleep the render thread.
- [kAUGraphErr_InvalidAudioUnit](kaugrapherr_invalidaudiounit.md)
- [kAUGraphErr_NodeNotFound](kaugrapherr_nodenotfound.md): The specified node cannot be found.
- [kAUGraphErr_OutputNodeErr](kaugrapherr_outputnodeerr.md): Audio processing graphs can only contain one output unit. This error is returned if trying to add a second output unit or if the graph’s output unit is removed while the graph is running.
