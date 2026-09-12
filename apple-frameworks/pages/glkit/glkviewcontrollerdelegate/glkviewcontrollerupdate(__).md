> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkviewcontrollerdelegate/glkviewcontrollerupdate(_:)](https://developer.apple.com/documentation/glkit/glkviewcontrollerdelegate/glkviewcontrollerupdate(_:))

# glkViewControllerUpdate(\_:) (Swift)

**Framework:** GLKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · tvOS 9.0+

Called before each frame is displayed.

## Declaration

```swift
func glkViewControllerUpdate(_ controller: GLKViewController)
```

## Parameters

- `controller`: The controller that is about to display a new frame.

<a id="Discussion"></a>

## Discussion

This method is used by your application if it wants to updates state information on each frame of animation. A typical implementation might read the controller’s [timeSinceLastUpdate](../glkviewcontroller/timesincelastupdate.md) property to determine how much time has actually passed, and use that time to calculate the positions for any objects to be rendered in the next frame.

# glkViewControllerUpdate: (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · tvOS 9.0+

Called before each frame is displayed.

## Declaration

```objectivec
- (void) glkViewControllerUpdate:(GLKViewController *) controller;
```

## Parameters

- `controller`: The controller that is about to display a new frame.

<a id="Discussion"></a>

## Discussion

This method is used by your application if it wants to updates state information on each frame of animation. A typical implementation might read the controller’s [timeSinceLastUpdate](../glkviewcontroller/timesincelastupdate.md) property to determine how much time has actually passed, and use that time to calculate the positions for any objects to be rendered in the next frame.
