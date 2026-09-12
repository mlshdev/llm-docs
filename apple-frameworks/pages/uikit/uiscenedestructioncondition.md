> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscenedestructioncondition](https://developer.apple.com/documentation/uikit/uiscenedestructioncondition)

# UISceneDestructionCondition

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Specifies when UIKit destroys the current scene.

## Declaration

```objectivec
@interface UISceneDestructionCondition : NSObject
```

## Topics

### Type Methods

- [systemDisconnection](uiscenedestructioncondition/systemdisconnection.md): The scene should be destroyed when disconnected by the system. For example, terminating the process, or rebooting the device.
- [userInitiatedDismissal](uiscenedestructioncondition/userinitiateddismissal.md): The scene should be destroyed when dismissed by the user. For example, swiping home on iOS, or tapping x on visionOS.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Specifying the scene’s destruction conditions

- [destructionConditions](uiscene/destructionconditions-1a41l.md)
