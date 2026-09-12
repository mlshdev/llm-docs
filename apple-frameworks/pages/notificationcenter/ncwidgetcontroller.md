> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncwidgetcontroller](https://developer.apple.com/documentation/notificationcenter/ncwidgetcontroller)

# NCWidgetController (Swift)

**Framework:** Notification Center  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 8.0+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0)

An object used to specify whether a Today widget has content to display.

> Use [WidgetKit](../widgetkit.md) instead.

## Declaration

```swift
class NCWidgetController
```

<a id="overview"></a>

## Overview

The `NCWidgetController` class defines an object that both a Today widget and the containing app that delivers the widget can use to specify whether the widget has content to display. Because this class helps a widget and its containing app coordinate the display of the widget’s content, a widget that doesn’t communicate with its containing app is unlikely to use this class.

Typically, a widget appears in the Today view when it has content to display. If a currently running widget no longer has content to display, it can get a widget controller and set the flag in the [setHasContent(\_:forWidgetWithBundleIdentifier:)](ncwidgetcontroller/sethascontent%28__forwidgetwithbundleidentifier_%29.md) method to `false`. If the containing app later determines that there is content this widget should display, the app can get a widget controller and update the flag, even while the widget isn’t running.

The `NCWidgetController` class should not be subclassed.

## Topics

### Getting a Widget Controller

- [widgetController()](ncwidgetcontroller/widgetcontroller%28%29.md): Deprecated. Returns a widget controller used to specify whether a widget has content to display.

### Specifying the Presence of Content

- [setHasContent(\_:forWidgetWithBundleIdentifier:)](ncwidgetcontroller/sethascontent%28__forwidgetwithbundleidentifier_%29.md): Deprecated. Sets whether the specified widget has content to display.

### Type Methods

- [default()](ncwidgetcontroller/default%28%29.md): Deprecated.

### Initializers

- [init()](ncwidgetcontroller/init%28%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Core Widget

- [NCWidgetProviding](ncwidgetproviding.md): Deprecated. The interface for customizing the appearance and behavior of a Today widget.

# NCWidgetController (Objective-C)

**Framework:** Notification Center  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 8.0+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0)

An object used to specify whether a Today widget has content to display.

> Use [WidgetKit](../widgetkit.md) instead.

## Declaration

```objectivec
@interface NCWidgetController : NSObject
```

<a id="overview"></a>

## Overview

The `NCWidgetController` class defines an object that both a Today widget and the containing app that delivers the widget can use to specify whether the widget has content to display. Because this class helps a widget and its containing app coordinate the display of the widget’s content, a widget that doesn’t communicate with its containing app is unlikely to use this class.

Typically, a widget appears in the Today view when it has content to display. If a currently running widget no longer has content to display, it can get a widget controller and set the flag in the [setHasContent:forWidgetWithBundleIdentifier:](ncwidgetcontroller/sethascontent%28__forwidgetwithbundleidentifier_%29.md) method to `false`. If the containing app later determines that there is content this widget should display, the app can get a widget controller and update the flag, even while the widget isn’t running.

The `NCWidgetController` class should not be subclassed.

## Topics

### Getting a Widget Controller

- [widgetController](ncwidgetcontroller/widgetcontroller%28%29.md): Deprecated. Returns a widget controller used to specify whether a widget has content to display.

### Specifying the Presence of Content

- [setHasContent:forWidgetWithBundleIdentifier:](ncwidgetcontroller/sethascontent%28__forwidgetwithbundleidentifier_%29.md): Deprecated. Sets whether the specified widget has content to display.

### Type Methods

- [defaultWidgetController](ncwidgetcontroller/default%28%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Core Widget

- [NCWidgetProviding](ncwidgetproviding.md): Deprecated. The interface for customizing the appearance and behavior of a Today widget.
