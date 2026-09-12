> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncwidgetlistviewcontroller/row(for:)](https://developer.apple.com/documentation/notificationcenter/ncwidgetlistviewcontroller/row(for:))

# row(for:) (Swift)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** macOS 10.10+ (deprecated in 11.0)

Returns the row represented by the specified content view controller.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```swift
func row(for viewController: NSViewController) -> Int
```

## Parameters

- `viewController`: The content view controller created by the delegate to display the object in the row.

<a id="return-value"></a>

## Return Value

The row represented by the content view controller.

## See Also

### Accessing Content

- [contents](contents.md): Deprecated. An array of objects to display in the list view.
- [viewController(atRow:makeIfNecessary:)](viewcontroller%28atrow_makeifnecessary_%29.md): Deprecated. Returns the content view controller associated with the specified row, or a new content view controller if desired.

# rowForViewController: (Objective-C)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** macOS 10.10+ (deprecated in 11.0)

Returns the row represented by the specified content view controller.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```objectivec
- (NSUInteger) rowForViewController:(NSViewController *) viewController;
```

## Parameters

- `viewController`: The content view controller created by the delegate to display the object in the row.

<a id="return-value"></a>

## Return Value

The row represented by the content view controller.

## See Also

### Accessing Content

- [contents](contents.md): Deprecated. An array of objects to display in the list view.
- [viewControllerAtRow:makeIfNecessary:](viewcontroller%28atrow_makeifnecessary_%29.md): Deprecated. Returns the content view controller associated with the specified row, or a new content view controller if desired.
