> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/widgetfamily/accessoryinline](https://developer.apple.com/documentation/widgetkit/widgetfamily/accessoryinline)

# WidgetFamily.accessoryInline

**Framework:** WidgetKit  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · watchOS 9.0+

A flat widget that contains a single row of text and an optional image.

## Declaration

```swift
case accessoryInline
```

## Mentioned In

- [Migrating ClockKit complications to WidgetKit](../converting-a-clockkit-app.md)
- [Creating views for widgets, Live Activities, and watch complications](../creating-views-for-widgets-live-activities-and-watch-complications.md)
- [Preparing widgets for additional platforms, contexts, and appearances](../preparing-widgets-for-additional-contexts-and-appearances.md)

<a id="discussion"></a>

## Discussion

The accessory inline widget can appear as a complication in watchOS, or on the Lock Screen in iOS and iPadOS. On some watch faces, the system renders the complication along a curve.

> **Note**

> Widgets on the iPad Lock Screen require iPadOS 17 or later.

## See Also

### Accessing accessory families

- [WidgetFamily.accessoryCircular](accessorycircular.md): A circular widget.
- [WidgetFamily.accessoryCorner](accessorycorner.md): A widget-based complication in the corner of a watch face in watchOS.
- [WidgetFamily.accessoryRectangular](accessoryrectangular.md): A rectangular widget.
