> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsession/delegate](https://developer.apple.com/documentation/arkit/arsession/delegate)

# delegate (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

An object you provide to receive captured video images and tracking information, or to respond to changes in session status.

## Declaration

```swift
weak var delegate: (any ARSessionDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

If you use the [ARSCNView](../arscnview.md) or [ARSKView](../arskview.md) class to display your AR experience, a session delegate isn’t necessary. Those views automatically display captured video images and coordinate SceneKit or SpriteKit content to track device and camera motion.

If you create your own visualization for an AR experience using Metal or other rendering technologies, set a session delegate. Your delegate object periodically receives [ARFrame](../arframe.md) objects captured by the session. These objects contain video frame images for you to display and AR scene information you can use to coordinate display of the scene elements you render.

## See Also

### Responding to events

- [delegateQueue](delegatequeue.md): The dispatch queue through which the session calls your delegate methods.
- [ARSessionDelegate](../arsessiondelegate.md): Deprecated. Methods you can implement to receive captured video frame images and tracking state from an AR session.
- [ARSessionObserver](../arsessionobserver.md): Deprecated. Methods you can implement to respond to changes in the state of an AR session.

# delegate (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

An object you provide to receive captured video images and tracking information, or to respond to changes in session status.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<ARSessionDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

If you use the [ARSCNView](../arscnview.md) or [ARSKView](../arskview.md) class to display your AR experience, a session delegate isn’t necessary. Those views automatically display captured video images and coordinate SceneKit or SpriteKit content to track device and camera motion.

If you create your own visualization for an AR experience using Metal or other rendering technologies, set a session delegate. Your delegate object periodically receives [ARFrame](../arframe.md) objects captured by the session. These objects contain video frame images for you to display and AR scene information you can use to coordinate display of the scene elements you render.

## See Also

### Responding to events

- [delegateQueue](delegatequeue.md): The dispatch queue through which the session calls your delegate methods.
- [ARSessionDelegate](../arsessiondelegate.md): Deprecated. Methods you can implement to receive captured video frame images and tracking state from an AR session.
- [ARSessionObserver](../arsessionobserver.md): Deprecated. Methods you can implement to respond to changes in the state of an AR session.
