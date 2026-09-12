> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvcollectionviewdelegatefullscreenlayout/collectionview(_:layout:willcentercellat:)](https://developer.apple.com/documentation/tvuikit/tvcollectionviewdelegatefullscreenlayout/collectionview(_:layout:willcentercellat:))

# collectionView(\_:layout:willCenterCellAt:) (Swift)

**Framework:** TVUIKit  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+

Tells the delegate when a cell is to be the center cell.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, willCenterCellAt indexPath: IndexPath)
```

## See Also

### Managing Cell Transitions

- [collectionView(\_:layout:didCenterCellAt:)](collectionview%28__layout_didcentercellat_%29.md): Tells the delegate when a cell has completed the transition and has become the center cell.

# collectionView:layout:willCenterCellAtIndexPath: (Objective-C)

**Framework:** TVUIKit  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+

Tells the delegate when a cell is to be the center cell.

## Declaration

```objectivec
- (void) collectionView:(UICollectionView *) collectionView layout:(UICollectionViewLayout *) collectionViewLayout willCenterCellAtIndexPath:(NSIndexPath *) indexPath;
```

## See Also

### Managing Cell Transitions

- [collectionView:layout:didCenterCellAtIndexPath:](collectionview%28__layout_didcentercellat_%29.md): Tells the delegate when a cell has completed the transition and has become the center cell.
