> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointerlockstate](https://developer.apple.com/documentation/uikit/uipointerlockstate)

# UIPointerLockState (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An object that contains information about a scene’s pointer lock state.

## Declaration

```swift
@MainActor class UIPointerLockState
```

<a id="overview"></a>

## Overview

To prevent the pointer from triggering system gestures, for example, bringing up the dock, lock it to your application. Locking the pointer hides the pointer and locks it to just your full-screen application.

## Topics

### Checking the Lock State

- [isLocked](uipointerlockstate/islocked.md): A Boolean value that indicates whether the pointer is locked.

### Updating the Lock State

- [didChangeNotification](uipointerlockstate/didchangenotification.md): A notification that posts when the value of the locked state for a scene changes.
- [sceneUserInfoKey](uipointerlockstate/sceneuserinfokey.md): A key that reflects the new locked state.

### Structures

- [UIPointerLockState.DidChangeMessage](uipointerlockstate/didchangemessage.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# UIPointerLockState (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An object that contains information about a scene’s pointer lock state.

## Declaration

```objectivec
@interface UIPointerLockState : NSObject
```

<a id="overview"></a>

## Overview

To prevent the pointer from triggering system gestures, for example, bringing up the dock, lock it to your application. Locking the pointer hides the pointer and locks it to just your full-screen application.

## Topics

### Checking the Lock State

- [locked](uipointerlockstate/islocked.md): A Boolean value that indicates whether the pointer is locked.

### Updating the Lock State

- [UIPointerLockStateDidChangeNotification](uipointerlockstate/didchangenotification.md): A notification that posts when the value of the locked state for a scene changes.
- [UIPointerLockStateSceneUserInfoKey](uipointerlockstate/sceneuserinfokey.md): A key that reflects the new locked state.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
