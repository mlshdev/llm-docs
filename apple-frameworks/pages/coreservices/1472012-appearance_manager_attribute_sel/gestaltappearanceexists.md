> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1472012-appearance_manager_attribute_sel/gestaltappearanceexists](https://developer.apple.com/documentation/coreservices/1472012-appearance_manager_attribute_sel/gestaltappearanceexists)

# gestaltAppearanceExists

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
gestaltAppearanceExists = 0
```

<a id="discussion"></a>

## Discussion

If this bit is set, Appearance Manager functions are available. To determine which version of the Appearance Manager is installed, check for the presence of the `Gestalt` selector `gestaltAppearanceVersion`. If this bit is not set, Appearance Manager functions are not available.
