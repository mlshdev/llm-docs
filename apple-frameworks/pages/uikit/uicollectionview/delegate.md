> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/delegate](https://developer.apple.com/documentation/uikit/uicollectionview/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The object that acts as the delegate of the collection view.

## Declaration

```swift
weak var delegate: (any UICollectionViewDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate must adopt the [UICollectionViewDelegate](../uicollectionviewdelegate.md) protocol. The delegate object is responsible for managing selection behavior and interactions with individual items.

## See Also

### Managing collection view interactions

- [UICollectionViewDelegate](../uicollectionviewdelegate.md): The methods adopted by the object you use to manage user interactions with items in a collection view.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The object that acts as the delegate of the collection view.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UICollectionViewDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate must adopt the [UICollectionViewDelegate](../uicollectionviewdelegate.md) protocol. The delegate object is responsible for managing selection behavior and interactions with individual items.

## See Also

### Managing collection view interactions

- [UICollectionViewDelegate](../uicollectionviewdelegate.md): The methods adopted by the object you use to manage user interactions with items in a collection view.
