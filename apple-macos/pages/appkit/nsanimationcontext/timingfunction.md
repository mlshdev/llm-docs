> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimationcontext/timingfunction](https://developer.apple.com/documentation/appkit/nsanimationcontext/timingfunction)

# timingFunction (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The timing function used for all animations within this animation proxy group.

## Declaration

```swift
var timingFunction: CAMediaTimingFunction? { get set }
```

<a id="Discussion"></a>

## Discussion

The NSAnimationContext timing function is analogous to the CATransaction [setAnimationTimingFunction(\_:)](https://developer.apple.com/documentation/quartzcore/catransaction/setanimationtimingfunction%28_:%29) method.

Animations initiated through the “animator” proxy syntax, that do not have an explicitly specified timing functions, will inherit the enclosing `NSAnimationContext` instance’s [timingFunction](timingfunction.md) if it is not `nil` (which is the default).

As with the existing [duration](duration.md) property, changing a timing function causes the same change in the underlying CATransaction instance’s [animationTimingFunction()](https://developer.apple.com/documentation/quartzcore/catransaction/animationtimingfunction%28%29).

Also as with the [duration](duration.md) property, you may change the timingFunction any number of times within a given NSAnimationContext [beginGrouping()](begingrouping%28%29.md) and [endGrouping()](endgrouping%28%29.md) block. Changes to the `timingFunction` will apply to any animations that are subsequently initiated in that NSAnimationContext grouping, until the `timingFunction` is possibly changed again.

## See Also

### Modifying the Animation Duration

- [duration](duration.md): The duration used by animations created as a result of setting new values for an animatable property.

# timingFunction (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The timing function used for all animations within this animation proxy group.

## Declaration

```objectivec
@property (strong, nullable) CAMediaTimingFunction * timingFunction;
```

<a id="Discussion"></a>

## Discussion

The NSAnimationContext timing function is analogous to the CATransaction [setAnimationTimingFunction:](https://developer.apple.com/documentation/quartzcore/catransaction/setanimationtimingfunction%28_:%29) method.

Animations initiated through the “animator” proxy syntax, that do not have an explicitly specified timing functions, will inherit the enclosing `NSAnimationContext` instance’s [timingFunction](timingfunction.md) if it is not `nil` (which is the default).

As with the existing [duration](duration.md) property, changing a timing function causes the same change in the underlying CATransaction instance’s [animationTimingFunction](https://developer.apple.com/documentation/quartzcore/catransaction/animationtimingfunction%28%29).

Also as with the [duration](duration.md) property, you may change the timingFunction any number of times within a given NSAnimationContext [beginGrouping](begingrouping%28%29.md) and [endGrouping](endgrouping%28%29.md) block. Changes to the `timingFunction` will apply to any animations that are subsequently initiated in that NSAnimationContext grouping, until the `timingFunction` is possibly changed again.

## See Also

### Modifying the Animation Duration

- [duration](duration.md): The duration used by animations created as a result of setting new values for an animatable property.
