> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicanimator/delegate](https://developer.apple.com/documentation/uikit/uidynamicanimator/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The delegate for responding to pausing or resumption of animation.

## Declaration

```swift
weak var delegate: (any UIDynamicAnimatorDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The methods for a dynamic animator delegate are described in [UIDynamicAnimatorDelegate](../uidynamicanimatordelegate.md).

## See Also

### Responding to animation changes

- [UIDynamicAnimatorDelegate](../uidynamicanimatordelegate.md): To respond to the pausing or resumption of UIKit dynamic animation, configure a custom class to adopt the [UIDynamicAnimatorDelegate](../uidynamicanimatordelegate.md) protocol. Then, in a dynamic animator (an instance of the [UIDynamicAnimator](../uidynamicanimator.md) class), set the delegate to be an instance of your custom class.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The delegate for responding to pausing or resumption of animation.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UIDynamicAnimatorDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The methods for a dynamic animator delegate are described in [UIDynamicAnimatorDelegate](../uidynamicanimatordelegate.md).

## See Also

### Responding to animation changes

- [UIDynamicAnimatorDelegate](../uidynamicanimatordelegate.md): To respond to the pausing or resumption of UIKit dynamic animation, configure a custom class to adopt the [UIDynamicAnimatorDelegate](../uidynamicanimatordelegate.md) protocol. Then, in a dynamic animator (an instance of the [UIDynamicAnimator](../uidynamicanimator.md) class), set the delegate to be an instance of your custom class.
