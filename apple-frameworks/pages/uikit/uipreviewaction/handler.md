> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipreviewaction/handler](https://developer.apple.com/documentation/uikit/uipreviewaction/handler)

# handler (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 13.0)

The block called when the peek quick action is selected by the user.

> For more information, see [UIPreviewAction](../uipreviewaction.md).

## Declaration

```swift
var handler: (any UIPreviewActionItem, UIViewController) -> Void { get }
```

<a id="Discussion"></a>

## Discussion

The handler is set when the peek quick action is instantiated; it is immutable.

## See Also

### Creating a peek quick action

- [init(title:style:handler:)](init%28title_style_handler_%29.md): Deprecated. Creates a peek quick action using a specified title, style, and handler.
- [UIPreviewAction.Style](style.md): Deprecated. The style for a peek quick action.

# handler (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 13.0)

The block called when the peek quick action is selected by the user.

> For more information, see [UIPreviewAction](../uipreviewaction.md).

## Declaration

```objectivec
@property (nonatomic, copy, readonly) void (^)(id<UIPreviewActionItem>, UIViewController *) handler;
```

<a id="Discussion"></a>

## Discussion

The handler is set when the peek quick action is instantiated; it is immutable.

## See Also

### Creating a peek quick action

- [actionWithTitle:style:handler:](init%28title_style_handler_%29.md): Deprecated. Creates a peek quick action using a specified title, style, and handler.
- [UIPreviewActionStyle](style.md): Deprecated. The style for a peek quick action.
