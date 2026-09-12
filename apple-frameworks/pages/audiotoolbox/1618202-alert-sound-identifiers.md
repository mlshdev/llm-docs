> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/1618202-alert-sound-identifiers](https://developer.apple.com/documentation/audiotoolbox/1618202-alert-sound-identifiers)

# Alert Sound Identifiers (Swift)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Identifiers for alert sounds and alternatives to sounds, for use with the [AudioServicesPlayAlertSound(\_:)](audioservicesplayalertsound%28__%29.md) function.

## Topics

### Constants

- [kSystemSoundID_Vibrate](ksystemsoundid_vibrate.md): On the iPhone, use this constant with the [AudioServicesPlayAlertSound(\_:)](audioservicesplayalertsound%28__%29.md) function to invoke a brief vibration. On the iPod touch, does nothing.
- [kSystemSoundID_UserPreferredAlert](ksystemsoundid_userpreferredalert.md): On the desktop, use this constant with the [AudioServicesPlayAlertSound(\_:)](audioservicesplayalertsound%28__%29.md) function to play the alert specified in the Sound preference pane.
- [kSystemSoundID_FlashScreen](ksystemsoundid_flashscreen.md): On the desktop, use this constant with the [AudioServicesPlayAlertSound(\_:)](audioservicesplayalertsound%28__%29.md) function to display a flash of light on the screen.
- [kUserPreferredAlert](kuserpreferredalert.md): A deprecated sound identifier.

## See Also

### Creating and Disposing of System Sound Objects

- [AudioServicesCreateSystemSoundID(\_:\_:)](audioservicescreatesystemsoundid%28____%29.md): Creates a system sound object.
- [AudioServicesDisposeSystemSoundID(\_:)](audioservicesdisposesystemsoundid%28__%29.md): Disposes of a system sound object and associated resources.
- [SystemSoundID](systemsoundid.md): A system sound object, identified with a sound file you want to play.
- [System Sounds](1405222-system-sounds.md)

# Alert Sound Identifiers (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Identifiers for alert sounds and alternatives to sounds, for use with the [AudioServicesPlayAlertSound](audioservicesplayalertsound%28__%29.md) function.

## Topics

### Constants

- [kSystemSoundID_Vibrate](ksystemsoundid_vibrate.md): On the iPhone, use this constant with the [AudioServicesPlayAlertSound](audioservicesplayalertsound%28__%29.md) function to invoke a brief vibration. On the iPod touch, does nothing.
- [kSystemSoundID_UserPreferredAlert](ksystemsoundid_userpreferredalert.md): On the desktop, use this constant with the [AudioServicesPlayAlertSound](audioservicesplayalertsound%28__%29.md) function to play the alert specified in the Sound preference pane.
- [kSystemSoundID_FlashScreen](ksystemsoundid_flashscreen.md): On the desktop, use this constant with the [AudioServicesPlayAlertSound](audioservicesplayalertsound%28__%29.md) function to display a flash of light on the screen.
- [kUserPreferredAlert](kuserpreferredalert.md): A deprecated sound identifier.

## See Also

### Creating and Disposing of System Sound Objects

- [AudioServicesCreateSystemSoundID](audioservicescreatesystemsoundid%28____%29.md): Creates a system sound object.
- [AudioServicesDisposeSystemSoundID](audioservicesdisposesystemsoundid%28__%29.md): Disposes of a system sound object and associated resources.
- [SystemSoundID](systemsoundid.md): A system sound object, identified with a sound file you want to play.
- [System Sounds](1405222-system-sounds.md)
