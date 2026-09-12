> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/preferencepanes/nspreferencepane/didselect()](https://developer.apple.com/documentation/preferencepanes/nspreferencepane/didselect())

# didSelect() (Swift)

**Framework:** Preference Panes  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

Notifies the preference pane that the main app has just displayed the preference pane’s main view.

## Declaration

```swift
func didSelect()
```

<a id="Discussion"></a>

## Discussion

Default implementation does nothing. Override this method to perform actions right after the main view has been placed into a window on the screen.

## See Also

### Selecting and Deselecting the Preference Pane

- [willSelect()](willselect%28%29.md): Notifies the preference pane that the main app is about to display the preference pane’s main view.
- [willUnselect()](willunselect%28%29.md): Notifies the preference pane that the main app is about to stop displaying the preference pane’s main view.
- [didUnselect()](didunselect%28%29.md): Notifies the preference pane that the main app has just stopped displaying the preference pane’s main view.
- [isSelected](isselected.md): A Boolean value that indicates whether the preference pane is currently selected.
- [shouldUnselect](shouldunselect.md): A Boolean value that indicates whether the preference pane is able to be deselected.
- [NSPreferencePaneUnselectReply](../nspreferencepaneunselectreply.md): Constants that indicate the preference pane’s availability to be deselected.
- [reply(toShouldUnselect:)](reply%28toshouldunselect_%29.md): Notifies the main application of the preference pane’s ability to be deselected.

# didSelect (Objective-C)

**Framework:** Preference Panes  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

Notifies the preference pane that the main app has just displayed the preference pane’s main view.

## Declaration

```objectivec
- (void) didSelect;
```

<a id="Discussion"></a>

## Discussion

Default implementation does nothing. Override this method to perform actions right after the main view has been placed into a window on the screen.

## See Also

### Selecting and Deselecting the Preference Pane

- [willSelect](willselect%28%29.md): Notifies the preference pane that the main app is about to display the preference pane’s main view.
- [willUnselect](willunselect%28%29.md): Notifies the preference pane that the main app is about to stop displaying the preference pane’s main view.
- [didUnselect](didunselect%28%29.md): Notifies the preference pane that the main app has just stopped displaying the preference pane’s main view.
- [selected](isselected.md): A Boolean value that indicates whether the preference pane is currently selected.
- [shouldUnselect](shouldunselect.md): A Boolean value that indicates whether the preference pane is able to be deselected.
- [NSPreferencePaneUnselectReply](../nspreferencepaneunselectreply.md): Constants that indicate the preference pane’s availability to be deselected.
- [replyToShouldUnselect:](reply%28toshouldunselect_%29.md): Notifies the main application of the preference pane’s ability to be deselected.
