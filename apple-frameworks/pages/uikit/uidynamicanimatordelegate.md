> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicanimatordelegate](https://developer.apple.com/documentation/uikit/uidynamicanimatordelegate)

# UIDynamicAnimatorDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

To respond to the pausing or resumption of UIKit dynamic animation, configure a custom class to adopt the [UIDynamicAnimatorDelegate](uidynamicanimatordelegate.md) protocol. Then, in a dynamic animator (an instance of the [UIDynamicAnimator](uidynamicanimator.md) class), set the delegate to be an instance of your custom class.

## Declaration

```swift
@MainActor protocol UIDynamicAnimatorDelegate : NSObjectProtocol
```

## Topics

### Responding to animation pausing and resumption

- [dynamicAnimatorDidPause(\_:)](uidynamicanimatordelegate/dynamicanimatordidpause%28__%29.md): Called when a dynamic animator pauses the animations for its behaviors’ associated dynamic items.
- [dynamicAnimatorWillResume(\_:)](uidynamicanimatordelegate/dynamicanimatorwillresume%28__%29.md): Called when a dynamic animator is about to resume the animations for its behaviors’ associated dynamic items.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to animation changes

- [delegate](uidynamicanimator/delegate.md): The delegate for responding to pausing or resumption of animation.

# UIDynamicAnimatorDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

To respond to the pausing or resumption of UIKit dynamic animation, configure a custom class to adopt the [UIDynamicAnimatorDelegate](uidynamicanimatordelegate.md) protocol. Then, in a dynamic animator (an instance of the [UIDynamicAnimator](uidynamicanimator.md) class), set the delegate to be an instance of your custom class.

## Declaration

```objectivec
@protocol UIDynamicAnimatorDelegate <NSObject>
```

## Topics

### Responding to animation pausing and resumption

- [dynamicAnimatorDidPause:](uidynamicanimatordelegate/dynamicanimatordidpause%28__%29.md): Called when a dynamic animator pauses the animations for its behaviors’ associated dynamic items.
- [dynamicAnimatorWillResume:](uidynamicanimatordelegate/dynamicanimatorwillresume%28__%29.md): Called when a dynamic animator is about to resume the animations for its behaviors’ associated dynamic items.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to animation changes

- [delegate](uidynamicanimator/delegate.md): The delegate for responding to pausing or resumption of animation.
