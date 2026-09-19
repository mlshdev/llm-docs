> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nspreferencepaneupdatehelpmenu

# NSPreferencePaneUpdateHelpMenu

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 10.0+

Notifies observers that your help menu content changed.

## Declaration

```swift
static let NSPreferencePaneUpdateHelpMenu: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The object of the notification is an array of dictionaries containing the new help menu contents.

## See Also

### PreferencePanes

- [NSPreferencePaneCancelUnselect](nspreferencepanecancelunselect.md): Notifies observers that the preference pane should not be deselected.
- [NSPreferencePaneDoUnselect](nspreferencepanedounselect.md): Notifies observers that the preference pane may be deselected.
- [NSPreferencePaneSwitchToPane](nspreferencepaneswitchtopane.md): Notifies observers that the user selected a new preference pane.
- [NSPreferencePrefPaneIsAvailable](nspreferenceprefpaneisavailable.md): Notifies observers that the system preferences app is available to display your preferences.
