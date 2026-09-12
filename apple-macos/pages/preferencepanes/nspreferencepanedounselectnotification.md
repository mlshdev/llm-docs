> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/preferencepanes/nspreferencepanedounselectnotification](https://developer.apple.com/documentation/preferencepanes/nspreferencepanedounselectnotification)

# NSPreferencePaneDoUnselectNotification

**Interface language:** Objective-C

**Framework:** Preference Panes  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

Notifies observers that the preference pane may be deselected.

## Declaration

```objectivec
extern NSString * const NSPreferencePaneDoUnselectNotification;
```

<a id="Discussion"></a>

## Discussion

Posted when [replyToShouldUnselect:](nspreferencepane/reply%28toshouldunselect_%29.md) is invoked with an argument of [true](https://developer.apple.com/documentation/swift/true) after [shouldUnselect](nspreferencepane/shouldunselect.md) has returned a value of [NSUnselectLater](nspreferencepaneunselectreply/unselectlater.md).

## See Also

### Notifications

- [NSPreferencePrefPaneIsAvailableNotification](nspreferenceprefpaneisavailablenotification.md): Notifies observers that the system preferences app is available to display your preferences.
- [NSPreferencePaneCancelUnselectNotification](nspreferencepanecancelunselectnotification.md): Notifies observers that the preference pane should not be deselected.
- [NSPreferencePaneSwitchToPaneNotification](nspreferencepaneswitchtopanenotification.md): Notifies observers that the user selected a new preference pane.
- [NSPreferencePaneUpdateHelpMenuNotification](nspreferencepaneupdatehelpmenunotification.md): Notifies observers that your help menu content changed.
