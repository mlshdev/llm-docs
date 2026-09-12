> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitoolbar/delegate](https://developer.apple.com/documentation/uikit/uitoolbar/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The toolbar’s delegate object.

## Declaration

```swift
weak var delegate: (any UIToolbarDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate should conform to the `UIToolbarDelegate` protocol. You may not set the delegate when the toolbar is managed by a navigation controller. The default value is `nil`.

## See Also

### Managing toolbar changes

- [UIToolbarDelegate](../uitoolbardelegate.md): The interface that toolbar delegate objects implement to manage the toolbar behavior.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The toolbar’s delegate object.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UIToolbarDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate should conform to the `UIToolbarDelegate` protocol. You may not set the delegate when the toolbar is managed by a navigation controller. The default value is `nil`.

## See Also

### Managing toolbar changes

- [UIToolbarDelegate](../uitoolbardelegate.md): The interface that toolbar delegate objects implement to manage the toolbar behavior.
