> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/activitybackgroundtint(_:)](https://developer.apple.com/documentation/swiftui/view/activitybackgroundtint(_:))

# activityBackgroundTint(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+

Sets the tint color for the background of a Live Activity that appears on the Lock Screen.

## Declaration

```swift
@MainActor @preconcurrency func activityBackgroundTint(_ color: Color?) -> some View

```

## Parameters

- `color`: The background tint color to apply. To use the system’s default background material, pass `nil`.

<a id="discussion"></a>

## Discussion

When you set a custom background tint color, consider setting a custom text color for the auxiliary button people use to end a Live Activity on the Lock Screen. To set a custom text color, use the [activitySystemActionForegroundColor(\_:)](activitysystemactionforegroundcolor%28__%29.md) view modifier.

## See Also

### Configuring a Live Activity

- [activitySystemActionForegroundColor(\_:)](activitysystemactionforegroundcolor%28__%29.md): The text color for the auxiliary action button that the system shows next to a Live Activity on the Lock Screen.
- [isActivityFullscreen](../environmentvalues/isactivityfullscreen.md): A Boolean value that indicates whether the Live Activity appears in a full-screen presentation.
- [activityFamily](../environmentvalues/activityfamily.md): The size family of the current Live Activity.
