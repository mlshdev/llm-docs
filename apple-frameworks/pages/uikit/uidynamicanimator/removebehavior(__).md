> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicanimator/removebehavior(_:)](https://developer.apple.com/documentation/uikit/uidynamicanimator/removebehavior(_:))

# removeBehavior(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Removes a specified dynamic behavior from a dynamic animator.

## Declaration

```swift
func removeBehavior(_ behavior: UIDynamicBehavior)
```

## Parameters

- `behavior`: The dynamic behavior instance that you want to remove from the animator.

  The dynamic animator ignores your use of this method if you:

  - Provide a `nil` value
  - Provide a dynamic behavior instance that is not part of the animator’s behavior hierarchy

## See Also

### Initializing and managing a dynamic animator

- [init(referenceView:)](init%28referenceview_%29.md): Initializes a dynamic animator with a specified view as its reference view.
- [init(collectionViewLayout:)](init%28collectionviewlayout_%29.md): Initializes a dynamic animator with a specified collection view layout.
- [items(in:)](items%28in_%29.md): Returns the dynamic items, from the animator’s behaviors, that intersect a specified rectangle.
- [addBehavior(\_:)](addbehavior%28__%29.md): Adds a dynamic behavior to a dynamic animator.
- [removeAllBehaviors()](removeallbehaviors%28%29.md): Removes all of the dynamic behaviors from a dynamic animator.

# removeBehavior: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Removes a specified dynamic behavior from a dynamic animator.

## Declaration

```objectivec
- (void) removeBehavior:(UIDynamicBehavior *) behavior;
```

## Parameters

- `behavior`: The dynamic behavior instance that you want to remove from the animator.

  The dynamic animator ignores your use of this method if you:

  - Provide a `nil` value
  - Provide a dynamic behavior instance that is not part of the animator’s behavior hierarchy

## See Also

### Initializing and managing a dynamic animator

- [initWithReferenceView:](init%28referenceview_%29.md): Initializes a dynamic animator with a specified view as its reference view.
- [initWithCollectionViewLayout:](init%28collectionviewlayout_%29.md): Initializes a dynamic animator with a specified collection view layout.
- [itemsInRect:](items%28in_%29.md): Returns the dynamic items, from the animator’s behaviors, that intersect a specified rectangle.
- [addBehavior:](addbehavior%28__%29.md): Adds a dynamic behavior to a dynamic animator.
- [removeAllBehaviors](removeallbehaviors%28%29.md): Removes all of the dynamic behaviors from a dynamic animator.
