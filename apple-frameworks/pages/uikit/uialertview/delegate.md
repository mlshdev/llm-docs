> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uialertview/delegate](https://developer.apple.com/documentation/uikit/uialertview/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The receiver’s delegate or `nil` if it doesn’t have a delegate.

> For more information, see [UIAlertView](../uialertview.md).

## Declaration

```swift
weak var delegate: AnyObject? { get set }
```

<a id="Discussion"></a>

## Discussion

See [UIAlertViewDelegate](../uialertviewdelegate.md) for the methods this delegate should implement.

## See Also

### Setting properties

- [alertViewStyle](alertviewstyle.md): Deprecated. The kind of alert displayed to the user.
- [title](title.md): Deprecated. The string that appears in the receiver’s title bar.
- [message](message.md): Deprecated. Descriptive text that provides more details than the title.
- [isVisible](isvisible.md): Deprecated. A Boolean value that indicates whether the receiver is displayed.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The receiver’s delegate or `nil` if it doesn’t have a delegate.

> For more information, see [UIAlertView](../uialertview.md).

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id delegate;
```

<a id="Discussion"></a>

## Discussion

See [UIAlertViewDelegate](../uialertviewdelegate.md) for the methods this delegate should implement.

## See Also

### Setting properties

- [alertViewStyle](alertviewstyle.md): Deprecated. The kind of alert displayed to the user.
- [title](title.md): Deprecated. The string that appears in the receiver’s title bar.
- [message](message.md): Deprecated. Descriptive text that provides more details than the title.
- [visible](isvisible.md): Deprecated. A Boolean value that indicates whether the receiver is displayed.
