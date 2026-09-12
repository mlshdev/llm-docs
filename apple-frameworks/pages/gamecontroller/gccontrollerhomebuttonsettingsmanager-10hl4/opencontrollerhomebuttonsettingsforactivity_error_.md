> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerhomebuttonsettingsmanager-10hl4/opencontrollerhomebuttonsettingsforactivity:error:](https://developer.apple.com/documentation/gamecontroller/gccontrollerhomebuttonsettingsmanager-10hl4/opencontrollerhomebuttonsettingsforactivity:error:)

# openControllerHomeButtonSettingsForActivity:error:

**Interface language:** Objective-C

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Opens the Settings app to the screen in game controller settings where the user can change the controller shortcut action.

## Declaration

```objectivec
- (BOOL) openControllerHomeButtonSettingsForActivity:(GCControllerHomeButtonSettingsCustomizationActivity) activity error:(NSError **) error;
```

<a id="return-value"></a>

## Return Value

YES if the Settings app was opened, NO if it could not be opened and \\p error contains additional information.  This function returns immediately after attempting to open the Settings app.
