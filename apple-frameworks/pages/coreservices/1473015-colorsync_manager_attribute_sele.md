> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1473015-colorsync_manager_attribute_sele](https://developer.apple.com/documentation/coreservices/1473015-colorsync_manager_attribute_sele)

# ColorSync Manager Attribute Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify feature availability information for the ColorSync Manager.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltColorMatchingAttr](1473015-colorsync_manager_attribute_sele/gestaltcolormatchingattr.md): The selector for obtaining version information. Use when calling the `Gestalt` function to check for particular ColorSync Manager features.
- [gestaltHighLevelMatching](1473015-colorsync_manager_attribute_sele/gestalthighlevelmatching.md): This constant is provided for backward compatibility only. Bit 0 of the `Gestalt` response value is always set if ColorSync is present.
- [gestaltColorMatchingLibLoaded](1473015-colorsync_manager_attribute_sele/gestaltcolormatchinglibloaded.md): This constant is provided for backward compatibility only. Bit 1 of the `Gestalt` response value is always set on a Power Macintosh machine if ColorSync is present. It is always cleared on a 68K machine if ColorSync is present.
