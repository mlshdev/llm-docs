> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/widgetfamily/systemextralarge](https://developer.apple.com/documentation/widgetkit/widgetfamily/systemextralarge)

# WidgetFamily.systemExtraLarge

**Framework:** WidgetKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 14.0+ · visionOS 26.0+

An extra-large widget.

## Declaration

```swift
case systemExtraLarge
```

## Mentioned In

- [Updating your widgets for visionOS](../updating-your-widgets-for-visionos.md)
- [Adding interactivity to widgets and Live Activities](../adding-interactivity-to-widgets-and-live-activities.md)
- [Preparing widgets for additional platforms, contexts, and appearances](../preparing-widgets-for-additional-contexts-and-appearances.md)

<a id="discussion"></a>

## Discussion

Extra-large widgets are available in iPadOS and macOS. To add an extra-large widget to your visionOS app, use [WidgetFamily.systemExtraLargePortrait](systemextralargeportrait.md). To add an extra-large visionOS widget to a compatible iOS and iPadOS app, use the `systemExtraLarge` widget family. The extra-large widget appears in a portrait orientation, similar to the [WidgetFamily.systemExtraLargePortrait](systemextralargeportrait.md) widget of a visionOS app.

## See Also

### Accessing system families

- [WidgetFamily.systemSmall](systemsmall.md): A small widget.
- [WidgetFamily.systemMedium](systemmedium.md): A medium-sized widget.
- [WidgetFamily.systemLarge](systemlarge.md): A large widget.
- [WidgetFamily.systemExtraLargePortrait](systemextralargeportrait.md): An extra-large widget that uses a portrait orientation.
