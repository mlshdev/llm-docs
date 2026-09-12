> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiacceleration](https://developer.apple.com/documentation/uikit/uiacceleration)

# UIAcceleration

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Class

An acceleration event that represents immediate, three-dimensional acceleration data.

> Use the [Core Motion](../coremotion.md) framework instead.

## Declaration

```objectivec
@interface UIAcceleration : NSObject
```

<a id="overview"></a>

## Overview

To receive accelerometer events, register an application object as a delegate of the shared [UIAccelerometer](uiaccelerometer.md) object, as described in [UIAccelerometer](uiaccelerometer.md).

Each acceleration event includes simultaneous acceleration readings along the three axes of the device, as shown in the following image.

![Orientation of the device axes](https://developer.apple.com/images/com.apple.uikit/media-1965794.jpg)

The device accelerometer reports values for each axis in units of g-force, where a value of `1.0` represents acceleration of about +1 g along a given axis. When a device is laying still with its back on a horizontal surface, each acceleration event has approximately the following values:

```objc
x: 0
y: 0
z: -1
```

Individual acceleration values are of type [UIAccelerationValue](uiaccelerationvalue.md), equivalent to a `double`. Values can range over the accelerations found in normal use of a device.

> **Note**

>  Acceleration event values are approximate—don’t attempt to use them to make precise measurements. Apple recommends that you average accelerometer values over time to derive usable data.

If you want to detect specific types of motion as gestures—specifically, shaking motions—use the [UIEvent](uievent.md) class and its [UIEventTypeMotion](uievent/eventtype/motion.md) event type. For details, see [Handling Tap and Long-Press Gestures](https://developer.apple.com/library/archive/documentation/EventHandling/Conceptual/EventHandlingiPhoneOS/HandlingTapandLongPressGestures.html#//apple_ref/doc/uid/TP40009541-CH4) in [Event Handling Guide for UIKit Apps](https://developer.apple.com/library/archive/documentation/EventHandling/Conceptual/EventHandlingiPhoneOS/index.html#//apple_ref/doc/uid/TP40009541).

## Topics

### Accessing the acceleration values

- [x](uiacceleration/x.md): Deprecated. The acceleration value for the x axis of the device.
- [y](uiacceleration/y.md): Deprecated. The acceleration value for the y axis of the device.
- [z](uiacceleration/z.md): Deprecated. The acceleration value for the z axis of the device.
- [timestamp](uiacceleration/timestamp.md): Deprecated. The relative time at which the acceleration event occurred.

### Constants

- [UIAccelerationValue](uiaccelerationvalue.md): Deprecated. The amount of acceleration in a single linear direction.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Deprecated classes

- [UIAccelerometer](uiaccelerometer.md): Deprecated. An object that lets you register to receive acceleration-related data from the onboard hardware.
- [UIActionSheet](uiactionsheet.md): Deprecated. A view that presents a set of alternatives for how to proceed with a task.
- [UIAlertView](uialertview.md): Deprecated. A view that displays an alert message.
- [UIDocumentMenuViewController](uidocumentmenuviewcontroller.md): Deprecated. A list of all the available document providers for a given file type and mode, in addition to custom menu items that you add.
- [UILocalNotification](uilocalnotification.md): Deprecated. A notification that an app can schedule for presentation at a specific date and time.
- [UIMenuController](uimenucontroller.md): Deprecated. The menu interface for the Cut, Copy, Paste, Select, Select All, and Delete commands.
- [UIMenuItem](uimenuitem.md): Deprecated. A custom item in the editing menu managed by the menu controller.
- [UIMutableUserNotificationAction](uimutableusernotificationaction.md): Deprecated. A modifiable version of the user notification action class.
- [UIMutableUserNotificationCategory](uimutableusernotificationcategory.md): Deprecated. Information about custom actions that your app can perform in response to a local or push notification.
- [UIPopoverController](uipopovercontroller.md): Deprecated. An object that manages the presentation of content in a popover.
- [UIPreviewAction](uipreviewaction.md): Deprecated. A preview action, or *peek quick action*, that displays below a peek when a user swipes the peek upward.
- [UIPreviewActionGroup](uipreviewactiongroup.md): Deprecated. A group of one or more child quick actions, each an instance of the preview action class.
- [UISearchDisplayController](uisearchdisplaycontroller.md): Deprecated. An object that manages the display of a search bar, along with a table view that displays search results.
- [UIStoryboardPopoverSegue](uistoryboardpopoversegue.md): Deprecated. A specific type of segue for presenting content in a popover.
- [UIWebView](uiwebview.md): Deprecated. A view that embeds web content in your app.
