> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbaritemplacement/confirmationaction](https://developer.apple.com/documentation/swiftui/toolbaritemplacement/confirmationaction)

# confirmationAction

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A placement for confirmation actions in a modal interface.

## Declaration

```swift
static let confirmationAction: ToolbarItemPlacement
```

<a id="discussion"></a>

## Discussion

Use confirmation actions to receive user confirmation of a particular action. An example of a confirmation action would be an action with the label “Add” to add a new event to the calendar.

In macOS and in Mac Catalyst apps, the system places `confirmationAction` items on the trailing edge in the trailing-most position of the sheet and gain the apps accent color as a background color.

In iOS, iPadOS, and tvOS, the system places `confirmationAction` items in the same location as a [primaryAction](primaryaction.md) placement.

In watchOS, the system places `confirmationAction` items in the trailing edge of the navigation bar.

## See Also

### Getting placement for specific actions

- [primaryAction](primaryaction.md): A placement for the primary action.
- [secondaryAction](secondaryaction.md): A placement for secondary actions.
- [cancellationAction](cancellationaction.md): A placement for cancellation actions in a modal interface.
- [destructiveAction](destructiveaction.md): A placement for destructive actions in a modal interface.
- [navigation](navigation.md): A placement for navigation actions.
