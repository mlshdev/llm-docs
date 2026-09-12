> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncwidgetcontroller/widgetcontroller()](https://developer.apple.com/documentation/notificationcenter/ncwidgetcontroller/widgetcontroller())

# widgetController() (Swift)

**Framework:** Notification Center  
**Kind:** Type Method  
**Availability:** macOS 10.10+ (deprecated in 11.0)

Returns a widget controller used to specify whether a widget has content to display.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```swift
class func widgetController() -> Self
```

<a id="return-value"></a>

## Return Value

A widget controller.

<a id="Discussion"></a>

## Discussion

Both a widget and its containing app can get a widget controller object to specify whether there is content the widget should display.

# widgetController (Objective-C)

**Framework:** Notification Center  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 8.0+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0)

Returns a widget controller used to specify whether a widget has content to display.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```objectivec
+ (instancetype) widgetController;
```

<a id="return-value"></a>

## Return Value

A widget controller.

<a id="Discussion"></a>

## Discussion

Both a widget and its containing app can get a widget controller object to specify whether there is content the widget should display.
