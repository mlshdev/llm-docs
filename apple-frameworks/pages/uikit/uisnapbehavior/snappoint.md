> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisnapbehavior/snappoint](https://developer.apple.com/documentation/uikit/uisnapbehavior/snappoint)

# snapPoint (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The point to which to snap.

## Declaration

```swift
var snapPoint: CGPoint { get set }
```

<a id="Discussion"></a>

## Discussion

The initial value of this property is the value you passed in to the [init(item:snapTo:)](init%28item_snapto_%29.md) method. Changing this value updates the dynamic item and potentially puts it in motion again.

The coordinate system of the point depends on how you initialized the underlying dynamic animator, as described in the overview of [UIDynamicAnimator](../uidynamicanimator.md).

## See Also

### Configuring a snap behavior

- [damping](damping.md): The amount of oscillation of a dynamic item during the conclusion of a snap.

# snapPoint (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The point to which to snap.

## Declaration

```objectivec
@property (nonatomic, assign) CGPoint snapPoint;
```

<a id="Discussion"></a>

## Discussion

The initial value of this property is the value you passed in to the [initWithItem:snapToPoint:](init%28item_snapto_%29.md) method. Changing this value updates the dynamic item and potentially puts it in motion again.

The coordinate system of the point depends on how you initialized the underlying dynamic animator, as described in the overview of [UIDynamicAnimator](../uidynamicanimator.md).

## See Also

### Configuring a snap behavior

- [damping](damping.md): The amount of oscillation of a dynamic item during the conclusion of a snap.
