> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1472012-appearance_manager_attribute_sel](https://developer.apple.com/documentation/coreservices/1472012-appearance_manager_attribute_sel)

# Appearance Manager Attribute Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify feature availability information for the Appearance Manager.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltAppearanceAttr](1472012-appearance_manager_attribute_sel/gestaltappearanceattr.md): The `Gestalt` selector passed to determine whether the Appearance Manager is present. Produces a 32-bit value whose bits you should test to determine which Appearance Manager features are available.
- [gestaltAppearanceExists](1472012-appearance_manager_attribute_sel/gestaltappearanceexists.md)
- [gestaltAppearanceCompatMode](1472012-appearance_manager_attribute_sel/gestaltappearancecompatmode.md)
