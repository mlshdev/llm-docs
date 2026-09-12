> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/preferencepanes](https://developer.apple.com/documentation/preferencepanes)

# Preference Panes (Swift)

**Framework:** Preference Panes  
**Kind:** Framework  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

Integrate your app’s custom preferences into the System Preferences app.

<a id="overview"></a>

## Overview

Use the Preference Panes framework to integrate your custom system-level preferences into the System Preferences app. You use this framework to implement a preference pane bundle, which contains the custom interface you want to display to the user. You then install your bundle in the appropriate `Library/PreferencePanes` directory on the user’s system.

System Preferences works with your bundle’s custom [NSPreferencePane](preferencepanes/nspreferencepane.md) object to manage the presentation of your custom interface to the user. System Preferences loads the view provided by your bundle and delivers lifecycle events to your preference pane object. Use that object to respond to interactions with the controls and views of your interface and to save any settings changes to the user’s defaults database.

> **Note**

>  Use preference pane bundles only for settings that must be managed separately from your app. For example, use it to manage settings that are shared between multiple apps in the same suite. Manage app-specific preferences using a custom preferences interface.

## Topics

### Preference Pane Interface

- [NSPreferencePane](preferencepanes/nspreferencepane.md): The interface for providing preference panes to System Preferences or other apps.

### Notifications

- [NSPreferencePrefPaneIsAvailable](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nspreferenceprefpaneisavailable): Notifies observers that the system preferences app is available to display your preferences.
- [NSPreferencePaneDoUnselect](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nspreferencepanedounselect): Notifies observers that the preference pane may be deselected.
- [NSPreferencePaneCancelUnselect](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nspreferencepanecancelunselect): Notifies observers that the preference pane should not be deselected.
- [NSPreferencePaneSwitchToPane](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nspreferencepaneswitchtopane): Notifies observers that the user selected a new preference pane.
- [NSPreferencePaneUpdateHelpMenu](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nspreferencepaneupdatehelpmenu): Notifies observers that your help menu content changed.

### Help Menu Keys

- [NSPrefPaneHelpMenuInfoPListKey](preferencepanes/nsprefpanehelpmenuinfoplistkey.md): The global help menu items associated with a preference pane.
- [NSPrefPaneHelpMenuTitleKey](preferencepanes/nsprefpanehelpmenutitlekey.md): The title of a help menu item in a preference pane.
- [NSPrefPaneHelpMenuAnchorKey](preferencepanes/nsprefpanehelpmenuanchorkey.md): The help book anchor to display.

### Reference

- [PreferencePanes Constants](preferencepanes/preferencepanes-constants.md)

# Preference Panes (Objective-C)

**Framework:** Preference Panes  
**Kind:** Framework  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

Integrate your app’s custom preferences into the System Preferences app.

<a id="overview"></a>

## Overview

Use the Preference Panes framework to integrate your custom system-level preferences into the System Preferences app. You use this framework to implement a preference pane bundle, which contains the custom interface you want to display to the user. You then install your bundle in the appropriate `Library/PreferencePanes` directory on the user’s system.

System Preferences works with your bundle’s custom [NSPreferencePane](preferencepanes/nspreferencepane.md) object to manage the presentation of your custom interface to the user. System Preferences loads the view provided by your bundle and delivers lifecycle events to your preference pane object. Use that object to respond to interactions with the controls and views of your interface and to save any settings changes to the user’s defaults database.

> **Note**

>  Use preference pane bundles only for settings that must be managed separately from your app. For example, use it to manage settings that are shared between multiple apps in the same suite. Manage app-specific preferences using a custom preferences interface.

## Topics

### Preference Pane Interface

- [NSPreferencePane](preferencepanes/nspreferencepane.md): The interface for providing preference panes to System Preferences or other apps.

### Notifications

- [NSPreferencePrefPaneIsAvailableNotification](preferencepanes/nspreferenceprefpaneisavailablenotification.md): Notifies observers that the system preferences app is available to display your preferences.
- [NSPreferencePaneDoUnselectNotification](preferencepanes/nspreferencepanedounselectnotification.md): Notifies observers that the preference pane may be deselected.
- [NSPreferencePaneCancelUnselectNotification](preferencepanes/nspreferencepanecancelunselectnotification.md): Notifies observers that the preference pane should not be deselected.
- [NSPreferencePaneSwitchToPaneNotification](preferencepanes/nspreferencepaneswitchtopanenotification.md): Notifies observers that the user selected a new preference pane.
- [NSPreferencePaneUpdateHelpMenuNotification](preferencepanes/nspreferencepaneupdatehelpmenunotification.md): Notifies observers that your help menu content changed.

### Help Menu Keys

- [NSPrefPaneHelpMenuInfoPListKey](preferencepanes/nsprefpanehelpmenuinfoplistkey.md): The global help menu items associated with a preference pane.
- [NSPrefPaneHelpMenuTitleKey](preferencepanes/nsprefpanehelpmenutitlekey.md): The title of a help menu item in a preference pane.
- [NSPrefPaneHelpMenuAnchorKey](preferencepanes/nsprefpanehelpmenuanchorkey.md): The help book anchor to display.

### Reference

- [PreferencePanes Constants](preferencepanes/preferencepanes-constants.md)
