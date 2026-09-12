> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvcollectionviewdelegatefullscreenlayout/collectionview(_:layout:didcentercellat:)](https://developer.apple.com/documentation/tvuikit/tvcollectionviewdelegatefullscreenlayout/collectionview(_:layout:didcentercellat:))

# collectionView(\_:layout:didCenterCellAt:) (Swift)

**Framework:** TVUIKit  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+

Tells the delegate when a cell has completed the transition and has become the center cell.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, didCenterCellAt indexPath: IndexPath)
```

## See Also

### Managing Cell Transitions

- [collectionView(\_:layout:willCenterCellAt:)](collectionview%28__layout_willcentercellat_%29.md): Tells the delegate when a cell is to be the center cell.

# collectionView:layout:didCenterCellAtIndexPath: (Objective-C)

**Framework:** TVUIKit  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+

Tells the delegate when a cell has completed the transition and has become the center cell.

## Declaration

```objectivec
- (void) collectionView:(UICollectionView *) collectionView layout:(UICollectionViewLayout *) collectionViewLayout didCenterCellAtIndexPath:(NSIndexPath *) indexPath;
```

## See Also

### Managing Cell Transitions

- [collectionView:layout:willCenterCellAtIndexPath:](collectionview%28__layout_willcentercellat_%29.md): Tells the delegate when a cell is to be the center cell.
