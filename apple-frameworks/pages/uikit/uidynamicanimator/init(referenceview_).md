> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicanimator/init(referenceview:)](https://developer.apple.com/documentation/uikit/uidynamicanimator/init(referenceview:))

# init(referenceView:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes a dynamic animator with a specified view as its reference view.

## Declaration

```swift
init(referenceView view: UIView)
```

## Parameters

- `view`: The view for the dynamic animator, called the *reference view*.

<a id="return-value"></a>

## Return Value

The initialized dynamic animator, or `nil` if there was a problem initializing the object.

<a id="Discussion"></a>

## Discussion

When you initialize a dynamic animator with this method, the behaviors (and their dynamic items) that you add to the animator employ the reference view’s coordinate system.

## See Also

### Initializing and managing a dynamic animator

- [init(collectionViewLayout:)](init%28collectionviewlayout_%29.md): Initializes a dynamic animator with a specified collection view layout.
- [items(in:)](items%28in_%29.md): Returns the dynamic items, from the animator’s behaviors, that intersect a specified rectangle.
- [addBehavior(\_:)](addbehavior%28__%29.md): Adds a dynamic behavior to a dynamic animator.
- [removeBehavior(\_:)](removebehavior%28__%29.md): Removes a specified dynamic behavior from a dynamic animator.
- [removeAllBehaviors()](removeallbehaviors%28%29.md): Removes all of the dynamic behaviors from a dynamic animator.

# initWithReferenceView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes a dynamic animator with a specified view as its reference view.

## Declaration

```objectivec
- (instancetype) initWithReferenceView:(UIView *) view;
```

## Parameters

- `view`: The view for the dynamic animator, called the *reference view*.

<a id="return-value"></a>

## Return Value

The initialized dynamic animator, or `nil` if there was a problem initializing the object.

<a id="Discussion"></a>

## Discussion

When you initialize a dynamic animator with this method, the behaviors (and their dynamic items) that you add to the animator employ the reference view’s coordinate system.

## See Also

### Initializing and managing a dynamic animator

- [initWithCollectionViewLayout:](init%28collectionviewlayout_%29.md): Initializes a dynamic animator with a specified collection view layout.
- [itemsInRect:](items%28in_%29.md): Returns the dynamic items, from the animator’s behaviors, that intersect a specified rectangle.
- [addBehavior:](addbehavior%28__%29.md): Adds a dynamic behavior to a dynamic animator.
- [removeBehavior:](removebehavior%28__%29.md): Removes a specified dynamic behavior from a dynamic animator.
- [removeAllBehaviors](removeallbehaviors%28%29.md): Removes all of the dynamic behaviors from a dynamic animator.
