> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsessiondelegate](https://developer.apple.com/documentation/arkit/arsessiondelegate)

# ARSessionDelegate (Swift)

**Framework:** ARKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · visionOS 1.0+ (deprecated in 1.0)

Methods you can implement to receive captured video frame images and tracking state from an AR session.

## Declaration

```swift
protocol ARSessionDelegate : ARSessionObserver
```

<a id="overview"></a>

## Overview

Implement this protocol if you need to work directly with [ARFrame](arframe.md) objects captured by the session or directly follow changes to the session’s set of tracked [ARAnchor](aranchor.md) objects. Typically, you adopt this protocol when building a custom view for displaying AR content—if you display content with SceneKit or SpriteKit, the [ARSCNViewDelegate](arscnviewdelegate.md) and [ARSKViewDelegate](arskviewdelegate.md) protocols provide similar information and integrate with those technologies.

This protocol extends the [ARSessionObserver](arsessionobserver.md) protocol, so your session delegate can also implement those methods to respond to changes in session status.

## Topics

### Receiving Camera Frames

- [session(\_:didUpdate:)](arsessiondelegate/session%28__didupdate_%29-9v2kw.md): Provides a newly captured camera image and accompanying AR information to the delegate.

### Handling Content Updates

- [session(\_:didAdd:)](arsessiondelegate/session%28__didadd_%29.md): Tells the delegate that one or more anchors have been added to the session.
- [session(\_:didUpdate:)](arsessiondelegate/session%28__didupdate_%29-3qtt8.md): Tells the delegate that the session has adjusted the properties of one or more anchors.
- [session(\_:didRemove:)](arsessiondelegate/session%28__didremove_%29.md): Tells the delegate that one or more anchors have been removed from the session.

## Relationships

### Inherits From

- [ARSessionObserver](arsessionobserver.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to events

- [delegate](arsession/delegate.md): An object you provide to receive captured video images and tracking information, or to respond to changes in session status.
- [delegateQueue](arsession/delegatequeue.md): The dispatch queue through which the session calls your delegate methods.
- [ARSessionObserver](arsessionobserver.md): Deprecated. Methods you can implement to respond to changes in the state of an AR session.

# ARSessionDelegate (Objective-C)

**Framework:** ARKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Methods you can implement to receive captured video frame images and tracking state from an AR session.

## Declaration

```objectivec
@protocol ARSessionDelegate <ARSessionObserver>
```

<a id="overview"></a>

## Overview

Implement this protocol if you need to work directly with [ARFrame](arframe.md) objects captured by the session or directly follow changes to the session’s set of tracked [ARAnchor](aranchor.md) objects. Typically, you adopt this protocol when building a custom view for displaying AR content—if you display content with SceneKit or SpriteKit, the [ARSCNViewDelegate](arscnviewdelegate.md) and [ARSKViewDelegate](arskviewdelegate.md) protocols provide similar information and integrate with those technologies.

This protocol extends the [ARSessionObserver](arsessionobserver.md) protocol, so your session delegate can also implement those methods to respond to changes in session status.

## Topics

### Receiving Camera Frames

- [session:didUpdateFrame:](arsessiondelegate/session%28__didupdate_%29-9v2kw.md): Provides a newly captured camera image and accompanying AR information to the delegate.

### Handling Content Updates

- [session:didAddAnchors:](arsessiondelegate/session%28__didadd_%29.md): Tells the delegate that one or more anchors have been added to the session.
- [session:didUpdateAnchors:](arsessiondelegate/session%28__didupdate_%29-3qtt8.md): Tells the delegate that the session has adjusted the properties of one or more anchors.
- [session:didRemoveAnchors:](arsessiondelegate/session%28__didremove_%29.md): Tells the delegate that one or more anchors have been removed from the session.

## Relationships

### Inherits From

- [ARSessionObserver](arsessionobserver.md)

## See Also

### Responding to events

- [delegate](arsession/delegate.md): An object you provide to receive captured video images and tracking information, or to respond to changes in session status.
- [delegateQueue](arsession/delegatequeue.md): The dispatch queue through which the session calls your delegate methods.
- [ARSessionObserver](arsessionobserver.md): Deprecated. Methods you can implement to respond to changes in the state of an AR session.
