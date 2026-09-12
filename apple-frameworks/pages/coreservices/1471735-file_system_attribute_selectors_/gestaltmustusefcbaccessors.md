> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1471735-file_system_attribute_selectors_/gestaltmustusefcbaccessors](https://developer.apple.com/documentation/coreservices/1471735-file_system_attribute_selectors_/gestaltmustusefcbaccessors)

# gestaltMustUseFCBAccessors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

If this bit is set in the `response` parameter, the File Manager no longer supports the low memory globals `FCBSPtr` and `FSFCBLen`. All access to file or fork control blocks must use the File System Manager utility functions instead.

## Declaration

```objectivec
gestaltMustUseFCBAccessors = 13
```
