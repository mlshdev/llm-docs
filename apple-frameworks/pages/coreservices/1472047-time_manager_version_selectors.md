> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1472047-time_manager_version_selectors](https://developer.apple.com/documentation/coreservices/1472047-time_manager_version_selectors)

# Time Manager Version Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify version information for the Time Manager.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltTimeMgrVersion](1472047-time_manager_version_selectors/gestalttimemgrversion.md): The Gestalt selector you pass to determine what version of the Time Manager is present.
- [gestaltStandardTimeMgr](1472047-time_manager_version_selectors/gestaltstandardtimemgr.md): If this bit is set, the original Time Manager is present.
- [gestaltRevisedTimeMgr](1472047-time_manager_version_selectors/gestaltrevisedtimemgr.md): If this bit is set, the revised Time Manager is present.
- [gestaltExtendedTimeMgr](1472047-time_manager_version_selectors/gestaltextendedtimemgr.md): If this bit is set, the extended Time Manager is present.
- [gestaltNativeTimeMgr](1472047-time_manager_version_selectors/gestaltnativetimemgr.md): If this bit is set, the native Time Manager is present.
