> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/nspreferencepanedounselect](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nspreferencepanedounselect)

# NSPreferencePaneDoUnselect

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 10.0+

Notifies observers that the preference pane may be deselected.

## Declaration

```swift
static let NSPreferencePaneDoUnselect: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

Posted when [reply(toShouldUnselect:)](https://developer.apple.com/documentation/preferencepanes/nspreferencepane/reply%28toshouldunselect:%29) is invoked with an argument of [true](https://developer.apple.com/documentation/swift/true) after [shouldUnselect](https://developer.apple.com/documentation/preferencepanes/nspreferencepane/shouldunselect) has returned a value of [NSPreferencePaneUnselectReply.unselectLater](https://developer.apple.com/documentation/preferencepanes/nspreferencepaneunselectreply/unselectlater).

## See Also

### PreferencePanes

- [NSPreferencePaneCancelUnselect](nspreferencepanecancelunselect.md): Notifies observers that the preference pane should not be deselected.
- [NSPreferencePaneSwitchToPane](nspreferencepaneswitchtopane.md): Notifies observers that the user selected a new preference pane.
- [NSPreferencePaneUpdateHelpMenu](nspreferencepaneupdatehelpmenu.md): Notifies observers that your help menu content changed.
- [NSPreferencePrefPaneIsAvailable](nspreferenceprefpaneisavailable.md): Notifies observers that the system preferences app is available to display your preferences.
