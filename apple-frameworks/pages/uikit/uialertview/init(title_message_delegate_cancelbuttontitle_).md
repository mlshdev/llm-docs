> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uialertview/init(title:message:delegate:cancelbuttontitle:)](https://developer.apple.com/documentation/uikit/uialertview/init(title:message:delegate:cancelbuttontitle:))

# init(title:message:delegate:cancelButtonTitle:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Convenience method for initializing an alert view.

> For more information, see [UIAlertView](../uialertview.md).

## Declaration

```swift
convenience init(title: String?, message: String?, delegate: Any?, cancelButtonTitle: String?)
```

## Parameters

- `title`: The string that appears in the receiver’s title bar.
- `message`: Descriptive text that provides more details than the title.
- `delegate`: The receiver’s delegate or `nil` if it doesn’t have a delegate.
- `cancelButtonTitle`: The title of the cancel button or `nil` if there’s no cancel button.

  Using this argument is equivalent to setting the cancel button index to the value returned by invoking [addButton(withTitle:)](addbutton%28withtitle_%29.md) specifying this title.

<a id="return-value"></a>

## Return Value

Newly initialized alert view.

## See Also

### Creating alert views

- [init(title:message:delegate:cancelButtonTitle:otherButtonTitles:\_:)](init%28title_message_delegate_cancelbuttontitle_otherbuttontitles___%29.md): Deprecated. Creates an alert view with the specified values.
- [init(frame:)](init%28frame_%29.md): Deprecated. Creates an alert view with the specified frame.
- [init(coder:)](init%28coder_%29.md): Deprecated. Creates an alert view from data in an unarchiver.

# initWithTitle:message:delegate:cancelButtonTitle:otherButtonTitles: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Convenience method for initializing an alert view.

> For more information, see [UIAlertView](../uialertview.md).

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title message:(NSString *) message delegate:(id) delegate cancelButtonTitle:(NSString *) cancelButtonTitle otherButtonTitles:(NSString *) otherButtonTitles;
```

## Parameters

- `title`: The string that appears in the receiver’s title bar.
- `message`: Descriptive text that provides more details than the title.
- `delegate`: The receiver’s delegate or `nil` if it doesn’t have a delegate.
- `cancelButtonTitle`: The title of the cancel button or `nil` if there’s no cancel button.

  Using this argument is equivalent to setting the cancel button index to the value returned by invoking [addButtonWithTitle:](addbutton%28withtitle_%29.md) specifying this title.
- `otherButtonTitles`: The titles of additional buttons to add to the receiver. In Objective-C, use `nil` to mark the end of the list.

  Using this argument is equivalent to invoking [addButtonWithTitle:](addbutton%28withtitle_%29.md) with each title to add more buttons.

  Too many buttons can cause the alert view to scroll. For guidelines on the best ways to use an alert in an app, see [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/components/presentation/alerts).

<a id="return-value"></a>

## Return Value

Newly initialized alert view.

## See Also

### Creating alert views

- [initWithFrame:](init%28frame_%29.md): Deprecated. Creates an alert view with the specified frame.
- [initWithCoder:](init%28coder_%29.md): Deprecated. Creates an alert view from data in an unarchiver.
