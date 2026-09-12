> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextselectiondisplayinteraction/setneedsselectionupdate()](https://developer.apple.com/documentation/uikit/uitextselectiondisplayinteraction/setneedsselectionupdate())

# setNeedsSelectionUpdate() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Tells the system to update the selection UI to match the current selection state.

## Declaration

```swift
func setNeedsSelectionUpdate()
```

## Mentioned In

- [Adopting system selection UI in custom text views](../adopting-system-selection-ui-in-custom-text-views.md)

<a id="Discussion"></a>

## Discussion

When the selection state changes in your text input view, call this method to notify the system of the change. The system fetches the current selection state from your text input view and updates the system UI to match.

## See Also

### Reporting changes to the selection

- [layoutManagedSubviews()](layoutmanagedsubviews%28%29.md): Loads the selection from the text input view and lays out the selection-related views.

# setNeedsSelectionUpdate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Tells the system to update the selection UI to match the current selection state.

## Declaration

```objectivec
- (void) setNeedsSelectionUpdate;
```

## Mentioned In

- [Adopting system selection UI in custom text views](../adopting-system-selection-ui-in-custom-text-views.md)

<a id="Discussion"></a>

## Discussion

When the selection state changes in your text input view, call this method to notify the system of the change. The system fetches the current selection state from your text input view and updates the system UI to match.

## See Also

### Reporting changes to the selection

- [layoutManagedSubviews](layoutmanagedsubviews%28%29.md): Loads the selection from the text input view and lays out the selection-related views.
