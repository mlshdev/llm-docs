> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uialertaction/init(title:style:handler:)](https://developer.apple.com/documentation/uikit/uialertaction/init(title:style:handler:))

# init(title:style:handler:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Create and return an action with the specified title and behavior.

## Declaration

```swift
convenience init(title: String?, style: UIAlertAction.Style, handler: ((UIAlertAction) -> Void)? = nil)
```

## Parameters

- `title`: The text to use for the button title. The value you specify should be localized for the user’s current language. This parameter must not be `nil`, except in a tvOS app where a `nil` title may be used with [UIAlertAction.Style.cancel](style-swift.enum/cancel.md).
- `style`: Additional styling information to apply to the button. Use the style information to convey the type of action that is performed by the button. For a list of possible values, see the constants in [UIAlertAction.Style](style-swift.enum.md).
- `handler`: A block to execute when the user selects the action. This block has no return value and takes the selected action object as its only parameter.

<a id="return-value"></a>

## Return Value

A new alert action object.

<a id="Discussion"></a>

## Discussion

Actions are enabled by default when you create them.

# actionWithTitle:style:handler: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Create and return an action with the specified title and behavior.

## Declaration

```objectivec
+ (instancetype) actionWithTitle:(NSString *) title style:(UIAlertActionStyle) style handler:(void (^)(UIAlertAction *action)) handler;
```

## Parameters

- `title`: The text to use for the button title. The value you specify should be localized for the user’s current language. This parameter must not be `nil`, except in a tvOS app where a `nil` title may be used with [UIAlertActionStyleCancel](style-swift.enum/cancel.md).
- `style`: Additional styling information to apply to the button. Use the style information to convey the type of action that is performed by the button. For a list of possible values, see the constants in [UIAlertActionStyle](style-swift.enum.md).
- `handler`: A block to execute when the user selects the action. This block has no return value and takes the selected action object as its only parameter.

<a id="return-value"></a>

## Return Value

A new alert action object.

<a id="Discussion"></a>

## Discussion

Actions are enabled by default when you create them.
