> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayout/collectionview](https://developer.apple.com/documentation/appkit/nscollectionviewlayout/collectionview)

# collectionView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The collection view object currently using this layout.

## Declaration

```swift
weak var collectionView: NSCollectionView? { get }
```

<a id="Discussion"></a>

## Discussion

When you assign a layout object to a collection view, the collection view automatically updates this property.

# collectionView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The collection view object currently using this layout.

## Declaration

```objectivec
@property (weak, readonly, nullable) NSCollectionView * collectionView;
```

<a id="Discussion"></a>

## Discussion

When you assign a layout object to a collection view, the collection view automatically updates this property.
