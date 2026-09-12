> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicanimator/addbehavior(_:)](https://developer.apple.com/documentation/uikit/uidynamicanimator/addbehavior(_:))

# addBehavior(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Adds a dynamic behavior to a dynamic animator.

## Declaration

```swift
func addBehavior(_ behavior: UIDynamicBehavior)
```

## Parameters

- `behavior`: The dynamic behavior instance you are adding.

  The dynamic animator ignores your use of this method if you:

  - Provide a `nil` value
  - Provide a behavior instance that you’ve already added to the animator at the same level in the behavior hierarchy

  > **Important**

  >  The dynamic animator raises an exception if you provide a behavior instance that you’ve already added to the animator at a different level in the behavior hierarchy.

## See Also

### Initializing and managing a dynamic animator

- [init(referenceView:)](init%28referenceview_%29.md): Initializes a dynamic animator with a specified view as its reference view.
- [init(collectionViewLayout:)](init%28collectionviewlayout_%29.md): Initializes a dynamic animator with a specified collection view layout.
- [items(in:)](items%28in_%29.md): Returns the dynamic items, from the animator’s behaviors, that intersect a specified rectangle.
- [removeBehavior(\_:)](removebehavior%28__%29.md): Removes a specified dynamic behavior from a dynamic animator.
- [removeAllBehaviors()](removeallbehaviors%28%29.md): Removes all of the dynamic behaviors from a dynamic animator.

# addBehavior: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Adds a dynamic behavior to a dynamic animator.

## Declaration

```objectivec
- (void) addBehavior:(UIDynamicBehavior *) behavior;
```

## Parameters

- `behavior`: The dynamic behavior instance you are adding.

  The dynamic animator ignores your use of this method if you:

  - Provide a `nil` value
  - Provide a behavior instance that you’ve already added to the animator at the same level in the behavior hierarchy

  > **Important**

  >  The dynamic animator raises an exception if you provide a behavior instance that you’ve already added to the animator at a different level in the behavior hierarchy.

## See Also

### Initializing and managing a dynamic animator

- [initWithReferenceView:](init%28referenceview_%29.md): Initializes a dynamic animator with a specified view as its reference view.
- [initWithCollectionViewLayout:](init%28collectionviewlayout_%29.md): Initializes a dynamic animator with a specified collection view layout.
- [itemsInRect:](items%28in_%29.md): Returns the dynamic items, from the animator’s behaviors, that intersect a specified rectangle.
- [removeBehavior:](removebehavior%28__%29.md): Removes a specified dynamic behavior from a dynamic animator.
- [removeAllBehaviors](removeallbehaviors%28%29.md): Removes all of the dynamic behaviors from a dynamic animator.
