> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arcoachingoverlayviewdelegate](https://developer.apple.com/documentation/arkit/arcoachingoverlayviewdelegate)

# ARCoachingOverlayViewDelegate (Swift)

**Framework:** ARKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · visionOS 1.0+ (deprecated in 1.0)

A set of callbacks you implement to be notified of coaching events.

## Declaration

```swift
protocol ARCoachingOverlayViewDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Implement a delegate to coordinate your app’s actions with coaching overlay. For example, when the coaching overlay determines the user needs guidance, you hide your app’s UI to allow the user to focus on the coaching experience. When the coaching overlay determines the [goal](arcoachingoverlayview/goal-swift.property.md) is met, you show your app’s UI and begin your app’s AR experience.

## Topics

### Enabling Coaching

- [coachingOverlayViewWillActivate(\_:)](arcoachingoverlayviewdelegate/coachingoverlayviewwillactivate%28__%29.md): Tells you when the coaching overlay view activates.
- [coachingOverlayViewDidDeactivate(\_:)](arcoachingoverlayviewdelegate/coachingoverlayviewdiddeactivate%28__%29.md): Tells you when the coaching experience is completely deactivated.

### Restarting the Session

- [coachingOverlayViewDidRequestSessionReset(\_:)](arcoachingoverlayviewdelegate/coachingoverlayviewdidrequestsessionreset%28__%29.md): Tells you when the user taps the coaching overlay view’s Start Over button while the session is relocalizing.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Delegating Events

- [delegate](arcoachingoverlayview/delegate.md): An object you supply that implements coaching event callbacks.

# ARCoachingOverlayViewDelegate (Objective-C)

**Framework:** ARKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A set of callbacks you implement to be notified of coaching events.

## Declaration

```objectivec
@protocol ARCoachingOverlayViewDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Implement a delegate to coordinate your app’s actions with coaching overlay. For example, when the coaching overlay determines the user needs guidance, you hide your app’s UI to allow the user to focus on the coaching experience. When the coaching overlay determines the [goal](arcoachingoverlayview/goal-swift.property.md) is met, you show your app’s UI and begin your app’s AR experience.

## Topics

### Enabling Coaching

- [coachingOverlayViewWillActivate:](arcoachingoverlayviewdelegate/coachingoverlayviewwillactivate%28__%29.md): Tells you when the coaching overlay view activates.
- [coachingOverlayViewDidDeactivate:](arcoachingoverlayviewdelegate/coachingoverlayviewdiddeactivate%28__%29.md): Tells you when the coaching experience is completely deactivated.

### Restarting the Session

- [coachingOverlayViewDidRequestSessionReset:](arcoachingoverlayviewdelegate/coachingoverlayviewdidrequestsessionreset%28__%29.md): Tells you when the user taps the coaching overlay view’s Start Over button while the session is relocalizing.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Delegating Events

- [delegate](arcoachingoverlayview/delegate.md): An object you supply that implements coaching event callbacks.
