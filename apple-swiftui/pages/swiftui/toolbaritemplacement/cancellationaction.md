> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbaritemplacement/cancellationaction](https://developer.apple.com/documentation/swiftui/toolbaritemplacement/cancellationaction)

# cancellationAction

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A placement for cancellation actions in a modal interface.

## Declaration

```swift
static let cancellationAction: ToolbarItemPlacement
```

<a id="discussion"></a>

## Discussion

Cancellation actions dismiss the modal interface without taking any action, usually by tapping or clicking a Cancel button.

In macOS and in Mac Catalyst apps, the system places `cancellationAction` items on the trailing edge of the sheet but places them before any [confirmationAction](confirmationaction.md) items.

In iOS, iPadOS, tvOS, and watchOS, the system places `cancellationAction` items on the leading edge of the navigation bar.

## See Also

### Getting placement for specific actions

- [primaryAction](primaryaction.md): A placement for the primary action.
- [secondaryAction](secondaryaction.md): A placement for secondary actions.
- [confirmationAction](confirmationaction.md): A placement for confirmation actions in a modal interface.
- [destructiveAction](destructiveaction.md): A placement for destructive actions in a modal interface.
- [navigation](navigation.md): A placement for navigation actions.
