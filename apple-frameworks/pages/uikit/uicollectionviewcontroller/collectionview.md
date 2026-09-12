> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewcontroller/collectionview](https://developer.apple.com/documentation/uikit/uicollectionviewcontroller/collectionview)

# collectionView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The collection view object managed by this view controller.

## Declaration

```swift
var collectionView: UICollectionView! { get set }
```

<a id="Discussion"></a>

## Discussion

If you assign a new collection view object to this property and that view’s data source or delegate aren’t yet set, the collection view controller makes itself the delegate or data source or both.

## See Also

### Getting the collection view

- [collectionViewLayout](collectionviewlayout.md): The layout object used to initialize the collection view controller.

# collectionView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The collection view object managed by this view controller.

## Declaration

```objectivec
@property (nonatomic, strong, null_resettable) UICollectionView * collectionView;
```

<a id="Discussion"></a>

## Discussion

If you assign a new collection view object to this property and that view’s data source or delegate aren’t yet set, the collection view controller makes itself the delegate or data source or both.

## See Also

### Getting the collection view

- [collectionViewLayout](collectionviewlayout.md): The layout object used to initialize the collection view controller.
