> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipreviewactiongroup/init(title:style:actions:)](https://developer.apple.com/documentation/uikit/uipreviewactiongroup/init(title:style:actions:))

# init(title:style:actions:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 13.0)

Creates a peek quick action group using a specified title, style, and array of peek quick actions.

> For more information, see [UIPreviewActionGroup](../uipreviewactiongroup.md).

## Declaration

```swift
convenience init(title: String, style: UIPreviewAction.Style, actions: [UIPreviewAction])
```

## Parameters

- `title`: The peek quick action group’s title
- `style`: The style for the peek quick action group.

  When the system presents the group’s submenu, each child quick action is displayed using its own style. The available styles are described in the UIPreviewActionStyle enumeration in [UIPreviewActionItem](../uipreviewactionitem.md).
- `actions`: An array of [UIPreviewAction](../uipreviewaction.md) objects, displayed as the child quick actions for the peek quick action group.

<a id="return-value"></a>

## Return Value

A newly initialized peek quick action group with your specified title, style, and submenu of peek quick actions.

# actionGroupWithTitle:style:actions: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 13.0)

Creates a peek quick action group using a specified title, style, and array of peek quick actions.

> For more information, see [UIPreviewActionGroup](../uipreviewactiongroup.md).

## Declaration

```objectivec
+ (instancetype) actionGroupWithTitle:(NSString *) title style:(UIPreviewActionStyle) style actions:(NSArray<UIPreviewAction *> *) actions;
```

## Parameters

- `title`: The peek quick action group’s title
- `style`: The style for the peek quick action group.

  When the system presents the group’s submenu, each child quick action is displayed using its own style. The available styles are described in the UIPreviewActionStyle enumeration in [UIPreviewActionItem](../uipreviewactionitem.md).
- `actions`: An array of [UIPreviewAction](../uipreviewaction.md) objects, displayed as the child quick actions for the peek quick action group.

<a id="return-value"></a>

## Return Value

A newly initialized peek quick action group with your specified title, style, and submenu of peek quick actions.
