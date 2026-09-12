> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkalertaction/init(title:style:handler:)](https://developer.apple.com/documentation/watchkit/wkalertaction/init(title:style:handler:))

# init(title:style:handler:) (Swift)

**Framework:** WatchKit  
**Kind:** Initializer  
**Availability:** watchOS 2.0+

Creates and returns an action object with the specified button information.

## Declaration

```swift
convenience init(title: String, style: WKAlertActionStyle, handler: @escaping WKAlertActionHandler)
```

## Parameters

- `title`: The localized string to use as the button title for the action.
- `style`: The style to apply to the action button. For a list of possible styles and their meanings, see [WKAlertActionStyle](../wkalertactionstyle.md).
- `handler`: A block containing the code to execute when the user taps the action button. Use this block to perform whatever action is required to perform the associated task. For information about the format of this block, see [WKAlertActionHandler](../wkalertactionhandler.md).

<a id="return-value"></a>

## Return Value

An initialized action object that you can display in an alert.

<a id="Discussion"></a>

## Discussion

Use this method to create a button to display in an action sheet. In an action sheet, specifying an action with the [WKAlertActionStyle.cancel](../wkalertactionstyle/cancel.md) style replaces the standard Cancel button provided by the system.

# actionWithTitle:style:handler: (Objective-C)

**Framework:** WatchKit  
**Kind:** Type Method  
**Availability:** watchOS 2.0+

Creates and returns an action object with the specified button information.

## Declaration

```objectivec
+ (instancetype) actionWithTitle:(NSString *) title style:(WKAlertActionStyle) style handler:(WKAlertActionHandler) handler;
```

## Parameters

- `title`: The localized string to use as the button title for the action.
- `style`: The style to apply to the action button. For a list of possible styles and their meanings, see [WKAlertActionStyle](../wkalertactionstyle.md).
- `handler`: A block containing the code to execute when the user taps the action button. Use this block to perform whatever action is required to perform the associated task. For information about the format of this block, see [WKAlertActionHandler](../wkalertactionhandler.md).

<a id="return-value"></a>

## Return Value

An initialized action object that you can display in an alert.

<a id="Discussion"></a>

## Discussion

Use this method to create a button to display in an action sheet. In an action sheet, specifying an action with the [WKAlertActionStyleCancel](../wkalertactionstyle/cancel.md) style replaces the standard Cancel button provided by the system.
