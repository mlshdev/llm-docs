> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uicollectionview/indexpath(forsupplementaryview:)

# indexPath(forSupplementaryView:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Gets the index path of the specified supplementary view.

## Declaration

```swift
func indexPath(forSupplementaryView supplementaryView: UICollectionReusableView) -> IndexPath?
```

## Parameters

- `supplementaryView`: The supplementary or decoration view whose index path you want.

<a id="return-value"></a>

## Return Value

The index path of the specified view if it is in the collection view, else `nil`.

# indexPathForSupplementaryView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Gets the index path of the specified supplementary view.

## Declaration

```objectivec
- (NSIndexPath *) indexPathForSupplementaryView:(UICollectionReusableView *) supplementaryView;
```

## Parameters

- `supplementaryView`: The supplementary or decoration view whose index path you want.

<a id="return-value"></a>

## Return Value

The index path of the specified view if it is in the collection view, else `nil`.
