> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/activityfamily](https://developer.apple.com/documentation/swiftui/environmentvalues/activityfamily)

# activityFamily

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

The size family of the current Live Activity.

## Declaration

```swift
var activityFamily: ActivityFamily { get set }
```

<a id="discussion"></a>

## Discussion

A Live Activity you initiate on one device can also appear on a remote device that renders the Live Activity in a different family size. As a result, it renders for a specific family, depending on both the device and the location in which it appears. For example, when rendering on the iOS or iPadOS Lock Screen, the current family is doc://com.apple.comdumentation/documentation/WidgetKit/ActivityFamily/medium.

Use [supplementalActivityFamilies(\_:)](../widgetconfiguration/supplementalactivityfamilies%28__%29.md) to opt in and allow your Live Activity to render with additional families.

## See Also

### Configuring a Live Activity

- [activitySystemActionForegroundColor(\_:)](../view/activitysystemactionforegroundcolor%28__%29.md): The text color for the auxiliary action button that the system shows next to a Live Activity on the Lock Screen.
- [activityBackgroundTint(\_:)](../view/activitybackgroundtint%28__%29.md): Sets the tint color for the background of a Live Activity that appears on the Lock Screen.
- [isActivityFullscreen](isactivityfullscreen.md): A Boolean value that indicates whether the Live Activity appears in a full-screen presentation.
