> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1471733-display_manager_attribute_select/gestaltdisplaymgrcanconfirm

# gestaltDisplayMgrCanConfirm

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Not yet supported. Most commonly comes up for display modes that are not marked `kModeSafe`. There is currently no system support for trying an unsafe mode and then restoring if the user does not confirm. When this is supported, this bit will be set.

## Declaration

```objectivec
gestaltDisplayMgrCanConfirm = 4
```
