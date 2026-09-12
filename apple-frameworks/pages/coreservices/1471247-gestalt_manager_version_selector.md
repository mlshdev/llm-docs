> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1471247-gestalt_manager_version_selector](https://developer.apple.com/documentation/coreservices/1471247-gestalt_manager_version_selector)

# Gestalt Manager Version Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify Gestalt Manager version information.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltVersion](1471247-gestalt_manager_version_selector/gestaltversion.md): The selector you pass to the function [Gestalt](1471624-gestalt.md) to determine the version of the Gestalt Manager. The function passes back the version in the low-order word of the response.
- [gestaltValueImplementedVers](1471247-gestalt_manager_version_selector/gestaltvalueimplementedvers.md): The first version of the Gestalt Manager that implements this selector.
