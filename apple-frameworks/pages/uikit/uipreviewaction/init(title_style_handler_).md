> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipreviewaction/init(title:style:handler:)](https://developer.apple.com/documentation/uikit/uipreviewaction/init(title:style:handler:))

# init(title:style:handler:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 13.0)

Creates a peek quick action using a specified title, style, and handler.

> For more information, see [UIPreviewAction](../uipreviewaction.md).

## Declaration

```swift
convenience init(title: String, style: UIPreviewAction.Style, handler: @escaping (UIPreviewAction, UIViewController) -> Void)
```

## Parameters

- `title`: The quick action’s title.
- `style`: The quick action’s style. For a complete list of styles, see the `UIPreviewActionStyle` enumeration in *UIPreviewActionItem Protocol Reference*.
- `handler`: A block that is called when the user selects the peek quick action. The block takes the following parameters:

  - **action**: The peek quick action selected by the user.
  - **previewViewController**: The view controller displayed as the peek.

<a id="return-value"></a>

## Return Value

A newly-created peek quick action.

## See Also

### Creating a peek quick action

- [handler](handler.md): Deprecated. The block called when the peek quick action is selected by the user.
- [UIPreviewAction.Style](style.md): Deprecated. The style for a peek quick action.

# actionWithTitle:style:handler: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 13.0)

Creates a peek quick action using a specified title, style, and handler.

> For more information, see [UIPreviewAction](../uipreviewaction.md).

## Declaration

```objectivec
+ (instancetype) actionWithTitle:(NSString *) title style:(UIPreviewActionStyle) style handler:(void (^)(UIPreviewAction *action, UIViewController *previewViewController)) handler;
```

## Parameters

- `title`: The quick action’s title.
- `style`: The quick action’s style. For a complete list of styles, see the `UIPreviewActionStyle` enumeration in *UIPreviewActionItem Protocol Reference*.
- `handler`: A block that is called when the user selects the peek quick action. The block takes the following parameters:

  - **action**: The peek quick action selected by the user.
  - **previewViewController**: The view controller displayed as the peek.

<a id="return-value"></a>

## Return Value

A newly-created peek quick action.

## See Also

### Creating a peek quick action

- [handler](handler.md): Deprecated. The block called when the peek quick action is selected by the user.
- [UIPreviewActionStyle](style.md): Deprecated. The style for a peek quick action.
