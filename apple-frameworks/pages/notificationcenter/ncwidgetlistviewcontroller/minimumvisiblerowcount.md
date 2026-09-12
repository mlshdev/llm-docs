> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncwidgetlistviewcontroller/minimumvisiblerowcount](https://developer.apple.com/documentation/notificationcenter/ncwidgetlistviewcontroller/minimumvisiblerowcount)

# minimumVisibleRowCount (Swift)

**Framework:** Notification Center  
**Kind:** Instance Property  
**Availability:** macOS 10.10+ (deprecated in 11.0)

The minimum number of visible rows to display.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```swift
var minimumVisibleRowCount: Int { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to ensure that the widget’s list displays a minimum number of rows. The default value of this property is `0`.

If the value of `minimumVisibleRowCount` is nonzero and the number of items in [contents](contents.md) is greater than this value, the list view controller displays the minimum number of rows and adds a “Show More…” button.

## See Also

### Customizing the List Appearance

- [hasDividerLines](hasdividerlines.md): Deprecated. A Boolean value that indicates whether list displays divider lines between rows.

# minimumVisibleRowCount (Objective-C)

**Framework:** Notification Center  
**Kind:** Instance Property  
**Availability:** macOS 10.10+ (deprecated in 11.0)

The minimum number of visible rows to display.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```objectivec
@property (assign) NSUInteger minimumVisibleRowCount;
```

<a id="Discussion"></a>

## Discussion

Set this property to ensure that the widget’s list displays a minimum number of rows. The default value of this property is `0`.

If the value of `minimumVisibleRowCount` is nonzero and the number of items in [contents](contents.md) is greater than this value, the list view controller displays the minimum number of rows and adds a “Show More…” button.

## See Also

### Customizing the List Appearance

- [hasDividerLines](hasdividerlines.md): Deprecated. A Boolean value that indicates whether list displays divider lines between rows.
