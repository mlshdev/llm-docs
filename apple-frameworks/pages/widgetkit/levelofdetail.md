> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/levelofdetail](https://developer.apple.com/documentation/widgetkit/levelofdetail)

# LevelOfDetail

**Framework:** WidgetKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

The level of detail the view is recommended to have.

## Declaration

```swift
struct LevelOfDetail
```

<a id="overview"></a>

## Overview

The system can update the levelOfDetail value based on user proximity or other system specific factors and allow content customization adapting to show different levels of details.

> **Note**

> The `levelOfDetail` can be determined by different factors depending on the platforms. On visionOS, it would be user proximity. On all non-visionOS platforms this will always be `default` LevelOfDetail

## Topics

### Type Properties

- [default](levelofdetail/default.md): The default level of details.
- [simplified](levelofdetail/simplified.md): The level of detail should be simplified.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### visionOS widgets

- [Updating your widgets for visionOS](updating-your-widgets-for-visionos.md): Choose widget styles specific to visionOS, support recessed and elevated appearances, and add proximity awareness to your widget.
- [widgetTexture(\_:)](https://developer.apple.com/documentation/swiftui/widgetconfiguration/widgettexture%28_:%29): Specifies the widget texture for this widget.
- [WidgetTexture](widgettexture.md): Values that define the texture of the widget’s coating layer.
- [supportedMountingStyles(\_:)](https://developer.apple.com/documentation/swiftui/widgetconfiguration/supportedmountingstyles%28_:%29): Specifies the mounting style for this widget.
- [WidgetMountingStyle](widgetmountingstyle.md): Values that define the widget’s supported mounting style.
