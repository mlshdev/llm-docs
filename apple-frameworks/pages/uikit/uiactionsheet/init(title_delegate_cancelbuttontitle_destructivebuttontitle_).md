> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactionsheet/init(title:delegate:cancelbuttontitle:destructivebuttontitle:)](https://developer.apple.com/documentation/uikit/uiactionsheet/init(title:delegate:cancelbuttontitle:destructivebuttontitle:))

# init(title:delegate:cancelButtonTitle:destructiveButtonTitle:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 2.0+ (deprecated in 8.3) · iPadOS 2.0+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

Initializes the action sheet using the specified starting parameters.

> For more information, see [UIActionSheet](../uiactionsheet.md).

## Declaration

```swift
init(title: String?, delegate: (any UIActionSheetDelegate)?, cancelButtonTitle: String?, destructiveButtonTitle: String?)
```

## Parameters

- `title`: A string to display in the title area of the action sheet. Pass `nil` if you don’t want to display any text in the title area.
- `delegate`: The receiver’s delegate object. Although this parameter may be `nil`, the delegate is used to respond to taps in the action sheet and should usually be provided.
- `cancelButtonTitle`: The title of the cancel button. This button is added to the action sheet automatically and assigned an appropriate index, which is available from the [cancelButtonIndex](cancelbuttonindex.md) property. This button is displayed in black to indicate that it represents the cancel action. Specify `nil` if you don’t want a cancel button or are presenting the action sheet on an iPad.
- `destructiveButtonTitle`: The title of the destructive button. This button is added to the action sheet automatically and assigned an appropriate index, which is available from the [destructiveButtonIndex](destructivebuttonindex.md) property. This button is displayed in red to indicate that it represents a destructive behavior. Specify `nil` if you don’t want a destructive button.

<a id="return-value"></a>

## Return Value

A newly initialized action sheet.

<a id="Discussion"></a>

## Discussion

The action sheet automatically sets the appearance of the destructive and cancel buttons. If the action sheet contains only one button, it doesn’t apply the custom colors associated with the destructive and cancel buttons.

## See Also

### Creating action sheets

- [init(title:delegate:cancelButtonTitle:destructiveButtonTitle:otherButtonTitles:\_:)](init%28title_delegate_cancelbuttontitle_destructivebuttontitle_otherbuttontitles___%29.md): Deprecated. Creates an action sheet with the specified values.

# initWithTitle:delegate:cancelButtonTitle:destructiveButtonTitle:otherButtonTitles: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.3) · iPadOS 2.0+ (deprecated in 8.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

Initializes the action sheet using the specified starting parameters.

> For more information, see [UIActionSheet](../uiactionsheet.md).

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title delegate:(id<UIActionSheetDelegate>) delegate cancelButtonTitle:(NSString *) cancelButtonTitle destructiveButtonTitle:(NSString *) destructiveButtonTitle otherButtonTitles:(NSString *) otherButtonTitles;
```

## Parameters

- `title`: A string to display in the title area of the action sheet. Pass `nil` if you don’t want to display any text in the title area.
- `delegate`: The receiver’s delegate object. Although this parameter may be `nil`, the delegate is used to respond to taps in the action sheet and should usually be provided.
- `cancelButtonTitle`: The title of the cancel button. This button is added to the action sheet automatically and assigned an appropriate index, which is available from the [cancelButtonIndex](cancelbuttonindex.md) property. This button is displayed in black to indicate that it represents the cancel action. Specify `nil` if you don’t want a cancel button or are presenting the action sheet on an iPad.
- `destructiveButtonTitle`: The title of the destructive button. This button is added to the action sheet automatically and assigned an appropriate index, which is available from the [destructiveButtonIndex](destructivebuttonindex.md) property. This button is displayed in red to indicate that it represents a destructive behavior. Specify `nil` if you don’t want a destructive button.
- `otherButtonTitles`: The titles of any additional buttons you want to add. This parameter consists of a `nil`-terminated, comma-separated list of strings. For example, to specify two additional buttons, you could specify the value `@"Button 1", @"Button 2", nil`.

<a id="return-value"></a>

## Return Value

A newly initialized action sheet.

<a id="Discussion"></a>

## Discussion

The action sheet automatically sets the appearance of the destructive and cancel buttons. If the action sheet contains only one button, it doesn’t apply the custom colors associated with the destructive and cancel buttons.
