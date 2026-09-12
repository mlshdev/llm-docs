> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1471836-script_manager_version_selector](https://developer.apple.com/documentation/coreservices/1471836-script_manager_version_selector)

# Script Manager Version Selector

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specifies version information for the Script Manager.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltScriptMgrVersion](1471836-script_manager_version_selector/gestaltscriptmgrversion.md): The selector you pass to the `Gestalt` function to determine the version number of the Script Manager (in the low-order word of the return value).
