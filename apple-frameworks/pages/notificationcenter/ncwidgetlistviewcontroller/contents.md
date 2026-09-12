> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncwidgetlistviewcontroller/contents](https://developer.apple.com/documentation/notificationcenter/ncwidgetlistviewcontroller/contents)

# contents (Swift)

**Framework:** Notification Center  
**Kind:** Instance Property  
**Availability:** macOS 10.10+ (deprecated in 11.0)

An array of objects to display in the list view.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```swift
var contents: [Any] { get set }
```

<a id="Discussion"></a>

## Discussion

The list view controller asks its delegate for a new content view controller for each object in `contents`, and sets the [representedObject](https://developer.apple.com/documentation/appkit/nsviewcontroller/representedobject) of the newly created content view controller accordingly. To optimize content resetting, the list view controller may reuse content view controllers for identical objects that already exist in `contents`.

## See Also

### Accessing Content

- [row(for:)](row%28for_%29.md): Deprecated. Returns the row represented by the specified content view controller.
- [viewController(atRow:makeIfNecessary:)](viewcontroller%28atrow_makeifnecessary_%29.md): Deprecated. Returns the content view controller associated with the specified row, or a new content view controller if desired.

# contents (Objective-C)

**Framework:** Notification Center  
**Kind:** Instance Property  
**Availability:** macOS 10.10+ (deprecated in 11.0)

An array of objects to display in the list view.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```objectivec
@property (copy) NSArray<id> * contents;
```

<a id="Discussion"></a>

## Discussion

The list view controller asks its delegate for a new content view controller for each object in `contents`, and sets the [representedObject](https://developer.apple.com/documentation/appkit/nsviewcontroller/representedobject) of the newly created content view controller accordingly. To optimize content resetting, the list view controller may reuse content view controllers for identical objects that already exist in `contents`.

## See Also

### Accessing Content

- [rowForViewController:](row%28for_%29.md): Deprecated. Returns the row represented by the specified content view controller.
- [viewControllerAtRow:makeIfNecessary:](viewcontroller%28atrow_makeifnecessary_%29.md): Deprecated. Returns the content view controller associated with the specified row, or a new content view controller if desired.
