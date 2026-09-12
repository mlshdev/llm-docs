> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewcontroller/collectionviewlayout](https://developer.apple.com/documentation/uikit/uicollectionviewcontroller/collectionviewlayout)

# collectionViewLayout (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The layout object used to initialize the collection view controller.

## Declaration

```swift
var collectionViewLayout: UICollectionViewLayout { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the layout object you passed to the [init(collectionViewLayout:)](init%28collectionviewlayout_%29.md) method. The layout object in this property isn’t updated to reflect changes to the collection view itself. You can use this property to refer to the layout object you originally configured the collection view to use.

## See Also

### Getting the collection view

- [collectionView](collectionview.md): The collection view object managed by this view controller.

# collectionViewLayout (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The layout object used to initialize the collection view controller.

## Declaration

```objectivec
@property (nonatomic, readonly) UICollectionViewLayout * collectionViewLayout;
```

<a id="Discussion"></a>

## Discussion

This property contains the layout object you passed to the [initWithCollectionViewLayout:](init%28collectionviewlayout_%29.md) method. The layout object in this property isn’t updated to reflect changes to the collection view itself. You can use this property to refer to the layout object you originally configured the collection view to use.

## See Also

### Getting the collection view

- [collectionView](collectionview.md): The collection view object managed by this view controller.
