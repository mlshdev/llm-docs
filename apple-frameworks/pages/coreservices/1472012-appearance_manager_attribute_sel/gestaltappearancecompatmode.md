> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1472012-appearance_manager_attribute_sel/gestaltappearancecompatmode

# gestaltAppearanceCompatMode

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
gestaltAppearanceCompatMode = 1
```

<a id="discussion"></a>

## Discussion

If this bit is set, systemwide platinum appearance is off. When systemwide platinum appearance is off, the Appearance Manager does not auto-map standard System 7 definition functions to their Mac OS 8 equivalents (for those applications that have not called `RegisterAppearanceClient`). If this bit is not set, systemwide platinum appearance is on, and the Appearance Manager auto-maps standard System 7 definition functions to their Mac OS 8 equivalents for all applications.
