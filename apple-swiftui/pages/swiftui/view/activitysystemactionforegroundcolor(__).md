> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/view/activitysystemactionforegroundcolor(_:)

# activitySystemActionForegroundColor(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+

The text color for the auxiliary action button that the system shows next to a Live Activity on the Lock Screen.

## Declaration

```swift
@MainActor @preconcurrency func activitySystemActionForegroundColor(_ color: Color?) -> some View

```

## Parameters

- `color`: The text color to use. Pass `nil` to use the system’s default color.

## See Also

### Configuring a Live Activity

- [activityBackgroundTint(\_:)](activitybackgroundtint%28__%29.md): Sets the tint color for the background of a Live Activity that appears on the Lock Screen.
- [isActivityFullscreen](../environmentvalues/isactivityfullscreen.md): A Boolean value that indicates whether the Live Activity appears in a full-screen presentation.
- [activityFamily](../environmentvalues/activityfamily.md): The size family of the current Live Activity.
