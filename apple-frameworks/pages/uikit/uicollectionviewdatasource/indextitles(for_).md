> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdatasource/indextitles(for:)](https://developer.apple.com/documentation/uikit/uicollectionviewdatasource/indextitles(for:))

# indexTitles(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 10.2+ · visionOS 1.0+

Asks the data source to return the titles for the index items to display for the collection view.

## Declaration

```swift
optional func indexTitles(for collectionView: UICollectionView) -> [String]?
```

## Parameters

- `collectionView`: The collection view requesting this information.

<a id="return-value"></a>

## Return Value

An array of strings to use for the title of each index entry. For example, you might return an array of strings containing the letters of the alphabet (`["A", "B", "C", ..., "Z"]`).

<a id="Discussion"></a>

## Discussion

Use this method to support fast scrolling through your collection view’s content. The strings you return are displayed in an index view that can be used to jump to specific locations in the collection view’s content. If you implement this method, you must also implement the [collectionView(\_:indexPathForIndexTitle:at:)](collectionview%28__indexpathforindextitle_at_%29.md) method to specify the collection view item associated with each index title.

## See Also

### Configuring an index

- [collectionView(\_:indexPathForIndexTitle:at:)](collectionview%28__indexpathforindextitle_at_%29.md): Asks the data source to return the index path of a collection view item that corresponds to one of your index entries.

# indexTitlesForCollectionView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 10.2+ · visionOS 1.0+

Asks the data source to return the titles for the index items to display for the collection view.

## Declaration

```objectivec
- (NSArray<NSString *> *) indexTitlesForCollectionView:(UICollectionView *) collectionView;
```

## Parameters

- `collectionView`: The collection view requesting this information.

<a id="return-value"></a>

## Return Value

An array of strings to use for the title of each index entry. For example, you might return an array of strings containing the letters of the alphabet (`["A", "B", "C", ..., "Z"]`).

<a id="Discussion"></a>

## Discussion

Use this method to support fast scrolling through your collection view’s content. The strings you return are displayed in an index view that can be used to jump to specific locations in the collection view’s content. If you implement this method, you must also implement the [collectionView:indexPathForIndexTitle:atIndex:](collectionview%28__indexpathforindextitle_at_%29.md) method to specify the collection view item associated with each index title.

## See Also

### Configuring an index

- [collectionView:indexPathForIndexTitle:atIndex:](collectionview%28__indexpathforindextitle_at_%29.md): Asks the data source to return the index path of a collection view item that corresponds to one of your index entries.
