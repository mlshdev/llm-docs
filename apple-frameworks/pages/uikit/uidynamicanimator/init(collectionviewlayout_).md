> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicanimator/init(collectionviewlayout:)](https://developer.apple.com/documentation/uikit/uidynamicanimator/init(collectionviewlayout:))

# init(collectionViewLayout:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Initializes a dynamic animator with a specified collection view layout.

## Declaration

```swift
convenience init(collectionViewLayout layout: UICollectionViewLayout)
```

## Parameters

- `layout`: The collection view layout for the dynamic animator, serving as the reference view for a dynamic animator in collection-view mode.

<a id="return-value"></a>

## Return Value

The initialized dynamic animator, or `nil` if there was a problem initializing the object.

<a id="Discussion"></a>

## Discussion

When you initialize a dynamic animator with this method, the behaviors (and their dynamic items) that you add to the animator employ the collection view layout’s coordinate system.

## See Also

### Initializing and managing a dynamic animator

- [init(referenceView:)](init%28referenceview_%29.md): Initializes a dynamic animator with a specified view as its reference view.
- [items(in:)](items%28in_%29.md): Returns the dynamic items, from the animator’s behaviors, that intersect a specified rectangle.
- [addBehavior(\_:)](addbehavior%28__%29.md): Adds a dynamic behavior to a dynamic animator.
- [removeBehavior(\_:)](removebehavior%28__%29.md): Removes a specified dynamic behavior from a dynamic animator.
- [removeAllBehaviors()](removeallbehaviors%28%29.md): Removes all of the dynamic behaviors from a dynamic animator.

# initWithCollectionViewLayout: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Initializes a dynamic animator with a specified collection view layout.

## Declaration

```objectivec
- (instancetype) initWithCollectionViewLayout:(UICollectionViewLayout *) layout;
```

## Parameters

- `layout`: The collection view layout for the dynamic animator, serving as the reference view for a dynamic animator in collection-view mode.

<a id="return-value"></a>

## Return Value

The initialized dynamic animator, or `nil` if there was a problem initializing the object.

<a id="Discussion"></a>

## Discussion

When you initialize a dynamic animator with this method, the behaviors (and their dynamic items) that you add to the animator employ the collection view layout’s coordinate system.

## See Also

### Initializing and managing a dynamic animator

- [initWithReferenceView:](init%28referenceview_%29.md): Initializes a dynamic animator with a specified view as its reference view.
- [itemsInRect:](items%28in_%29.md): Returns the dynamic items, from the animator’s behaviors, that intersect a specified rectangle.
- [addBehavior:](addbehavior%28__%29.md): Adds a dynamic behavior to a dynamic animator.
- [removeBehavior:](removebehavior%28__%29.md): Removes a specified dynamic behavior from a dynamic animator.
- [removeAllBehaviors](removeallbehaviors%28%29.md): Removes all of the dynamic behaviors from a dynamic animator.
