> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdropproposal/intent-swift.enum/insertintodestinationindexpath](https://developer.apple.com/documentation/uikit/uicollectionviewdropproposal/intent-swift.enum/insertintodestinationindexpath)

# UICollectionViewDropProposal.Intent.insertIntoDestinationIndexPath (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Incorporate the dropped items into the item at the specified index path.

## Declaration

```swift
case insertIntoDestinationIndexPath
```

<a id="Discussion"></a>

## Discussion

Use this option when the drop target has nested content. Dropping items with this proposal causes them to be added to the drop target’s children. For example, if the drop target is a folder, use this option to add the items to the contents of that folder.

# UICollectionViewDropIntentInsertIntoDestinationIndexPath (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Incorporate the dropped items into the item at the specified index path.

## Declaration

```objectivec
UICollectionViewDropIntentInsertIntoDestinationIndexPath
```

<a id="Discussion"></a>

## Discussion

Use this option when the drop target has nested content. Dropping items with this proposal causes them to be added to the drop target’s children. For example, if the drop target is a folder, use this option to add the items to the contents of that folder.
