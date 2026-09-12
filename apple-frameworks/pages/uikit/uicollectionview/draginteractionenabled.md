> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/draginteractionenabled](https://developer.apple.com/documentation/uikit/uicollectionview/draginteractionenabled)

# dragInteractionEnabled (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the collection view supports dragging content.

## Declaration

```swift
var dragInteractionEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

To support dragging content from the collection view to a view in your app or another app, set this property value to [true](https://developer.apple.com/documentation/swift/true). To disable this behavior, set the value to [false](https://developer.apple.com/documentation/swift/false). The default value is [true](https://developer.apple.com/documentation/swift/true).

In iOS 14 and earlier, the default value is [true](https://developer.apple.com/documentation/swift/true) for iPad and [false](https://developer.apple.com/documentation/swift/false) for iPhone. Setting the value to [true](https://developer.apple.com/documentation/swift/true) on iPhone enables dragging within your app only. Dragging content to other apps isn’t possible on iPhone prior to iOS 15.

## See Also

### Managing drag interactions

- [dragDelegate](dragdelegate.md): The delegate object that manages the dragging of items from the collection view.
- [UICollectionViewDragDelegate](../uicollectionviewdragdelegate.md): The interface for initiating drags from a collection view.
- [hasActiveDrag](hasactivedrag.md): A Boolean value that indicates whether items were lifted from the collection view and have not yet been dropped.

# dragInteractionEnabled (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the collection view supports dragging content.

## Declaration

```objectivec
@property (nonatomic) BOOL dragInteractionEnabled;
```

<a id="Discussion"></a>

## Discussion

To support dragging content from the collection view to a view in your app or another app, set this property value to [true](https://developer.apple.com/documentation/swift/true). To disable this behavior, set the value to [false](https://developer.apple.com/documentation/swift/false). The default value is [true](https://developer.apple.com/documentation/swift/true).

In iOS 14 and earlier, the default value is [true](https://developer.apple.com/documentation/swift/true) for iPad and [false](https://developer.apple.com/documentation/swift/false) for iPhone. Setting the value to [true](https://developer.apple.com/documentation/swift/true) on iPhone enables dragging within your app only. Dragging content to other apps isn’t possible on iPhone prior to iOS 15.

## See Also

### Managing drag interactions

- [dragDelegate](dragdelegate.md): The delegate object that manages the dragging of items from the collection view.
- [UICollectionViewDragDelegate](../uicollectionviewdragdelegate.md): The interface for initiating drags from a collection view.
- [hasActiveDrag](hasactivedrag.md): A Boolean value that indicates whether items were lifted from the collection view and have not yet been dropped.
