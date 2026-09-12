> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/widgetcenter/userinfokey](https://developer.apple.com/documentation/widgetkit/widgetcenter/userinfokey)

# WidgetCenter.UserInfoKey

**Framework:** WidgetKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 26.0+ · watchOS 9.0+

An object that defines keys for accessing information in a user info dictionary.

## Declaration

```swift
struct UserInfoKey
```

<a id="overview"></a>

## Overview

> **Note**

> In Objective-C, use [WGWidgetUserInfoKeyFamily](../wgwidgetuserinfokeyfamily.md) and [WGWidgetUserInfoKeyKind](../wgwidgetuserinfokeykind.md) instead.

## Topics

### Describing a widget

- [family](userinfokey/family.md): A key you use to access the widget’s family.
- [kind](userinfokey/kind.md): A key you use to access the widget’s kind. The value matches the `kind` property specified in the widget’s configuration.

### Describing a Live Activity

- [activityID](userinfokey/activityid.md): A key you use to access the activity ID if the widget represents a Live Activity.

## See Also

### Getting Widget Information

- [shared](shared.md): The shared widget center.
- [getCurrentConfigurations(\_:)](getcurrentconfigurations%28__%29.md): Retrieves information about user-configured widgets.
