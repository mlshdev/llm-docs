> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/environmentvalues/isactivityfullscreen

# isActivityFullscreen

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 16.1+ · iPadOS 16.1+

A Boolean value that indicates whether the Live Activity appears in a full-screen presentation.

## Declaration

```swift
@backDeployed(before: iOS 17.0)
var isActivityFullscreen: Bool { get }
```

<a id="discussion"></a>

## Discussion

When a Live Activity fills the entire screen, the system extends the background tint color you set with the [activityBackgroundTint(\_:)](../view/activitybackgroundtint%28__%29.md) modifier to fill the screen.

Note that this environment variable is always `false` in iOS 16.

## See Also

### Configuring a Live Activity

- [activitySystemActionForegroundColor(\_:)](../view/activitysystemactionforegroundcolor%28__%29.md): The text color for the auxiliary action button that the system shows next to a Live Activity on the Lock Screen.
- [activityBackgroundTint(\_:)](../view/activitybackgroundtint%28__%29.md): Sets the tint color for the background of a Live Activity that appears on the Lock Screen.
- [activityFamily](activityfamily.md): The size family of the current Live Activity.
