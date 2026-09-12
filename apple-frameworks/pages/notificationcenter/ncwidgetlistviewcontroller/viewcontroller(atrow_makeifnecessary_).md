> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncwidgetlistviewcontroller/viewcontroller(atrow:makeifnecessary:)](https://developer.apple.com/documentation/notificationcenter/ncwidgetlistviewcontroller/viewcontroller(atrow:makeifnecessary:))

# viewController(atRow:makeIfNecessary:) (Swift)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** macOS 10.10+ (deprecated in 11.0)

Returns the content view controller associated with the specified row, or a new content view controller if desired.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```swift
func viewController(atRow row: Int, makeIfNecessary makeIfNecesary: Bool) -> NSViewController
```

## Parameters

- `row`: The row in the list.
- `makeIfNecesary`: Specify [true](https://developer.apple.com/documentation/swift/true) to create a new content view controller if none exists or [false](https://developer.apple.com/documentation/swift/false) to reuse an existing row.

<a id="return-value"></a>

## Return Value

The content view controller associated with the specified row, if one exists. Returns `nil` if the row doesn’t have a content view controller and you don’t want to create one.

## See Also

### Accessing Content

- [contents](contents.md): Deprecated. An array of objects to display in the list view.
- [row(for:)](row%28for_%29.md): Deprecated. Returns the row represented by the specified content view controller.

# viewControllerAtRow:makeIfNecessary: (Objective-C)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** macOS 10.10+ (deprecated in 11.0)

Returns the content view controller associated with the specified row, or a new content view controller if desired.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```objectivec
- (NSViewController *) viewControllerAtRow:(NSUInteger) row makeIfNecessary:(BOOL) makeIfNecesary;
```

## Parameters

- `row`: The row in the list.
- `makeIfNecesary`: Specify [true](https://developer.apple.com/documentation/swift/true) to create a new content view controller if none exists or [false](https://developer.apple.com/documentation/swift/false) to reuse an existing row.

<a id="return-value"></a>

## Return Value

The content view controller associated with the specified row, if one exists. Returns `nil` if the row doesn’t have a content view controller and you don’t want to create one.

## See Also

### Accessing Content

- [contents](contents.md): Deprecated. An array of objects to display in the list view.
- [rowForViewController:](row%28for_%29.md): Deprecated. Returns the row represented by the specified content view controller.
