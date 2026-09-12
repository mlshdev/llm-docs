> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicanimator/items(in:)](https://developer.apple.com/documentation/uikit/uidynamicanimator/items(in:))

# items(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the dynamic items, from the animator’s behaviors, that intersect a specified rectangle.

## Declaration

```swift
func items(in rect: CGRect) -> [any UIDynamicItem]
```

## Parameters

- `rect`: The rectangle you are interested in.

<a id="return-value"></a>

## Return Value

The dynamic items, from the animator’s behaviors, that intersect the specified rectangle.

<a id="Discussion"></a>

## Discussion

The coordinate system that pertains to the `rect` parameter depends on how you initialized the animator, as described in the Overview in this document.

## See Also

### Initializing and managing a dynamic animator

- [init(referenceView:)](init%28referenceview_%29.md): Initializes a dynamic animator with a specified view as its reference view.
- [init(collectionViewLayout:)](init%28collectionviewlayout_%29.md): Initializes a dynamic animator with a specified collection view layout.
- [addBehavior(\_:)](addbehavior%28__%29.md): Adds a dynamic behavior to a dynamic animator.
- [removeBehavior(\_:)](removebehavior%28__%29.md): Removes a specified dynamic behavior from a dynamic animator.
- [removeAllBehaviors()](removeallbehaviors%28%29.md): Removes all of the dynamic behaviors from a dynamic animator.

# itemsInRect: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the dynamic items, from the animator’s behaviors, that intersect a specified rectangle.

## Declaration

```objectivec
- (NSArray<id<UIDynamicItem>> *) itemsInRect:(CGRect) rect;
```

## Parameters

- `rect`: The rectangle you are interested in.

<a id="return-value"></a>

## Return Value

The dynamic items, from the animator’s behaviors, that intersect the specified rectangle.

<a id="Discussion"></a>

## Discussion

The coordinate system that pertains to the `rect` parameter depends on how you initialized the animator, as described in the Overview in this document.

## See Also

### Initializing and managing a dynamic animator

- [initWithReferenceView:](init%28referenceview_%29.md): Initializes a dynamic animator with a specified view as its reference view.
- [initWithCollectionViewLayout:](init%28collectionviewlayout_%29.md): Initializes a dynamic animator with a specified collection view layout.
- [addBehavior:](addbehavior%28__%29.md): Adds a dynamic behavior to a dynamic animator.
- [removeBehavior:](removebehavior%28__%29.md): Removes a specified dynamic behavior from a dynamic animator.
- [removeAllBehaviors](removeallbehaviors%28%29.md): Removes all of the dynamic behaviors from a dynamic animator.
