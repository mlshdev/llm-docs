> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncwidgetproviding](https://developer.apple.com/documentation/notificationcenter/ncwidgetproviding)

# NCWidgetProviding (Swift)

**Framework:** Notification Center  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 10.0+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0)

The interface for customizing the appearance and behavior of a Today widget.

> Use [WidgetKit](../widgetkit.md) instead.

## Declaration

```swift
protocol NCWidgetProviding : NSObjectProtocol
```

```swift
protocol NCWidgetProviding : NSExtensionRequestHandling
```

<a id="overview"></a>

## Overview

The `NCWidgetProviding` protocol allows customization of the appearance and behavior of a Today widget.

## Topics

### Customizing the Display

- [widgetMarginInsets(forProposedMarginInsets:)](ncwidgetproviding/widgetmargininsets%28forproposedmargininsets_%29.md): Deprecated. Called to let a widget accept the default margin inset values or return custom values to use instead.
- [widgetActiveDisplayModeDidChange(\_:withMaximumSize:)](ncwidgetproviding/widgetactivedisplaymodedidchange%28__withmaximumsize_%29.md): Deprecated. Called when the active display mode changes.
- [NCWidgetDisplayMode](ncwidgetdisplaymode.md): Deprecated. The modes that can be toggled between when the user activates the More button for a widget running in iOS.

### Updating a Widget’s Contents

- [widgetPerformUpdate(completionHandler:)](ncwidgetproviding/widgetperformupdate%28completionhandler_%29.md): Deprecated. Called to give a widget an opportunity to update its contents.
- [NCUpdateResult](ncupdateresult.md): Deprecated. The result of updating a widget’s state.

### Supporting Editing

- [widgetAllowsEditing](ncwidgetproviding/widgetallowsediting.md): Deprecated. A Boolean value indicating whether the widget can be edited by users.
- [widgetDidBeginEditing()](ncwidgetproviding/widgetdidbeginediting%28%29.md): Deprecated. Called when a user chooses the widget’s begin editing button.
- [widgetDidEndEditing()](ncwidgetproviding/widgetdidendediting%28%29.md): Deprecated. Called when a widget’s editing session ends.

## Relationships

### Inherits From

- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Core Widget

- [NCWidgetController](ncwidgetcontroller.md): Deprecated. An object used to specify whether a Today widget has content to display.

# NCWidgetProviding (Objective-C)

**Framework:** Notification Center  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 10.0+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0)

The interface for customizing the appearance and behavior of a Today widget.

> Use [WidgetKit](../widgetkit.md) instead.

## Declaration

```objectivec
@protocol NCWidgetProviding <NSObject>
```

```objectivec
@protocol NCWidgetProviding <NSExtensionRequestHandling>
```

<a id="overview"></a>

## Overview

The `NCWidgetProviding` protocol allows customization of the appearance and behavior of a Today widget.

## Topics

### Customizing the Display

- [widgetMarginInsetsForProposedMarginInsets:](ncwidgetproviding/widgetmargininsets%28forproposedmargininsets_%29.md): Deprecated. Called to let a widget accept the default margin inset values or return custom values to use instead.
- [widgetActiveDisplayModeDidChange:withMaximumSize:](ncwidgetproviding/widgetactivedisplaymodedidchange%28__withmaximumsize_%29.md): Deprecated. Called when the active display mode changes.
- [NCWidgetDisplayMode](ncwidgetdisplaymode.md): Deprecated. The modes that can be toggled between when the user activates the More button for a widget running in iOS.

### Updating a Widget’s Contents

- [widgetPerformUpdateWithCompletionHandler:](ncwidgetproviding/widgetperformupdate%28completionhandler_%29.md): Deprecated. Called to give a widget an opportunity to update its contents.
- [NCUpdateResult](ncupdateresult.md): Deprecated. The result of updating a widget’s state.

### Supporting Editing

- [widgetAllowsEditing](ncwidgetproviding/widgetallowsediting.md): Deprecated. A Boolean value indicating whether the widget can be edited by users.
- [widgetDidBeginEditing](ncwidgetproviding/widgetdidbeginediting%28%29.md): Deprecated. Called when a user chooses the widget’s begin editing button.
- [widgetDidEndEditing](ncwidgetproviding/widgetdidendediting%28%29.md): Deprecated. Called when a widget’s editing session ends.

## Relationships

### Inherits From

- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Core Widget

- [NCWidgetController](ncwidgetcontroller.md): Deprecated. An object used to specify whether a Today widget has content to display.
