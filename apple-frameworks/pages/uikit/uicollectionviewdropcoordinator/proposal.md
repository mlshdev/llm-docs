> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdropcoordinator/proposal](https://developer.apple.com/documentation/uikit/uicollectionviewdropcoordinator/proposal)

# proposal (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The current proposal for how to incorporate the dropped items.

## Declaration

```swift
var proposal: UICollectionViewDropProposal { get }
```

<a id="Discussion"></a>

## Discussion

If your drag delegate implements the [collectionView(\_:dropSessionDidUpdate:withDestinationIndexPath:)](../uicollectionviewdropdelegate/collectionview%28__dropsessiondidupdate_withdestinationindexpath_%29.md) method, this object contains the information that you provided when making your drop proposal for the given location.

## See Also

### Getting the Session Information

- [session](session.md): The drop session containing information about the transaction.

# proposal (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The current proposal for how to incorporate the dropped items.

## Declaration

```objectivec
@property (nonatomic, readonly) UICollectionViewDropProposal * proposal;
```

<a id="Discussion"></a>

## Discussion

If your drag delegate implements the [collectionView:dropSessionDidUpdate:withDestinationIndexPath:](../uicollectionviewdropdelegate/collectionview%28__dropsessiondidupdate_withdestinationindexpath_%29.md) method, this object contains the information that you provided when making your drop proposal for the given location.

## See Also

### Getting the Session Information

- [session](session.md): The drop session containing information about the transaction.
