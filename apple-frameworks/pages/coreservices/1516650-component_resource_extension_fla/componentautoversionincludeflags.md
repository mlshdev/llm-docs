> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516650-component_resource_extension_fla/componentautoversionincludeflags](https://developer.apple.com/documentation/coreservices/1516650-component_resource_extension_fla/componentautoversionincludeflags)

# componentAutoVersionIncludeFlags

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
componentAutoVersionIncludeFlags = (1 << 2)
```

<a id="discussion"></a>

## Discussion

Specify this flag if you want the Component Manager to include the `componentFlags` field of the component description structure when it searches for identical components in the process of performing automatic version control for your component. If you do not specify this flag, the Component Manager searches only the `componentType`, `componentSubType`, and `componentManufacturer` fields.

Note that the setting of the `componentAutoVersionIncludeFlags` flag affects automatic version control only and does not affect the search operations performed by `FindNextComponent` and `CountComponents`.
