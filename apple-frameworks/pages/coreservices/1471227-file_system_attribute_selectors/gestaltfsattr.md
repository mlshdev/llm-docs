> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1471227-file_system_attribute_selectors/gestaltfsattr](https://developer.apple.com/documentation/coreservices/1471227-file_system_attribute_selectors/gestaltfsattr)

# gestaltFSAttr

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

A selector you pass to the `Gestalt` function. If the Gestalt function returns `noErr`, the `response` parameter contains a 32-bit value specifying the features of the file system.

## Declaration

```objectivec
gestaltFSAttr = 'fs  '
```
