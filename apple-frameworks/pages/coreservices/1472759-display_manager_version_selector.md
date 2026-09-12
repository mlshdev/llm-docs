> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1472759-display_manager_version_selector](https://developer.apple.com/documentation/coreservices/1472759-display_manager_version_selector)

# Display Manager Version Selector

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specifies version information for the Display Manager.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltDisplayMgrVers](1472759-display_manager_version_selector/gestaltdisplaymgrvers.md): The `Gestalt` selector you pass to determine what version of the Display Manager is present. For example, a Gestalt result may be 0x00020500, which means that the Display Manager version 2.5 is present.
