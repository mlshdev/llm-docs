> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegate/collectionview(_:canedititemat:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegate/collectionview(_:canedititemat:))

# collectionView(\_:canEditItemAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Determines whether the specified item is editable.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, canEditItemAt indexPath: IndexPath) -> Bool
```

## Parameters

- `collectionView`: The collection view object requesting this information.
- `indexPath`: An index path locating an item in the collection view.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the item is editable, [false](https://developer.apple.com/documentation/swift/false) if it’s not. The default value is [true](https://developer.apple.com/documentation/swift/true).

# collectionView:canEditItemAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Determines whether the specified item is editable.

## Declaration

```objectivec
- (BOOL) collectionView:(UICollectionView *) collectionView canEditItemAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `collectionView`: The collection view object requesting this information.
- `indexPath`: An index path locating an item in the collection view.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the item is editable, [false](https://developer.apple.com/documentation/swift/false) if it’s not. The default value is [true](https://developer.apple.com/documentation/swift/true).
