> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactionsheet/delegate](https://developer.apple.com/documentation/uikit/uiactionsheet/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 8.3) · iPadOS 2.0+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

The receiver’s delegate or `nil` if it doesn’t have a delegate.

> For more information, see [UIActionSheet](../uiactionsheet.md).

## Declaration

```swift
weak var delegate: (any UIActionSheetDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

For a list of methods your delegate object can implement, see [UIActionSheetDelegate](../uiactionsheetdelegate.md).

## See Also

### Setting properties

- [title](title.md): Deprecated. The string that appears in the receiver’s title bar.
- [isVisible](isvisible.md): Deprecated. A Boolean value that indicates whether the receiver is displayed.
- [actionSheetStyle](actionsheetstyle.md): Deprecated. The receiver’s presentation style.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 8.3) · iPadOS 2.0+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

The receiver’s delegate or `nil` if it doesn’t have a delegate.

> For more information, see [UIActionSheet](../uiactionsheet.md).

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UIActionSheetDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

For a list of methods your delegate object can implement, see [UIActionSheetDelegate](../uiactionsheetdelegate.md).

## See Also

### Setting properties

- [title](title.md): Deprecated. The string that appears in the receiver’s title bar.
- [visible](isvisible.md): Deprecated. A Boolean value that indicates whether the receiver is displayed.
- [actionSheetStyle](actionsheetstyle.md): Deprecated. The receiver’s presentation style.
