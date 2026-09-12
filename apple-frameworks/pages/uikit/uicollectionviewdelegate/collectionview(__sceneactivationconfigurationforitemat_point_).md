> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdelegate/collectionview(_:sceneactivationconfigurationforitemat:point:)](https://developer.apple.com/documentation/uikit/uicollectionviewdelegate/collectionview(_:sceneactivationconfigurationforitemat:point:))

# collectionView(\_:sceneActivationConfigurationForItemAt:point:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Returns a scene activation configuration that allows the cell to expand into a new scene.

## Declaration

```swift
optional func collectionView(_ collectionView: UICollectionView, sceneActivationConfigurationForItemAt indexPath: IndexPath, point: CGPoint) -> UIWindowScene.ActivationConfiguration?
```

## Parameters

- `collectionView`: The collection view.
- `indexPath`: The index path of the cell with which the user is interacting.
- `point`: The location of the interaction in the collection view’s coordinate space.

<a id="return-value"></a>

## Return Value

A [UIWindowScene.ActivationConfiguration](../uiwindowscene/activationconfiguration.md) object that facilitates expanding the cell into a new scene. Return `nil` to prevent the interaction from starting.

# collectionView:sceneActivationConfigurationForItemAtIndexPath:point: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Returns a scene activation configuration that allows the cell to expand into a new scene.

## Declaration

```objectivec
- (UIWindowSceneActivationConfiguration *) collectionView:(UICollectionView *) collectionView sceneActivationConfigurationForItemAtIndexPath:(NSIndexPath *) indexPath point:(CGPoint) point;
```

## Parameters

- `collectionView`: The collection view.
- `indexPath`: The index path of the cell with which the user is interacting.
- `point`: The location of the interaction in the collection view’s coordinate space.

<a id="return-value"></a>

## Return Value

A [UIWindowSceneActivationConfiguration](../uiwindowscene/activationconfiguration.md) object that facilitates expanding the cell into a new scene. Return `nil` to prevent the interaction from starting.
