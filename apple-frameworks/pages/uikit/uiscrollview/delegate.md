> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/delegate](https://developer.apple.com/documentation/uikit/uiscrollview/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The delegate of the scroll view.

## Declaration

```swift
weak var delegate: (any UIScrollViewDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate must adopt the [UIScrollViewDelegate](../uiscrollviewdelegate.md) protocol. The [UIScrollView](../uiscrollview.md) class, which doesn’t retain the delegate, invokes each protocol method the delegate implements.

## See Also

### Responding to scroll view interactions

- [UIScrollViewDelegate](../uiscrollviewdelegate.md): The interface for the delegate of a scroll view.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The delegate of the scroll view.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UIScrollViewDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate must adopt the [UIScrollViewDelegate](../uiscrollviewdelegate.md) protocol. The [UIScrollView](../uiscrollview.md) class, which doesn’t retain the delegate, invokes each protocol method the delegate implements.

## See Also

### Responding to scroll view interactions

- [UIScrollViewDelegate](../uiscrollviewdelegate.md): The interface for the delegate of a scroll view.
