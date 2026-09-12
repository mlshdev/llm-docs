> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayout/collectionviewcontentsize](https://developer.apple.com/documentation/uikit/uicollectionviewlayout/collectionviewcontentsize)

# collectionViewContentSize (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The width and height of the collection view’s contents.

## Declaration

```swift
var collectionViewContentSize: CGSize { get }
```

<a id="return-value"></a>

## Return Value

The width and height of the collection view’s contents.

<a id="Discussion"></a>

## Discussion

Subclasses must override this property and use it to return the width and height of the collection view’s content. These values represent the width and height of all the content, not just the content that is currently visible. The collection view uses this information to configure its own content size for scrolling purposes.

The default implementation of this method returns [CGSizeZero](../../coregraphics/cgsizezero.md).

## See Also

### Getting the collection view information

- [collectionView](collectionview.md): The collection view object currently using this layout object.

# collectionViewContentSize (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

The width and height of the collection view’s contents.

## Declaration

```objectivec
@property (nonatomic, readonly) CGSize collectionViewContentSize;
```

<a id="return-value"></a>

## Return Value

The width and height of the collection view’s contents.

<a id="Discussion"></a>

## Discussion

Subclasses must override this property and use it to return the width and height of the collection view’s content. These values represent the width and height of all the content, not just the content that is currently visible. The collection view uses this information to configure its own content size for scrolling purposes.

The default implementation of this method returns [CGSizeZero](../../coregraphics/cgsizezero.md).

## See Also

### Getting the collection view information

- [collectionView](collectionview.md): The collection view object currently using this layout object.
