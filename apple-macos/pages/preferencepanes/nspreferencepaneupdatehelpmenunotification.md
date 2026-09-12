> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/preferencepanes/nspreferencepaneupdatehelpmenunotification](https://developer.apple.com/documentation/preferencepanes/nspreferencepaneupdatehelpmenunotification)

# NSPreferencePaneUpdateHelpMenuNotification

**Interface language:** Objective-C

**Framework:** Preference Panes  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

Notifies observers that your help menu content changed.

## Declaration

```objectivec
extern NSString * const NSPreferencePaneUpdateHelpMenuNotification;
```

<a id="Discussion"></a>

## Discussion

The object of the notification is an array of dictionaries containing the new help menu contents.

## See Also

### Notifications

- [NSPreferencePrefPaneIsAvailableNotification](nspreferenceprefpaneisavailablenotification.md): Notifies observers that the system preferences app is available to display your preferences.
- [NSPreferencePaneDoUnselectNotification](nspreferencepanedounselectnotification.md): Notifies observers that the preference pane may be deselected.
- [NSPreferencePaneCancelUnselectNotification](nspreferencepanecancelunselectnotification.md): Notifies observers that the preference pane should not be deselected.
- [NSPreferencePaneSwitchToPaneNotification](nspreferencepaneswitchtopanenotification.md): Notifies observers that the user selected a new preference pane.
