> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncwidgetlistviewdelegate/widgetlist(_:viewcontrollerforrow:)](https://developer.apple.com/documentation/notificationcenter/ncwidgetlistviewdelegate/widgetlist(_:viewcontrollerforrow:))

# widgetList(\_:viewControllerForRow:) (Swift)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** macOS 10.10+ (deprecated in 11.0)

Asks the delegate for a content view controller for the specified row.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```swift
func widgetList(_ list: NCWidgetListViewController, viewControllerForRow row: Int) -> NSViewController
```

## Parameters

- `list`: The widget’s list view controller that is requesting this content view controller.
- `row`: The number of the row in the list.

<a id="return-value"></a>

## Return Value

A custom view controller to manage the content in the specified row.

# widgetList:viewControllerForRow: (Objective-C)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** macOS 10.10+ (deprecated in 11.0)

Asks the delegate for a content view controller for the specified row.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```objectivec
- (NSViewController *) widgetList:(NCWidgetListViewController *) list viewControllerForRow:(NSUInteger) row;
```

## Parameters

- `list`: The widget’s list view controller that is requesting this content view controller.
- `row`: The number of the row in the list.

<a id="return-value"></a>

## Return Value

A custom view controller to manage the content in the specified row.
