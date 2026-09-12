> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1471733-display_manager_attribute_select](https://developer.apple.com/documentation/coreservices/1471733-display_manager_attribute_select)

# Display Manager Attribute Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify feature availability for the Display Manager.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltDisplayMgrAttr](1471733-display_manager_attribute_select/gestaltdisplaymgrattr.md): The `Gestalt` selector you pass to determine which Display Manager attributes are present.
- [gestaltDisplayMgrPresent](1471733-display_manager_attribute_select/gestaltdisplaymgrpresent.md): If `true`, the Display Manager is present.
- [gestaltDisplayMgrCanSwitchMirrored](1471733-display_manager_attribute_select/gestaltdisplaymgrcanswitchmirrored.md): If `true`, the Display Manager can switch modes on mirrored displays.
- [gestaltDisplayMgrSetDepthNotifies](1471733-display_manager_attribute_select/gestaltdisplaymgrsetdepthnotifies.md): If `true`, and you have registered for notification and you will be notified of depth mode changes.
- [gestaltDisplayMgrCanConfirm](1471733-display_manager_attribute_select/gestaltdisplaymgrcanconfirm.md): Not yet supported. Most commonly comes up for display modes that are not marked `kModeSafe`. There is currently no system support for trying an unsafe mode and then restoring if the user does not confirm. When this is supported, this bit will be set.
- [gestaltDisplayMgrColorSyncAware](1471733-display_manager_attribute_select/gestaltdisplaymgrcolorsyncaware.md): If `true`, Display Manager supports profiles for displays.
- [gestaltDisplayMgrGeneratesProfiles](1471733-display_manager_attribute_select/gestaltdisplaymgrgeneratesprofiles.md)
- [gestaltDisplayMgrSleepNotifies](1471733-display_manager_attribute_select/gestaltdisplaymgrsleepnotifies.md)
