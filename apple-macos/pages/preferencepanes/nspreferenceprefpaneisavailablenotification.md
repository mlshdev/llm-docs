> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/preferencepanes/nspreferenceprefpaneisavailablenotification](https://developer.apple.com/documentation/preferencepanes/nspreferenceprefpaneisavailablenotification)

# NSPreferencePrefPaneIsAvailableNotification

**Interface language:** Objective-C

**Framework:** Preference Panes  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

Notifies observers that the system preferences app is available to display your preferences.

## Declaration

```objectivec
extern NSString * const NSPreferencePrefPaneIsAvailableNotification;
```

## See Also

### Notifications

- [NSPreferencePaneDoUnselectNotification](nspreferencepanedounselectnotification.md): Notifies observers that the preference pane may be deselected.
- [NSPreferencePaneCancelUnselectNotification](nspreferencepanecancelunselectnotification.md): Notifies observers that the preference pane should not be deselected.
- [NSPreferencePaneSwitchToPaneNotification](nspreferencepaneswitchtopanenotification.md): Notifies observers that the user selected a new preference pane.
- [NSPreferencePaneUpdateHelpMenuNotification](nspreferencepaneupdatehelpmenunotification.md): Notifies observers that your help menu content changed.
