> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisnapbehavior/init(item:snapto:)](https://developer.apple.com/documentation/uikit/uisnapbehavior/init(item:snapto:))

# init(item:snapTo:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes a snap behavior with a dynamic item and a snap point.

## Declaration

```swift
init(item: any UIDynamicItem, snapTo point: CGPoint)
```

## Parameters

- `item`: The dynamic item that you want to apply a snap behavior to.
- `point`: The point that you want the dynamic item to snap to. The coordinate system for the `point` parameter depends on how you initialize the dynamic animator you’re adding the snap behavior to, as described in the overview of [UIDynamicAnimator](../uidynamicanimator.md).

<a id="return-value"></a>

## Return Value

The initialized snap behavior, or `nil` if there was a problem initializing the object.

<a id="Discussion"></a>

## Discussion

At the conclusion of a snap, the rotation value (as indicated by the [transform](../uidynamicitem/transform.md) property) for a dynamic item is `0`.

# initWithItem:snapToPoint: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes a snap behavior with a dynamic item and a snap point.

## Declaration

```objectivec
- (instancetype) initWithItem:(id<UIDynamicItem>) item snapToPoint:(CGPoint) point;
```

## Parameters

- `item`: The dynamic item that you want to apply a snap behavior to.
- `point`: The point that you want the dynamic item to snap to. The coordinate system for the `point` parameter depends on how you initialize the dynamic animator you’re adding the snap behavior to, as described in the overview of [UIDynamicAnimator](../uidynamicanimator.md).

<a id="return-value"></a>

## Return Value

The initialized snap behavior, or `nil` if there was a problem initializing the object.

<a id="Discussion"></a>

## Discussion

At the conclusion of a snap, the rotation value (as indicated by the [transform](../uidynamicitem/transform.md) property) for a dynamic item is `0`.
