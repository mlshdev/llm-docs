> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvcollectionviewfullscreenlayout/centerindexpath](https://developer.apple.com/documentation/tvuikit/tvcollectionviewfullscreenlayout/centerindexpath)

# centerIndexPath (Swift)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The index path of the currently centered item.

## Declaration

```swift
var centerIndexPath: IndexPath? { get }
```

<a id="Discussion"></a>

## Discussion

The `centerIndexPath` property returns the index path of the cell currently centered on the screen. `TVUIKit` calculates the current index path using the current content offset of the collection view.

# centerIndexPath (Objective-C)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The index path of the currently centered item.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSIndexPath * centerIndexPath;
```

<a id="Discussion"></a>

## Discussion

The `centerIndexPath` property returns the index path of the cell currently centered on the screen. `TVUIKit` calculates the current index path using the current content offset of the collection view.
