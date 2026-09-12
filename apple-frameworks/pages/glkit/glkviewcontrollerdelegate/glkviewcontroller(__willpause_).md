> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkviewcontrollerdelegate/glkviewcontroller(_:willpause:)](https://developer.apple.com/documentation/glkit/glkviewcontrollerdelegate/glkviewcontroller(_:willpause:))

# glkViewController(\_:willPause:) (Swift)

**Framework:** GLKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · tvOS 9.0+

Called before the rendering loop is paused or resumed.

## Declaration

```swift
optional func glkViewController(_ controller: GLKViewController, willPause pause: Bool)
```

## Parameters

- `controller`: The controller that is about to change the rendering loop state.
- `pause`: [true](https://developer.apple.com/documentation/swift/true) if the loop is being paused, [false](https://developer.apple.com/documentation/swift/false) if it is being resumed.

# glkViewController:willPause: (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · tvOS 9.0+

Called before the rendering loop is paused or resumed.

## Declaration

```objectivec
- (void) glkViewController:(GLKViewController *) controller willPause:(BOOL) pause;
```

## Parameters

- `controller`: The controller that is about to change the rendering loop state.
- `pause`: [true](https://developer.apple.com/documentation/swift/true) if the loop is being paused, [false](https://developer.apple.com/documentation/swift/false) if it is being resumed.
