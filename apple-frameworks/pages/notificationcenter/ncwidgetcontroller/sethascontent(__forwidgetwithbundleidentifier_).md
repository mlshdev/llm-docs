> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncwidgetcontroller/sethascontent(_:forwidgetwithbundleidentifier:)](https://developer.apple.com/documentation/notificationcenter/ncwidgetcontroller/sethascontent(_:forwidgetwithbundleidentifier:))

# setHasContent(\_:forWidgetWithBundleIdentifier:) (Swift)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 8.0+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0)

Sets whether the specified widget has content to display.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```swift
func setHasContent(_ flag: Bool, forWidgetWithBundleIdentifier bundleID: String)
```

## Parameters

- `flag`: Indicates whether the widget has content to display. Default value is [true](https://developer.apple.com/documentation/swift/true).
- `bundleID`: The bundle identifier of the widget.

<a id="Discussion"></a>

## Discussion

Both a widget and its containing app can use this method to specify whether the widget has content to display. The value of `flag` determines whether a widget should be visible in the Today view and whether the widget’s most recent snapshot is still valid.

# setHasContent:forWidgetWithBundleIdentifier: (Objective-C)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 8.0+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0)

Sets whether the specified widget has content to display.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```objectivec
- (void) setHasContent:(BOOL) flag forWidgetWithBundleIdentifier:(NSString *) bundleID;
```

## Parameters

- `flag`: Indicates whether the widget has content to display. Default value is [true](https://developer.apple.com/documentation/swift/true).
- `bundleID`: The bundle identifier of the widget.

<a id="Discussion"></a>

## Discussion

Both a widget and its containing app can use this method to specify whether the widget has content to display. The value of `flag` determines whether a widget should be visible in the Today view and whether the widget’s most recent snapshot is still valid.
